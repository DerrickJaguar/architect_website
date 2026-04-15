'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects, type ProjectRecord } from '@/data/projects';

const categories = [
  'All',
  'Residential',
  'Commercial',
  'Institutional',
  'Hospitality',
  'Mixed Use',
];

const budgetBands: Array<'All' | 'Entry' | 'Mid' | 'Premium'> = ['All', 'Entry', 'Mid', 'Premium'];
const floorRanges = ['Any', '1-2', '3-5', '6+'];
const bedroomOptions = ['Any', '1-2', '3-4', '5+'];
const stageOptions: Array<'All' | ProjectRecord['stage']> = [
  'All',
  'Concept',
  'Design Stage',
  'Under Construction',
  'Completed',
];
const areaRanges = ['Any', '0-3000', '3001-10000', '10001+'];

type SortOption = 'Newest' | 'Largest' | 'Most Viewed';

const stageClasses: Record<ProjectRecord['stage'], string> = {
  Concept: 'bg-amber-100 text-amber-800',
  'Design Stage': 'bg-blue-100 text-blue-800',
  'Under Construction': 'bg-orange-100 text-orange-800',
  Completed: 'bg-emerald-100 text-emerald-800',
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBudget, setActiveBudget] = useState<'All' | 'Entry' | 'Mid' | 'Premium'>('All');
  const [activeFloors, setActiveFloors] = useState('Any');
  const [activeBedrooms, setActiveBedrooms] = useState('Any');
  const [activeStage, setActiveStage] = useState<'All' | ProjectRecord['stage']>('All');
  const [activeAreaRange, setActiveAreaRange] = useState('Any');
  const [activeLocation, setActiveLocation] = useState('All Locations');
  const [activeSort, setActiveSort] = useState<SortOption>('Newest');

  const locationOptions = useMemo(
    () => ['All Locations', ...Array.from(new Set(projects.map((project) => project.location)))],
    []
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const budget = params.get('budget') as 'Entry' | 'Mid' | 'Premium' | null;
    const bedrooms = params.get('bedrooms');
    const stage = params.get('stage') as ProjectRecord['stage'] | null;
    const location = params.get('location');
    const sort = params.get('sort') as SortOption | null;

    if (category && categories.includes(category)) {
      setActiveCategory(category);
    }
    if (budget && budgetBands.includes(budget)) {
      setActiveBudget(budget);
    }
    if (bedrooms === '4') {
      setActiveBedrooms('3-4');
    }
    if (stage && stageOptions.includes(stage)) {
      setActiveStage(stage);
    }
    if (location && locationOptions.includes(location)) {
      setActiveLocation(location);
    }
    if (sort && ['Newest', 'Largest', 'Most Viewed'].includes(sort)) {
      setActiveSort(sort);
    }
  }, []);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
      const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
      const budgetMatch = activeBudget === 'All' || project.budgetBand === activeBudget;
      const stageMatch = activeStage === 'All' || project.stage === activeStage;
      const locationMatch =
        activeLocation === 'All Locations' || project.location === activeLocation;

      const floorMatch =
        activeFloors === 'Any' ||
        (activeFloors === '1-2' && project.floors <= 2) ||
        (activeFloors === '3-5' && project.floors >= 3 && project.floors <= 5) ||
        (activeFloors === '6+' && project.floors >= 6);

      const bedroomMatch =
        activeBedrooms === 'Any' ||
        (activeBedrooms === '1-2' && project.bedrooms >= 1 && project.bedrooms <= 2) ||
        (activeBedrooms === '3-4' && project.bedrooms >= 3 && project.bedrooms <= 4) ||
        (activeBedrooms === '5+' && project.bedrooms >= 5);

      const areaMatch =
        activeAreaRange === 'Any' ||
        (activeAreaRange === '0-3000' && project.areaSqft <= 3000) ||
        (activeAreaRange === '3001-10000' && project.areaSqft >= 3001 && project.areaSqft <= 10000) ||
        (activeAreaRange === '10001+' && project.areaSqft >= 10001);

      return (
        categoryMatch &&
        budgetMatch &&
        stageMatch &&
        locationMatch &&
        floorMatch &&
        bedroomMatch &&
        areaMatch
      );
      })
      .sort((a, b) => {
        if (activeSort === 'Largest') {
          return b.areaSqft - a.areaSqft;
        }
        if (activeSort === 'Most Viewed') {
          return b.popularityScore - a.popularityScore;
        }

        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });
  }, [
    activeCategory,
    activeBudget,
    activeFloors,
    activeBedrooms,
    activeStage,
    activeAreaRange,
    activeLocation,
    activeSort,
  ]);

  const isNewProject = (publishedAt: string) => {
    const diffInMs = Date.now() - new Date(publishedAt).getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays <= 60;
  };

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-primary font-display text-4xl md:text-5xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our portfolio of exceptional architectural projects across Uganda
          </p>
        </div>
      </section>

      {/* Sticky Filter Buttons */}
      <section className="lg:sticky lg:top-20 z-30 py-6 bg-white/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-light text-primary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 text-sm sm:flex-wrap sm:justify-center sm:overflow-visible">
            {budgetBands.map((budget) => (
              <button
                key={budget}
                onClick={() => setActiveBudget(budget)}
                className={`shrink-0 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeBudget === budget
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {budget === 'All' ? 'All Budgets' : budget}
              </button>
            ))}

            {floorRanges.map((range) => (
              <button
                key={range}
                onClick={() => setActiveFloors(range)}
                className={`shrink-0 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeFloors === range
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {range === 'Any' ? 'Any Floors' : `${range} Floors`}
              </button>
            ))}

            {bedroomOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveBedrooms(option)}
                className={`shrink-0 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeBedrooms === option
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {option === 'Any' ? 'Any Bedrooms' : `${option} Bedrooms`}
              </button>
            ))}

            {stageOptions.map((stage) => (
              <button
                key={stage}
                onClick={() => setActiveStage(stage)}
                className={`shrink-0 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeStage === stage
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {stage === 'All' ? 'All Stages' : stage}
              </button>
            ))}

            {areaRanges.map((range) => (
              <button
                key={range}
                onClick={() => setActiveAreaRange(range)}
                className={`shrink-0 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeAreaRange === range
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {range === 'Any' ? 'Any Area' : `${range} ft2`}
              </button>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <select
              value={activeLocation}
              onChange={(event) => setActiveLocation(event.target.value)}
              className="w-full rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none"
            >
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <select
              value={activeSort}
              onChange={(event) => setActiveSort(event.target.value as SortOption)}
              className="w-full rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none"
            >
              <option value="Newest">Sort: Newest</option>
              <option value="Largest">Sort: Largest</option>
              <option value="Most Viewed">Sort: Most Viewed</option>
            </select>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold text-primary">{filteredProjects.length}</span> projects
              match your filters
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveBudget('All');
                setActiveFloors('Any');
                setActiveBedrooms('Any');
                setActiveStage('All');
                setActiveAreaRange('Any');
                setActiveLocation('All Locations');
                setActiveSort('Newest');
              }}
              className="text-accent font-semibold hover:underline text-left sm:text-right"
            >
              Reset Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${stageClasses[project.stage]}`}
                  >
                    {project.stage}
                  </span>
                  <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2 max-w-[60%]">
                    {project.isFeatured && (
                      <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wide">
                        Featured
                      </span>
                    )}
                    {isNewProject(project.publishedAt) && (
                      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-wide">
                        New
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {project.budgetBand}
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
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs sm:text-sm">
                    <div className="bg-light rounded-lg px-3 py-2">
                      <p className="text-gray-500">Area</p>
                      <p className="text-primary font-semibold">{project.areaSqft.toLocaleString()} ft²</p>
                    </div>
                    <div className="bg-light rounded-lg px-3 py-2">
                      <p className="text-gray-500">Floors</p>
                      <p className="text-primary font-semibold">{project.floors}</p>
                    </div>
                    <div className="bg-light rounded-lg px-3 py-2">
                      <p className="text-gray-500">Bedrooms</p>
                      <p className="text-primary font-semibold">{project.bedrooms > 0 ? project.bedrooms : 'N/A'}</p>
                    </div>
                  </div>
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
