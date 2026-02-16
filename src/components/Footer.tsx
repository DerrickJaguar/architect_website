import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Above Architects</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading architectural firm in Uganda specializing in innovative design and
              sustainable solutions for residential, commercial, and mixed-use projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/abovearchitects?igsh=MTg5anB6dHpnbzZncA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-linear-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://x.com/AshabaBenard?t=I6Y5ZosNcO9kdenc-3gTwg&s=08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/Abovearchitects?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="https://www.youtube.com/@abovearchitects"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-accent"></i>
                <a
                  href="mailto:abovearchitects@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  contact@abovearchitects.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-accent"></i>
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-accent"></i>
                <span>Serving clients across Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">&copy; 2026 Above Architects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
