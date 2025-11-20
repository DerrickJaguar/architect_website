import Link from 'next/link';
import Image from 'next/image';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Sustainable Architecture: The Future of Green Building in Africa',
    excerpt:
      'As climate change accelerates, sustainable architecture has become essential in Africa. Discover how architects are integrating renewable materials, energy-efficient designs, and traditional building techniques to create environmentally responsible structures that meet modern needs while preserving natural resources.',
    category: 'Sustainability',
    date: 'November 15, 2024',
    author: 'Ashaba Benard',
    image: '/images/pexels-athena-2962053.jpg',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Modern Residential Design: Balancing Aesthetics and Functionality',
    excerpt:
      'Contemporary home design is about more than just looks. Learn how architects blend clean lines, open spaces, and smart technology to create homes that are both beautiful and highly functional. Explore the latest trends in minimalist design, natural materials, and indoor-outdoor living.',
    category: 'Design Trends',
    date: 'November 10, 2024',
    author: 'Mr. Joshua',
    image: '/images/design3.jpg',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Commercial Architecture: Creating Spaces That Drive Business Success',
    excerpt:
      'Effective commercial architecture goes beyond aesthetics to impact productivity and profitability. Discover how thoughtful design of office spaces, retail centers, and mixed-use developments can enhance employee satisfaction, customer experience, and overall business performance.',
    category: 'Commercial',
    date: 'November 5, 2024',
    author: 'Ms. Daphne',
    image: '/images/comm1.jpg',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'BIM and Digital Technology: Revolutionizing Architectural Practice',
    excerpt:
      'Building Information Modeling (BIM) and emerging technologies like AI, VR, and parametric design are transforming how architects work. Explore how these tools enable better collaboration, reduce errors, improve efficiency, and allow for more innovative and complex designs.',
    category: 'Technology',
    date: 'October 28, 2024',
    author: 'Mr. Brian',
    image: '/images/pexels-thirdman-5582867.jpg',
    readTime: '9 min read',
  },
  {
    id: 5,
    title: 'Maximizing Natural Light: Design Strategies for Healthier Spaces',
    excerpt:
      'Natural lighting significantly impacts health, mood, and energy consumption. Learn proven strategies for optimizing daylight in buildings through strategic window placement, skylights, light wells, and reflective surfaces. Discover how proper daylighting reduces energy costs and improves occupant well-being.',
    category: 'Design Tips',
    date: 'October 20, 2024',
    author: 'Ashaba Benard',
    image: '/images/Bedroom.jpeg',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Urban Planning in Kampala: Challenges and Opportunities',
    excerpt:
      'Rapid urbanization in Kampala presents unique architectural and planning challenges. Examine how architects and urban planners are addressing issues of density, infrastructure, affordable housing, and sustainable growth while preserving the city\'s character and creating livable communities.',
    category: 'Urban Planning',
    date: 'October 15, 2024',
    author: 'Ms. Daphne',
    image: '/images/pexels-aleksandar-pasaric-1758672.jpg',
    readTime: '10 min read',
  },
  {
    id: 7,
    title: 'Adaptive Reuse: Breathing New Life into Historic Buildings',
    excerpt:
      'Adaptive reuse preserves architectural heritage while meeting contemporary needs. Explore successful case studies of converting old warehouses, schools, and factories into modern residences, offices, and cultural spaces. Learn about the economic, environmental, and cultural benefits of this sustainable approach.',
    category: 'Heritage',
    date: 'October 8, 2024',
    author: 'Mr. Joshua',
    image: '/images/gayaza.jpeg',
    readTime: '7 min read',
  },
  {
    id: 8,
    title: 'Affordable Housing Solutions: Innovative Design on a Budget',
    excerpt:
      'Quality architecture doesn\'t have to be expensive. Discover cost-effective design strategies, modular construction techniques, and innovative materials that make good design accessible. Learn how architects are creating dignified, functional, and beautiful homes for low and middle-income families.',
    category: 'Residential',
    date: 'September 30, 2024',
    author: 'Ashaba Benard',
    image: '/images/apartment.jpeg',
    readTime: '8 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-linear-to-r from-primary to-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Insights, trends, and inspiration from the world of architecture
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-light rounded-lg overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto bg-gray-200">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-gray-500">{blogPosts[0].date}</span>
                </div>
                <h2 className="text-primary font-display text-3xl md:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-500">
                    <i className="fas fa-user mr-2"></i>
                    {blogPosts[0].author}
                  </span>
                  <span className="text-gray-500">
                    <i className="fas fa-clock mr-2"></i>
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:gap-3 transition-all duration-300"
                >
                  Read Full Article
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-primary font-display text-3xl md:text-4xl font-bold mb-12">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-primary font-display text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <i className="fas fa-clock mr-1"></i>
                      {post.readTime}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all duration-300"
                    >
                      Read More
                      <i className="fas fa-arrow-right text-sm"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-linear-to-r from-accent to-accent/90">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white font-display text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get the latest architecture insights and project updates delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-light hover:shadow-xl transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
