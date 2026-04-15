'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
    // Prevent body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [pathname, mobileMenuOpen]);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/calculator', label: 'Calculator' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 shadow-lg bg-white/95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl lg:text-3xl font-bold tracking-wide transition-colors text-primary hover:text-accent"
          >
            Above Architects
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium text-sm xl:text-base hover:text-accent transition-colors relative group text-gray-800 ${
                    isActive(link.href) ? 'text-accent' : ''
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-accent text-white px-6 py-2.5 rounded font-semibold text-sm lg:text-base hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden focus:outline-none text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } lg:hidden bg-white/98 backdrop-blur-md`}
      >
        <ul className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block font-medium py-2 hover:text-accent transition-colors ${
                  isActive(link.href) ? 'text-accent' : 'text-primary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="block bg-accent text-white px-6 py-2.5 rounded font-semibold text-center hover:bg-accent/90 transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
