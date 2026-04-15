"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BenefitStrip from '@/components/BenefitStrip';

export default function HomePage() {
  const heroImages = [
    '/images/item-1.jpg',
    '/images/item-2.jpg',
    '/images/item-3.jpg',
    '/images/item-9.jpg',
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const designByNeed = [
    {
      title: 'By Budget',
      copy: 'From compact city homes to premium estates, browse options by investment level.',
      icon: 'fa-sack-dollar',
      href: '/projects?budget=Mid',
    },
    {
      title: 'By Family Size',
      copy: 'Explore layouts for young families, growing households, and multi-generational living.',
      icon: 'fa-people-roof',
      href: '/projects?bedrooms=4',
    },
    {
      title: 'By Property Type',
      copy: 'Compare residential, hospitality, commercial, and mixed-use project directions.',
      icon: 'fa-layer-group',
      href: '/projects?category=Residential',
    },
  ];

  const testimonials = [
    {
      quote:
        'Above Architects translated our rough concept into a highly functional apartment block and guided us through approvals with confidence.',
      name: 'Sarah N.',
      role: 'Developer, Kampala',
    },
    {
      quote:
        'The team balanced aesthetics with construction practicality, helping us keep quality high while staying within budget.',
      name: 'Paul K.',
      role: 'Homeowner, Gayaza',
    },
    {
      quote:
        'From early design workshops to final handover support, communication was clear and timelines were well managed.',
      name: 'Amina R.',
      role: 'Project Sponsor, Wakiso',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative mt-20 h-[68vh] sm:h-[70vh] md:h-[76vh] flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Architecture showcase ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-700 ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Build your dream home
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Transforming visions into exceptional spaces across Uganda with innovative design and
            sustainable solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-block bg-white text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded font-bold text-sm sm:text-base hover:bg-light hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              View Our Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded font-bold text-sm sm:text-base hover:bg-white hover:text-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 flex gap-2">
          {heroImages.map((image, index) => (
            <button
              key={image}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeSlide === index
                  ? 'bg-white text-primary border-white'
                  : 'bg-black/30 text-white border-white/60 hover:bg-white/20'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>

      <BenefitStrip />

      {/* Design by Need */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-primary font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Start Your Journey by Need
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Navigate projects by the decision lens you care about most and get to the right
              direction faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designByNeed.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="fade-up group rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <i
                  className={`fas ${item.icon} text-accent text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                ></i>
                <h3 className="text-primary font-display text-xl sm:text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.copy}</p>
                <span className="inline-flex items-center gap-2 text-accent font-semibold">
                  Explore
                  <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Services Section */}
      <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-light/70 via-white to-light/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center mb-16">
            <h2 className="text-primary font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Process & Expertise
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              At Above Architects, our team is the heart of everything we create
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-up bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-accent text-5xl mb-6">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="text-primary font-display text-2xl font-semibold mb-4">
                Perfect Design
              </h3>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Perfect design is the result of a thoughtful process—our work is carefully planned,
                smartly executed, and meticulously designed and tailored to bring your vision to
                life
              </p>
            </div>

            <div className="fade-up bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-accent text-5xl mb-6">
                <i className="fas fa-drafting-compass"></i>
              </div>
              <h3 className="text-primary font-display text-2xl font-semibold mb-4">
                Carefully Planned
              </h3>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Every detail matters. From initial concept to final execution, we meticulously plan
                each phase to ensure excellence in design and functionality.
              </p>
            </div>

            <div className="fade-up bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-accent text-5xl mb-6">
                <i className="fas fa-hammer"></i>
              </div>
              <h3 className="text-primary font-display text-2xl font-semibold mb-4">
                Smartly Executed
              </h3>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Our experienced team brings designs to life with precision, using cutting-edge
                technology and proven construction methods for exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 sm:h-96 lg:h-120 rounded-2xl overflow-hidden shadow-2xl fade-up">
              <Image src="/images/comm1.jpg" alt="Featured project" fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2">Featured Case</p>
                <h3 className="font-display text-3xl font-semibold">Kampala Mixed-Use Landmark</h3>
              </div>
            </div>

            <div className="fade-up">
              <h2 className="text-primary font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Challenge. Approach. Result.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The client needed a mixed-use development balancing premium retail frontage,
                practical circulation, and long-term rental value in a constrained urban footprint.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team reworked massing, daylight strategy, and structural planning to improve
                commercial visibility while preserving comfortable residential privacy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <p className="text-primary font-display text-2xl font-bold">45,000</p>
                  <p className="text-gray-600 text-sm">Sq ft planned area</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <p className="text-primary font-display text-2xl font-bold">11</p>
                  <p className="text-gray-600 text-sm">Months to design sign-off</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <p className="text-primary font-display text-2xl font-bold">14%</p>
                  <p className="text-gray-600 text-sm">Estimated cost efficiency</p>
                </div>
              </div>
              <Link
                href="/projects/8"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300"
              >
                Read the full case study
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              We are proud of what we have achieved so far!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <div className="fade-up bg-light p-6 sm:p-8 md:p-12 text-center hover:bg-accent hover:text-white transition-all duration-300 group">
              <i className="fas fa-home text-3xl sm:text-4xl md:text-5xl text-accent group-hover:text-white mb-3 sm:mb-4 transition-colors"></i>
              <h3 className="text-primary group-hover:text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 transition-colors">
                29
              </h3>
              <p className="text-gray-700 group-hover:text-white text-xs sm:text-sm md:text-base font-medium transition-colors">
                Projects Built
              </p>
            </div>

            <div className="fade-up bg-white p-6 sm:p-8 md:p-12 text-center hover:bg-accent hover:text-white transition-all duration-300 group">
              <i className="fas fa-clock text-3xl sm:text-4xl md:text-5xl text-accent group-hover:text-white mb-3 sm:mb-4 transition-colors"></i>
              <h3 className="text-primary group-hover:text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 transition-colors">
                27,698
              </h3>
              <p className="text-gray-700 group-hover:text-white text-xs sm:text-sm md:text-base font-medium transition-colors">
                Hours of Work
              </p>
            </div>

            <div className="fade-up bg-light p-6 sm:p-8 md:p-12 text-center hover:bg-accent hover:text-white transition-all duration-300 group">
              <i className="fas fa-user-friends text-3xl sm:text-4xl md:text-5xl text-accent group-hover:text-white mb-3 sm:mb-4 transition-colors"></i>
              <h3 className="text-primary group-hover:text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 transition-colors">
                57
              </h3>
              <p className="text-gray-700 group-hover:text-white text-xs sm:text-sm md:text-base font-medium transition-colors">
                Best Engineers
              </p>
            </div>

            <div className="fade-up bg-white p-6 sm:p-8 md:p-12 text-center hover:bg-accent hover:text-white transition-all duration-300 group">
              <i className="fas fa-archway text-3xl sm:text-4xl md:text-5xl text-accent group-hover:text-white mb-3 sm:mb-4 transition-colors"></i>
              <h3 className="text-primary group-hover:text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 transition-colors">
                3
              </h3>
              <p className="text-gray-700 group-hover:text-white text-xs sm:text-sm md:text-base font-medium transition-colors">
                Towers Built
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-14 sm:py-16 bg-linear-to-r from-primary to-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
            Need Direction Before You Build?
          </h2>
          <p className="text-white/85 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
            Compare project paths, book a consultation, and move from concept to construction with
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects"
              className="inline-block bg-white text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-light hover:-translate-y-1 transition-all duration-300"
            >
              Browse Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-primary font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Trusted by Visionary Clients
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Real feedback from clients we have partnered with across Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="fade-up rounded-2xl bg-light p-7 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-quote-left text-accent text-2xl mb-4"></i>
                <p className="text-gray-700 leading-relaxed mb-5">{item.quote}</p>
                <p className="text-primary font-display text-xl font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </article>
            ))}
          </div>

          <div className="fade-up grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Skyline Holdings', 'Nile Estates', 'Pearl Capital', 'Kampala Urban Group'].map(
              (logo) => (
                <div
                  key={logo}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-5 text-center text-primary font-semibold"
                >
                  {logo}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-accent via-accent/90 to-accent/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Are You Ready to Create Awesome Architecture with Above Architects?
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's bring your vision to life with innovative design and exceptional craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-block bg-white text-accent px-7 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-light hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-white hover:text-accent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
