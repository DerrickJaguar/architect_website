'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-linear-to-br from-dark via-primary to-primary flex items-center justify-center z-9999 transition-opacity duration-500">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white/10 border-t-accent rounded-full animate-spin mx-auto mb-5"></div>
        <p className="text-white font-display text-2xl font-semibold animate-pulse">
          Above Architects
        </p>
      </div>
    </div>
  );
}
