import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-linear-to-br from-dark/90 via-primary/85 to-primary/90 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/design1.jpg"
            alt="Architecture"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-white font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            We Are A Creative
            <br />
            Architecture Studio
          </h1>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Transforming visions into exceptional spaces across Uganda with innovative design and
            sustainable solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-block bg-white text-primary px-8 py-4 rounded font-bold text-base hover:bg-light hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              View Our Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded font-bold text-base hover:bg-white hover:text-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white text-3xl opacity-70"></i>
        </div>
      </section>

      {/* Process/Services Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Process & Expertise
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              At Above Architects, our team is the heart of everything we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              We are proud of what we have achieved so far!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <div className="bg-light p-6 sm:p-8 md:p-12 text-center hover:bg-accent hover:text-white transition-all duration-300 group">
              <i className="fas fa-home text-3xl sm:text-4xl md:text-5xl text-accent group-hover:text-white mb-3 sm:mb-4 transition-colors"></i>
              <h3 className="text-primary group-hover:text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 transition-colors">
                29
              </h3>
              <p className="text-gray-700 group-hover:text-white text-xs sm:text-sm md:text-base font-medium transition-colors">
                Projects Built
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 text-center hover:bg-accent hover:text-white transition-all duration-300 group">
              <i className="fas fa-clock text-3xl sm:text-4xl md:text-5xl text-accent group-hover:text-white mb-3 sm:mb-4 transition-colors"></i>
              <h3 className="text-primary group-hover:text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 transition-colors">
                27,698
              </h3>
              <p className="text-gray-700 group-hover:text-white text-xs sm:text-sm md:text-base font-medium transition-colors">
                Hours of Work
              </p>
            </div>

            <div className="bg-light p-6 sm:p-8 md:p-12 text-center hover:bg-accent hover:text-white transition-all duration-300 group">
              <i className="fas fa-user-friends text-3xl sm:text-4xl md:text-5xl text-accent group-hover:text-white mb-3 sm:mb-4 transition-colors"></i>
              <h3 className="text-primary group-hover:text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 transition-colors">
                57
              </h3>
              <p className="text-gray-700 group-hover:text-white text-xs sm:text-sm md:text-base font-medium transition-colors">
                Best Engineers
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 text-center hover:bg-accent hover:text-white transition-all duration-300 group">
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

      {/* Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-accent via-accent/90 to-accent/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Are You Ready to Create Awesome Architecture with Above Architects?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's bring your vision to life with innovative design and exceptional craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-block bg-white text-accent px-10 py-4 rounded-lg font-bold text-base hover:bg-light hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-white hover:text-accent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
