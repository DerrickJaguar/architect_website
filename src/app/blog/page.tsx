import Link from 'next/link';

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
    title: 'The Future of Sustainable Architecture in Uganda',
    excerpt:
      'Exploring innovative approaches to eco-friendly building design and construction methods that are shaping the future of architecture in East Africa.',
    category: 'Sustainability',
    date: 'November 15, 2024',
    author: 'Eng. Erem Edward',
    image: '/images/blog/sustainable.jpg',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Top 10 Modern Home Design Trends',
    excerpt:
      'Discover the latest trends in residential architecture that are transforming homes into contemporary masterpieces with functionality and style.',
    category: 'Design Trends',
    date: 'November 10, 2024',
    author: 'Sarah Johnson',
    image: '/images/blog/modern-home.jpg',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Commercial Architecture: Maximizing Space Efficiency',
    excerpt:
      'Learn how smart design can optimize commercial spaces for better productivity, aesthetics, and return on investment.',
    category: 'Commercial',
    date: 'November 5, 2024',
    author: 'John Smith',
    image: '/images/blog/commercial.jpg',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'The Role of Technology in Modern Construction',
    excerpt:
      'How BIM, 3D printing, and AI are revolutionizing the way we design and build structures in the 21st century.',
    category: 'Technology',
    date: 'October 28, 2024',
    author: 'Michael Brown',
    image: '/images/blog/technology.jpg',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'Bringing Natural Light into Your Space',
    excerpt:
      'Effective strategies for maximizing natural lighting in both residential and commercial buildings for healthier, more inviting spaces.',
    category: 'Design Tips',
    date: 'October 20, 2024',
    author: 'Sarah Johnson',
    image: '/images/blog/natural-light.jpg',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Historic Preservation Meets Modern Design',
    excerpt:
      'Balancing heritage conservation with contemporary architectural needs in restoration and adaptive reuse projects.',
    category: 'Heritage',
    date: 'October 15, 2024',
    author: 'Eng. Erem Edward',
    image: '/images/blog/heritage.jpg',
    readTime: '9 min read',
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
              <div className="relative h-96 lg:h-auto bg-primary/20 flex items-center justify-center">
                <i className="fas fa-image text-white text-9xl opacity-20"></i>
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
                <div className="relative h-56 bg-primary/20 flex items-center justify-center">
                  <i className="fas fa-newspaper text-white text-6xl opacity-20"></i>
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
