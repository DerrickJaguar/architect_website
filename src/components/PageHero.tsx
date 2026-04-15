import Image from 'next/image';
import { ReactNode } from 'react';

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  align?: 'left' | 'center';
  children?: ReactNode;
};

export default function PageHero({
  title,
  subtitle,
  image,
  align = 'center',
  children,
}: PageHeroProps) {
  const isCenter = align === 'center';

  return (
    <section className="relative mt-20 h-[62vh] md:h-[68vh] overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className={isCenter ? 'w-full text-center' : 'max-w-4xl'}>
          {children}
          <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-white/95 text-lg md:text-xl max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
