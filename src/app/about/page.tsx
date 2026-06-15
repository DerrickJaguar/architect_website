import Image from 'next/image';
import Link from 'next/link';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Mr. Ashaba Benard',
    role: 'Chief Executive Officer',
    image: '/images/benard.jpg',
    bio: 'Leading Above Architects with vision and expertise',
  },
  {
    name: 'Mr. Oyila Malu Joshua',
    role: 'Lead Architect',
    image: '/images/Joshua.jpg',
    bio: 'Expert in sustainable design and urban planning',
  },
  {
    name: 'Mr. Brian',
    role: 'Senior Designer',
    image: '/images/Brian.jpg',
    bio: 'Specializing in modern residential architecture',
  },
  {
    name: 'Mr. Jonathan Okware Arthur',
    role: 'Project Manager',
    image: '/images/jonathan.jpeg',
    bio: 'Ensuring projects are delivered on time and budget',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-primary font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Transforming spaces, building dreams, creating sustainable futures
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Above Architects was founded with a vision to revolutionize architectural design in
                Uganda. Since our inception, we have been committed to creating spaces that not only
                meet functional requirements but also inspire and elevate the human experience.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Our team of talented architects, designers, and engineers brings together diverse
                expertise and a shared passion for excellence. We believe that great architecture is
                born from the perfect blend of creativity, technical precision, and sustainable
                thinking.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                With over 29 completed projects and counting, we continue to push the boundaries of
                design while staying true to our core values of innovation, sustainability, and
                client satisfaction.
              </p>
            </div>
            <div className="relative h-72 sm:h-96 lg:h-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/pexels-aleksandar-pasaric-1758672.jpg"
                alt="Above Architects Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-accent text-5xl mb-6">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-primary font-display text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace cutting-edge technology and creative thinking to deliver groundbreaking
                architectural solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-accent text-5xl mb-6">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-primary font-display text-2xl font-semibold mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Environmental responsibility is at the core of our designs, ensuring a better future
                for generations to come.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-accent text-5xl mb-6">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-primary font-display text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in every project, from initial concept to final
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              The talented professionals behind Above Architects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-light rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-80 bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-primary font-display text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-r from-accent to-accent/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent px-7 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-light hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
