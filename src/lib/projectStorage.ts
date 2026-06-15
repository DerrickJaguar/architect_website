import { projects as staticProjects, type ProjectRecord } from '@/data/projects';

const STORAGE_KEY = 'aa_custom_projects';

export function getStoredProjects(): ProjectRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProjectRecord[]) : [];
  } catch {
    return [];
  }
}

export function getAllProjects(): ProjectRecord[] {
  return [...staticProjects, ...getStoredProjects()];
}

export function saveStoredProject(project: ProjectRecord): void {
  const existing = getStoredProjects();
  const updated = [...existing.filter((p) => p.id !== project.id), project];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function deleteStoredProject(id: number): void {
  const existing = getStoredProjects();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.filter((p) => p.id !== id)));
}

export function generateId(): number {
  const stored = getStoredProjects();
  const maxStored = stored.length > 0 ? Math.max(...stored.map((p) => p.id)) : 0;
  return Math.max(maxStored, 1000) + 1;
}
