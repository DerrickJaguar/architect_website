'use client';

import { notFound } from 'next/navigation';
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
  details: {
    client?: string;
    area?: string;
    budget?: string;
    status: string;
    features: string[];
    gallery: string[];
  };
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
    details: {
      area: '2,500 sq ft',
      status: 'Completed',
      features: [
        'Modern architectural design',
        'Spacious living areas',
        'Energy-efficient systems',
        'High-quality finishes',
        'Landscaped gardens',
      ],
      gallery: [
        '/images/C&H kayunga_Photo - 1.jpg',
        '/images/C&H kayunga_Photo - 2.jpg',
        '/images/C&H kayunga_Photo - 5.jpg',
        '/images/C&H kayunga_Photo - 10.jpg',
      ],
    },
  },
  {
    id: 2,
    title: 'Mr Josh Residence Option 11',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2024',
    image: '/images/Mr Josh Option 11_Photo - 2.jpg',
    description: 'Luxury residential home with sophisticated architectural elements',
    details: {
      client: 'Mr. Joshua',
      area: '3,200 sq ft',
      status: 'Completed',
      features: [
        'Contemporary luxury design',
        'Premium construction materials',
        'Smart home integration',
        'Multiple living spaces',
        'Private outdoor areas',
      ],
      gallery: [
        '/images/Mr Josh Option 11_Photo - 2.jpg',
        '/images/Mr Josh Option 11_Photo - 6.jpg',
        '/images/Mr Josh Option 11_Photo - 7.jpg',
        '/images/Mr Josh Option 11_16 - Photo.jpg',
        '/images/Mr Josh Option 11_17 - Photo.jpg',
      ],
    },
  },
  {
    id: 3,
    title: 'Hajji Umar Residence',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2024',
    image: '/images/222 Hajji Umar_Photo - 1.jpg',
    description: 'Elegant residential property combining traditional and modern design',
    details: {
      client: 'Hajji Umar',
      area: '2,800 sq ft',
      status: 'Completed',
      features: [
        'Blend of traditional and modern elements',
        'Spacious family rooms',
        'High ceilings',
        'Premium finishes',
        'Secure compound',
      ],
      gallery: [
        '/images/222 Hajji Umar_Photo - 1.jpg',
        '/images/222 Hajji Umar_Photo - 2.jpg',
        '/images/222 Hajji Umar_Photo - 3.jpg',
        '/images/222 Hajji Umar_Photo - 6.jpg',
      ],
    },
  },
  {
    id: 4,
    title: 'Commercial Complex',
    category: 'Commercial',
    location: 'Kampala, Uganda',
    year: '2023',
    image: '/images/comm1.jpg',
    description: 'Multi-purpose commercial building with modern amenities',
    details: {
      area: '8,500 sq ft',
      status: 'Completed',
      features: [
        'Modern commercial facade',
        'Flexible floor plans',
        'Ample parking space',
        'High-speed elevators',
        'Energy-efficient lighting',
      ],
      gallery: [
        '/images/comm1.jpg',
        '/images/comm2.jpg',
      ],
    },
  },
  {
    id: 5,
    title: 'Condominium Development',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2023',
    image: '/images/condomonium.jpeg',
    description: 'Contemporary condominium complex with premium facilities',
    details: {
      area: '25,000 sq ft',
      status: 'Completed',
      features: [
        'Multiple residential units',
        'Shared amenities',
        'Security systems',
        'Modern infrastructure',
        'Community spaces',
      ],
      gallery: [
        '/images/condomonium.jpeg',
        '/images/apartment.jpeg',
      ],
    },
  },
  {
    id: 6,
    title: 'Gayaza Residential Project',
    category: 'Residential',
    location: 'Gayaza, Uganda',
    year: '2023',
    image: '/images/gayaza.jpeg',
    description: 'Modern residential estate with sustainable design features',
    details: {
      area: '3,000 sq ft',
      status: 'Completed',
      features: [
        'Sustainable design principles',
        'Natural ventilation',
        'Rainwater harvesting',
        'Solar power integration',
        'Green spaces',
      ],
      gallery: [
        '/images/gayaza.jpeg',
        '/images/design1.jpg',
        '/images/design3.jpg',
      ],
    },
  },
  {
    id: 7,
    title: 'Apartment Complex',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2023',
    image: '/images/apartment.jpeg',
    description: 'Contemporary apartment building with 40+ units',
    details: {
      area: '35,000 sq ft',
      status: 'Completed',
      features: [
        '40+ residential units',
        'Modern apartment layouts',
        'Shared facilities',
        'Parking for residents',
        'Security features',
      ],
      gallery: [
        '/images/apartment.jpeg',
        '/images/Bedroom.jpeg',
      ],
    },
  },
  {
    id: 8,
    title: 'Mixed-Use Development',
    category: 'Commercial',
    location: 'Kampala, Uganda',
    year: '2022',
    image: '/images/mixed.jpeg',
    description: 'Integrated commercial and residential development',
    details: {
      area: '45,000 sq ft',
      status: 'Completed',
      features: [
        'Commercial and residential spaces',
        'Retail units on ground floor',
        'Residential apartments above',
        'Integrated design',
        'Urban planning excellence',
      ],
      gallery: [
        '/images/mixed.jpeg',
        '/images/design5.jpg',
      ],
    },
  },
  {
    id: 9,
    title: 'Commercial Design Project',
    category: 'Commercial',
    location: 'Kampala, Uganda',
    year: '2024',
    image: '/images/comm2.jpg',
    description: 'State-of-the-art commercial facility with modern architecture',
    details: {
      area: '6,000 sq ft',
      status: 'Completed',
      features: [
        'Contemporary design',
        'Professional workspace',
        'Modern amenities',
        'Accessible location',
        'Quality construction',
      ],
      gallery: [
        '/images/comm2.jpg',
        '/images/comm1.jpg',
      ],
    },
  },
  {
    id: 10,
    title: 'Luxury Bedroom Suite',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2024',
    image: '/images/Bedroom.jpeg',
    description: 'High-end residential interior with contemporary finishes',
    details: {
      area: '1,200 sq ft',
      status: 'Completed',
      features: [
        'Premium interior finishes',
        'Custom furniture design',
        'Luxury materials',
        'Attention to detail',
        'Modern aesthetics',
      ],
      gallery: [
        '/images/Bedroom.jpeg',
      ],
    },
  },
  {
    id: 11,
    title: 'Architectural Design Concept',
    category: 'Residential',
    location: 'Uganda',
    year: '2024',
    image: '/images/design1.jpg',
    description: 'Innovative residential design showcasing modern aesthetics',
    details: {
      area: '2,400 sq ft',
      status: 'Design Phase',
      features: [
        'Innovative architectural concepts',
        'Modern aesthetic approach',
        'Functional design',
        'Creative solutions',
        'Future-ready design',
      ],
      gallery: [
        '/images/design1.jpg',
        '/images/design3.jpg',
        '/images/design5.jpg',
      ],
    },
  },
  {
    id: 12,
    title: 'Contemporary Construction',
    category: 'Commercial',
    location: 'Kampala, Uganda',
    year: '2023',
    image: '/images/c0ns5.jpg',
    description: 'Modern construction project with advanced building techniques',
    details: {
      area: '10,000 sq ft',
      status: 'In Progress',
      features: [
        'Advanced construction methods',
        'Quality materials',
        'Professional execution',
        'Modern building standards',
        'Timely completion',
      ],
      gallery: [
        '/images/c0ns5.jpg',
      ],
    },
  },
];

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Project Header */}
      <section className="relative py-20 bg-linear-to-r from-primary to-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </Link>
          <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <span className="bg-accent/20 text-white px-4 py-2 rounded-full font-semibold">
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
              {project.details.status}
            </span>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="relative h-[60vh] bg-gray-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Project Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              <div className="bg-light p-8 rounded-lg sticky top-8">
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
                  {project.details.area && (
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Area</p>
                      <p className="text-primary font-semibold">{project.details.area}</p>
                    </div>
                  )}
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
                    <p className="text-primary font-semibold">{project.details.status}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300">
                  <Link
                    href="/contact"
                    className="block w-full bg-accent text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-accent/90 hover:shadow-lg transition-all duration-300"
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
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your architectural vision to life
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-white hover:text-accent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
