'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-primary font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Let&apos;s discuss your next architectural project
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-primary font-display text-3xl md:text-4xl font-bold mb-6">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
                We'd love to hear from you! Whether you have a question about our services, need
                architectural consultation, or want to discuss a project, our team is ready to
                answer all your questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-accent text-2xl mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold text-lg mb-2">Office Location</h3>
                    <p className="text-gray-600">
                      Plot 123, Kampala Road
                      <br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent text-2xl mt-1">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+256700000000" className="hover:text-accent transition-colors">
                        +256 773491697
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent text-2xl mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:info@abovearchitects.com"
                        className="hover:text-accent transition-colors"
                      >
                        contact@abovearchitects.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent text-2xl mt-1">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-primary font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/Abovearchitects?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://x.com/AshabaBenard?t=I6Y5ZosNcO9kdenc-3gTwg&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/abovearchitects?igsh=MTg5anB6dHpnbzZncA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-linear-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@abovearchitects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-xl">
              <h2 className="text-primary font-display text-2xl font-bold mb-6">Send a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  <i className="fas fa-check-circle mr-2"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="+256 700 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white py-4 rounded-lg font-bold text-base hover:bg-accent/90 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
          <div className="text-center">
            <i className="fas fa-map-marked-alt text-6xl text-primary opacity-30 mb-4"></i>
            <p className="text-gray-600 text-lg">Map Location</p>
          </div>
        </div>
      </section>
    </div>
  );
}
