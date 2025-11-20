'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'C&H Kayunga Project',
    category: 'Residential',
    location: 'Kayunga, Uganda',
    year: '2024',
    image: '/images/C&H kayunga_Photo - 1.jpg',
    description: 'Modern residential development featuring contemporary design and functionality',
  },
  {
    id: 2,
    title: 'Mr Josh Residence Option 11',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2024',
    image: '/images/Mr Josh Option 11_Photo - 2.jpg',
    description: 'Luxury residential home with sophisticated architectural elements',
  },
  {
    id: 3,
    title: 'Hajji Umar Residence',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2024',
    image: '/images/222 Hajji Umar_Photo - 1.jpg',
    description: 'Elegant residential property combining traditional and modern design',
  },
  {
    id: 4,
    title: 'Commercial Complex',
    category: 'Commercial',
    location: 'Kampala, Uganda',
    year: '2023',
    image: '/images/comm1.jpg',
    description: 'Multi-purpose commercial building with modern amenities',
  },
  {
    id: 5,
    title: 'Condominium Development',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2023',
    image: '/images/condomonium.jpeg',
    description: 'Contemporary condominium complex with premium facilities',
  },
  {
    id: 6,
    title: 'Gayaza Residential Project',
    category: 'Residential',
    location: 'Gayaza, Uganda',
    year: '2023',
    image: '/images/gayaza.jpeg',
    description: 'Modern residential estate with sustainable design features',
  },
  {
    id: 7,
    title: 'Apartment Complex',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2023',
    image: '/images/apartment.jpeg',
    description: 'Contemporary apartment building with 40+ units',
  },
  {
    id: 8,
    title: 'Mixed-Use Development',
    category: 'Commercial',
    location: 'Kampala, Uganda',
    year: '2022',
    image: '/images/mixed.jpeg',
    description: 'Integrated commercial and residential development',
  },
  {
    id: 9,
    title: 'Commercial Design Project',
    category: 'Commercial',
    location: 'Kampala, Uganda',
    year: '2024',
    image: '/images/comm2.jpg',
    description: 'State-of-the-art commercial facility with modern architecture',
  },
  {
    id: 10,
    title: 'Luxury Bedroom Suite',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2024',
    image: '/images/Bedroom.jpeg',
    description: 'High-end residential interior with contemporary finishes',
  },
  {
    id: 11,
    title: 'Architectural Design Concept',
    category: 'Residential',
    location: 'Uganda',
    year: '2024',
    image: '/images/design1.jpg',
    description: 'Innovative residential design showcasing modern aesthetics',
  },
  {
    id: 12,
    title: 'Contemporary Construction',
    category: 'Commercial',
    location: 'Kampala, Uganda',
    year: '2023',
    image: '/images/c0ns5.jpg',
    description: 'Modern construction project with advanced building techniques',
  },
];

const categories = ['All', 'Commercial', 'Residential', 'Hospitality', 'Industrial', 'Public'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-linear-to-r from-primary to-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our portfolio of exceptional architectural projects across Uganda
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-white shadow-lg scale-105'
                    : 'bg-light text-primary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-primary font-display text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-accent"></i>
                    {project.location}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                  >
                    View Details
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <i className="fas fa-folder-open text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 text-xl">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-primary font-display text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your architectural vision to life
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-accent/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
