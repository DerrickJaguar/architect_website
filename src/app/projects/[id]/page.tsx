'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Project Header */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary/80 hover:text-primary mb-6 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </Link>
          <h1 className="text-primary font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-semibold">
              {project.category}
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt"></i>
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-calendar"></i>
              {project.year}
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-check-circle"></i>
              {project.stage}
            </span>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-primary font-display text-3xl font-bold mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <h3 className="text-primary font-display text-2xl font-bold mb-4">
                Key Features
              </h3>
              <ul className="space-y-3 mb-8">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <i className="fas fa-check-circle text-accent mt-1"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-light p-6 md:p-8 rounded-lg lg:sticky lg:top-24">
                <h3 className="text-primary font-display text-2xl font-bold mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  {project.details.client && (
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Client</p>
                      <p className="text-primary font-semibold">{project.details.client}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Area</p>
                    <p className="text-primary font-semibold">
                      {project.areaSqft.toLocaleString()} sq ft
                    </p>
                  </div>
                  {project.details.budget && (
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Budget</p>
                      <p className="text-primary font-semibold">{project.details.budget}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Year</p>
                    <p className="text-primary font-semibold">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Location</p>
                    <p className="text-primary font-semibold">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Status</p>
                    <p className="text-primary font-semibold">{project.stage}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300">
                  <Link
                    href="/contact"
                    className="block w-full bg-accent text-white text-center px-5 sm:px-6 py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-accent/90 hover:shadow-lg transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.details.gallery.length > 0 && (
        <section className="py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary font-display text-3xl font-bold mb-12 text-center">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.details.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-80 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <i className="fas fa-search-plus text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary font-display text-3xl font-bold mb-12 text-center">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-primary font-display text-xl font-semibold mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600">{relatedProject.location}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-primary to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your architectural vision to life
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-white hover:text-accent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
