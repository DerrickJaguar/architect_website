'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/256773491697"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-40"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl sm:text-3xl" aria-hidden="true"></i>
    </a>
  );
}
