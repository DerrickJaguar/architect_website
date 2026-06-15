'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  deleteStoredProject,
  generateId,
  getStoredProjects,
  saveStoredProject,
} from '@/lib/projectStorage';
import { type ProjectRecord } from '@/data/projects';

const ADMIN_PASSWORD = 'above@admin';

const CATEGORIES = ['Residential', 'Commercial', 'Institutional', 'Hospitality', 'Mixed Use'];
const BUDGET_BANDS: ProjectRecord['budgetBand'][] = ['Entry', 'Mid', 'Premium'];
const STAGES: ProjectRecord['stage'][] = ['Concept', 'Design Stage', 'Under Construction', 'Completed'];

const blankForm = (): Omit<ProjectRecord, 'id'> => ({
  title: '',
  category: 'Residential',
  location: '',
  year: new Date().getFullYear().toString(),
  areaSqft: 0,
  floors: 1,
  bedrooms: 0,
  budgetBand: 'Mid',
  stage: 'Concept',
  isFeatured: false,
  publishedAt: new Date().toISOString().split('T')[0],
  popularityScore: 50,
  image: '',
  description: '',
  details: { client: '', budget: '', features: [''], gallery: [''] },
});

async function uploadFile(file: File, projectTitle: string): Promise<string> {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('projectTitle', projectTitle || 'uncategorized');
  const res = await fetch('/api/upload', { method: 'POST', body: fd });
  if (!res.ok) throw new Error('Upload failed');
  const data = await res.json();
  return data.path as string;
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [form, setForm] = useState(blankForm());
  const [storedProjects, setStoredProjects] = useState<ProjectRecord[]>([]);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState<'add' | 'manage'>('add');
  const [uploading, setUploading] = useState<Record<string, boolean>>({});

  const mainImageInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const ok = localStorage.getItem('aa_admin_auth') === '1';
    if (ok) setAuthed(true);
    setStoredProjects(getStoredProjects());
  }, []);

  function login() {
    if (passwordInput === ADMIN_PASSWORD) {
      localStorage.setItem('aa_admin_auth', '1');
      setAuthed(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  function logout() {
    localStorage.removeItem('aa_admin_auth');
    setAuthed(false);
    setPasswordInput('');
  }

  function setField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function setDetail<K extends keyof typeof form.details>(key: K, value: (typeof form.details)[K]) {
    setForm((f) => ({ ...f, details: { ...f.details, [key]: value } }));
  }

  function setListItem(field: 'features' | 'gallery', index: number, value: string) {
    setDetail(field, form.details[field].map((v, i) => (i === index ? value : v)));
  }

  function addListItem(field: 'features' | 'gallery') {
    setDetail(field, [...form.details[field], '']);
  }

  function removeListItem(field: 'features' | 'gallery', index: number) {
    setDetail(field, form.details[field].filter((_, i) => i !== index));
  }

  async function handleMainImageBrowse(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading((u) => ({ ...u, main: true }));
    try {
      const path = await uploadFile(file, form.title);
      setField('image', path);
    } catch {
      alert('Upload failed. Make sure the dev server is running.');
    } finally {
      setUploading((u) => ({ ...u, main: false }));
      e.target.value = '';
    }
  }

  async function handleGalleryBrowse(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setUploading((u) => ({ ...u, gallery: true }));
    try {
      const paths = await Promise.all(files.map((f) => uploadFile(f, form.title)));
      // Fill empty slots first, then append
      const current = [...form.details.gallery];
      const newList = [...current];
      paths.forEach((p) => {
        const emptyIdx = newList.findIndex((v) => !v.trim());
        if (emptyIdx !== -1) newList[emptyIdx] = p;
        else newList.push(p);
      });
      setDetail('gallery', newList);
    } catch {
      alert('Upload failed. Make sure the dev server is running.');
    } finally {
      setUploading((u) => ({ ...u, gallery: false }));
      e.target.value = '';
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const project: ProjectRecord = {
      ...form,
      id: generateId(),
      details: {
        ...form.details,
        features: form.details.features.filter((f) => f.trim()),
        gallery: form.details.gallery.filter((g) => g.trim()),
      },
    };
    saveStoredProject(project);
    setStoredProjects(getStoredProjects());
    setForm(blankForm());
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function handleDelete(id: number) {
    deleteStoredProject(id);
    setStoredProjects(getStoredProjects());
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
          <h1 className="text-primary font-display text-3xl font-bold mb-2 text-center">Admin Access</h1>
          <p className="text-gray-500 text-sm text-center mb-8">Enter the admin password to continue</p>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && login()}
            placeholder="Password"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-3 focus:outline-none focus:border-accent"
          />
          {passwordError && <p className="text-red-500 text-sm mb-3">Incorrect password.</p>}
          <button
            onClick={login}
            className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-primary font-display text-3xl font-bold">Project Admin</h1>
            <p className="text-gray-500 text-sm mt-1">Add and manage custom projects</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/projects" className="text-accent font-semibold text-sm hover:underline">
              View Site
            </Link>
            <button onClick={logout} className="text-gray-400 hover:text-gray-600 text-sm">
              Log out
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-white rounded-xl p-1 shadow-sm w-fit">
          {(['add', 'manage'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded-lg font-semibold text-sm capitalize transition-all ${
                tab === t ? 'bg-accent text-white shadow' : 'text-gray-500 hover:text-primary'
              }`}
            >
              {t === 'add' ? 'Add Project' : `Manage (${storedProjects.length})`}
            </button>
          ))}
        </div>

        {/* ── MANAGE TAB ── */}
        {tab === 'manage' && (
          <div className="space-y-4">
            {storedProjects.length === 0 && (
              <div className="bg-white rounded-xl shadow p-12 text-center text-gray-400">
                No custom projects yet.
              </div>
            )}
            {storedProjects.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
                {p.image && (
                  <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="80px" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-primary truncate">{p.title}</p>
                  <p className="text-sm text-gray-500">{p.category} · {p.location} · {p.stage}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{p.details.gallery.length} gallery image(s)</p>
                </div>
                <Link
                  href={`/projects/${p.id}`}
                  className="text-accent text-sm font-semibold hover:underline shrink-0"
                >
                  View
                </Link>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-red-400 hover:text-red-600 text-sm font-semibold shrink-0 ml-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ── ADD PROJECT TAB ── */}
        {tab === 'add' && (
          <form onSubmit={handleSubmit} className="space-y-8">
            {saved && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-5 py-4 font-medium">
                Project saved! It will appear on the projects page immediately.
              </div>
            )}

            {/* Basic Info */}
            <section className="bg-white rounded-xl shadow p-6 space-y-5">
              <h2 className="text-primary font-display text-xl font-semibold border-b pb-3">Basic Info</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Project Title *</label>
                  <input
                    required
                    value={form.title}
                    onChange={(e) => setField('title', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                    placeholder="e.g. Kampala Heights Residence"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Uploaded images will be saved under <code className="bg-gray-100 px-1 rounded">public/images/{form.title ? form.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : 'project-title'}/</code>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Category *</label>
                  <select
                    value={form.category}
                    onChange={(e) => setField('category', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                  >
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Stage *</label>
                  <select
                    value={form.stage}
                    onChange={(e) => setField('stage', e.target.value as ProjectRecord['stage'])}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                  >
                    {STAGES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Budget Band *</label>
                  <select
                    value={form.budgetBand}
                    onChange={(e) => setField('budgetBand', e.target.value as ProjectRecord['budgetBand'])}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                  >
                    {BUDGET_BANDS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Location *</label>
                  <input
                    required
                    value={form.location}
                    onChange={(e) => setField('location', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                    placeholder="e.g. Kampala, Uganda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Year</label>
                  <input
                    value={form.year}
                    onChange={(e) => setField('year', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                    placeholder="2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Floors</label>
                  <input
                    type="number" min={1}
                    value={form.floors}
                    onChange={(e) => setField('floors', parseInt(e.target.value) || 1)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Bedrooms</label>
                  <input
                    type="number" min={0}
                    value={form.bedrooms}
                    onChange={(e) => setField('bedrooms', parseInt(e.target.value) || 0)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Area (sqft)</label>
                  <input
                    type="number" min={0}
                    value={form.areaSqft}
                    onChange={(e) => setField('areaSqft', parseInt(e.target.value) || 0)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Popularity Score (0–100)</label>
                  <input
                    type="number" min={0} max={100}
                    value={form.popularityScore}
                    onChange={(e) => setField('popularityScore', parseInt(e.target.value) || 0)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Published At</label>
                  <input
                    type="date"
                    value={form.publishedAt}
                    onChange={(e) => setField('publishedAt', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="sm:col-span-2 flex items-center gap-3 pt-1">
                  <input
                    id="featured" type="checkbox"
                    checked={form.isFeatured}
                    onChange={(e) => setField('isFeatured', e.target.checked)}
                    className="w-4 h-4 accent-accent"
                  />
                  <label htmlFor="featured" className="text-sm font-semibold text-gray-700">
                    Mark as Featured
                  </label>
                </div>
              </div>
            </section>

            {/* Description */}
            <section className="bg-white rounded-xl shadow p-6 space-y-5">
              <h2 className="text-primary font-display text-xl font-semibold border-b pb-3">Description & Details</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Short Description *</label>
                <textarea
                  required rows={3}
                  value={form.description}
                  onChange={(e) => setField('description', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent resize-none"
                  placeholder="Brief description shown on the project card…"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Client</label>
                  <input
                    value={form.details.client ?? ''}
                    onChange={(e) => setDetail('client', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                    placeholder="Client name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Budget</label>
                  <input
                    value={form.details.budget ?? ''}
                    onChange={(e) => setDetail('budget', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                    placeholder="e.g. UGX 500M"
                  />
                </div>
              </div>
            </section>

            {/* Main Image */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
              <h2 className="text-primary font-display text-xl font-semibold border-b pb-3">Main Image</h2>
              <p className="text-xs text-gray-400">This is the cover image shown on the project card.</p>

              {/* Hidden file input */}
              <input
                ref={mainImageInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleMainImageBrowse}
              />

              <div className="flex gap-3 items-center">
                <input
                  value={form.image}
                  onChange={(e) => setField('image', e.target.value)}
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent text-sm"
                  placeholder="/images/project-folder/cover.jpg"
                />
                <button
                  type="button"
                  onClick={() => mainImageInputRef.current?.click()}
                  disabled={uploading.main}
                  className="shrink-0 flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 disabled:opacity-60 transition-colors"
                >
                  {uploading.main ? (
                    <><i className="fas fa-spinner fa-spin"></i> Uploading…</>
                  ) : (
                    <><i className="fas fa-folder-open"></i> Browse</>
                  )}
                </button>
              </div>

              {form.image && (
                <div className="relative h-48 rounded-xl overflow-hidden bg-gray-100">
                  <Image src={form.image} alt="Main image preview" fill className="object-cover" sizes="800px" />
                  <button
                    type="button"
                    onClick={() => setField('image', '')}
                    className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-black/80"
                  >
                    <i className="fas fa-times text-xs"></i>
                  </button>
                </div>
              )}
            </section>

            {/* Features */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
              <h2 className="text-primary font-display text-xl font-semibold border-b pb-3">Features</h2>
              {form.details.features.map((feat, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    value={feat}
                    onChange={(e) => setListItem('features', i, e.target.value)}
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent"
                    placeholder={`Feature ${i + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => removeListItem('features', i)}
                    className="text-red-400 hover:text-red-600 px-2"
                    aria-label="Remove feature"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem('features')}
                className="text-accent font-semibold text-sm hover:underline flex items-center gap-1"
              >
                <i className="fas fa-plus"></i> Add Feature
              </button>
            </section>

            {/* Gallery */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <h2 className="text-primary font-display text-xl font-semibold">Gallery Images</h2>
                {/* Hidden multi-file input */}
                <input
                  ref={galleryInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleGalleryBrowse}
                />
                <button
                  type="button"
                  onClick={() => galleryInputRef.current?.click()}
                  disabled={uploading.gallery || !form.title.trim()}
                  title={!form.title.trim() ? 'Enter a project title first' : ''}
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  {uploading.gallery ? (
                    <><i className="fas fa-spinner fa-spin"></i> Uploading…</>
                  ) : (
                    <><i className="fas fa-images"></i> Browse & Upload</>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-400">
                You can select multiple images at once. They'll be saved under{' '}
                <code className="bg-gray-100 px-1 rounded">
                  public/images/{form.title ? form.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : 'project-title'}/
                </code>
              </p>

              {form.details.gallery.length === 0 && (
                <p className="text-gray-400 text-sm py-2">No gallery images yet.</p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {form.details.gallery.map((src, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        value={src}
                        onChange={(e) => setListItem('gallery', i, e.target.value)}
                        className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent"
                        placeholder={`/images/project/image-${i + 1}.jpg`}
                      />
                      <button
                        type="button"
                        onClick={() => removeListItem('gallery', i)}
                        className="text-red-400 hover:text-red-600 px-2 shrink-0"
                        aria-label="Remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    {src && (
                      <div className="relative h-32 rounded-lg overflow-hidden bg-gray-100">
                        <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover" sizes="400px" />
                        <div className="absolute bottom-1 left-2 text-white text-xs font-semibold bg-black/50 px-2 py-0.5 rounded">
                          {i + 1}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => addListItem('gallery')}
                className="text-accent font-semibold text-sm hover:underline flex items-center gap-1"
              >
                <i className="fas fa-plus"></i> Add Image URL Manually
              </button>
            </section>

            <button
              type="submit"
              className="w-full bg-accent text-white py-4 rounded-xl font-bold text-base hover:bg-accent/90 hover:shadow-xl transition-all"
            >
              Save Project
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
