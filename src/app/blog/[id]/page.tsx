'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary/80 hover:text-primary mb-6 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-primary font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600">
            <span className="flex items-center gap-2">
              <i className="fas fa-user"></i>
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-clock"></i>
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-serif">
              {post.content.introduction}
            </p>
          </div>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-primary font-display text-2xl md:text-3xl font-bold mb-6">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* Conclusion */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-primary font-display text-2xl md:text-3xl font-bold mb-6">
              Conclusion
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{post.content.conclusion}</p>
          </div>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-primary font-semibold mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition-colors">
                <i className="fab fa-facebook-f mr-2"></i>
                Facebook
              </button>
              <button className="bg-sky-500 text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-sky-600 transition-colors">
                <i className="fab fa-twitter mr-2"></i>
                Twitter
              </button>
              <button className="bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-blue-800 transition-colors">
                <i className="fab fa-linkedin-in mr-2"></i>
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary font-display text-3xl font-bold mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-primary font-display text-lg font-semibold mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{relatedPost.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-accent to-accent/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's discuss how we can bring your architectural vision to life
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent px-10 py-4 rounded-lg font-bold text-base hover:bg-light hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
