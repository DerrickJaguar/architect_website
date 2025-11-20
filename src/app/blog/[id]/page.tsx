'use client';

import { notFound } from 'next/navigation';
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
  content: {
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    conclusion: string;
  };
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Sustainable Architecture: The Future of Green Building in Africa',
    excerpt:
      'As climate change accelerates, sustainable architecture has become essential in Africa. Discover how architects are integrating renewable materials, energy-efficient designs, and traditional building techniques to create environmentally responsible structures.',
    category: 'Sustainability',
    date: 'November 15, 2024',
    author: 'Eng. Erem Edward',
    image: '/images/pexels-athena-2962053.jpg',
    readTime: '8 min read',
    content: {
      introduction:
        'Sustainable architecture is no longer a luxury but a necessity, particularly in Africa where rapid urbanization and climate change pose significant challenges. As architects and builders, we have a responsibility to create structures that minimize environmental impact while meeting the needs of growing populations.',
      sections: [
        {
          heading: 'The Principles of Sustainable Design',
          paragraphs: [
            'Sustainable architecture encompasses several key principles: energy efficiency, water conservation, use of renewable materials, and minimal environmental impact. In Africa, these principles must be adapted to local contexts, climates, and available resources.',
            'Traditional African architecture offers valuable lessons in sustainability. Buildings designed for natural ventilation, passive cooling, and use of locally-sourced materials have stood the test of time. Modern sustainable architecture builds on these foundations while incorporating contemporary technology.',
          ],
        },
        {
          heading: 'Renewable Materials and Local Resources',
          paragraphs: [
            'Using locally-sourced, renewable materials reduces transportation emissions and supports local economies. Bamboo, compressed earth blocks, recycled materials, and sustainably-harvested timber are increasingly popular choices.',
            'These materials not only reduce environmental impact but also provide excellent thermal properties suited to African climates. They offer natural insulation, keeping buildings cool during hot days and retaining warmth during cooler nights.',
          ],
        },
        {
          heading: 'Energy Efficiency and Solar Power',
          paragraphs: [
            'Solar energy is abundant across most of Africa, making it an ideal renewable energy source for buildings. Photovoltaic panels, solar water heaters, and passive solar design strategies can dramatically reduce energy consumption.',
            'Beyond solar, proper building orientation, strategic window placement, and use of thermal mass can reduce reliance on mechanical cooling and heating systems, resulting in lower operational costs and reduced carbon footprints.',
          ],
        },
        {
          heading: 'Water Conservation Strategies',
          paragraphs: [
            'Water scarcity is a pressing issue in many African regions. Sustainable architecture addresses this through rainwater harvesting systems, greywater recycling, and water-efficient fixtures.',
            'Landscape design also plays a crucial role, with xeriscaping and indigenous plant selection reducing irrigation needs while creating beautiful, functional outdoor spaces.',
          ],
        },
      ],
      conclusion:
        'Sustainable architecture in Africa represents both a challenge and an opportunity. By combining traditional wisdom with modern innovation, we can create buildings that are environmentally responsible, economically viable, and culturally appropriate. The future of African architecture lies in designs that work with nature, not against it.',
    },
  },
  {
    id: 2,
    title: 'Modern Residential Design: Balancing Aesthetics and Functionality',
    excerpt:
      'Contemporary home design is about more than just looks. Learn how architects blend clean lines, open spaces, and smart technology to create homes that are both beautiful and highly functional.',
    category: 'Design Trends',
    date: 'November 10, 2024',
    author: 'Mr. Joshua',
    image: '/images/design3.jpg',
    readTime: '7 min read',
    content: {
      introduction:
        'Modern residential design has evolved to prioritize both form and function. Today\'s homeowners seek spaces that are visually stunning yet practical for daily living. Achieving this balance requires careful consideration of layout, materials, technology, and lifestyle needs.',
      sections: [
        {
          heading: 'Open Floor Plans and Flow',
          paragraphs: [
            'Open floor plans have become synonymous with modern living. By removing unnecessary walls, we create flexible spaces that adapt to various activities while promoting family interaction and natural light penetration.',
            'However, successful open plans require careful zoning. Strategic placement of furniture, partial walls, and level changes can define distinct areas without sacrificing the sense of openness.',
          ],
        },
        {
          heading: 'Natural Materials and Textures',
          paragraphs: [
            'Modern design embraces natural materials like wood, stone, and concrete. These elements add warmth and texture to minimalist spaces, preventing them from feeling cold or sterile.',
            'The key is balance - combining smooth, polished surfaces with rough, organic textures creates visual interest and tactile appeal.',
          ],
        },
        {
          heading: 'Indoor-Outdoor Living',
          paragraphs: [
            'Blurring the boundaries between interior and exterior spaces is a hallmark of contemporary design. Large sliding glass doors, covered patios, and outdoor kitchens extend living areas and connect residents with nature.',
            'In Uganda\'s favorable climate, this approach makes particular sense, allowing homeowners to maximize usable space and enjoy outdoor living year-round.',
          ],
        },
        {
          heading: 'Smart Home Integration',
          paragraphs: [
            'Technology is seamlessly integrated into modern homes through smart lighting, climate control, security systems, and entertainment. These systems enhance comfort and convenience while improving energy efficiency.',
            'The challenge is implementing technology thoughtfully, ensuring it enhances rather than dominates the living experience.',
          ],
        },
      ],
      conclusion:
        'Successful modern residential design creates homes that are both beautiful sanctuaries and practical spaces for daily life. By focusing on quality materials, thoughtful layouts, and user-centered design, we create homes that stand the test of time.',
    },
  },
  {
    id: 3,
    title: 'Commercial Architecture: Creating Spaces That Drive Business Success',
    excerpt:
      'Effective commercial architecture goes beyond aesthetics to impact productivity and profitability. Discover how thoughtful design enhances employee satisfaction, customer experience, and business performance.',
    category: 'Commercial',
    date: 'November 5, 2024',
    author: 'Ms. Daphne',
    image: '/images/comm1.jpg',
    readTime: '6 min read',
    content: {
      introduction:
        'Commercial architecture directly impacts business success. Well-designed workspaces boost employee productivity and satisfaction, while attractive retail and hospitality spaces enhance customer experience and drive sales. Understanding the connection between design and business outcomes is essential for effective commercial architecture.',
      sections: [
        {
          heading: 'Workplace Design and Productivity',
          paragraphs: [
            'Modern office design has shifted from cubicle farms to activity-based workspaces that support diverse work styles. Collaborative areas, quiet zones, and flexible meeting spaces allow employees to choose environments suited to their tasks.',
            'Natural light, proper ventilation, and biophilic design elements improve mood, reduce stress, and enhance cognitive function, directly impacting productivity and employee retention.',
          ],
        },
        {
          heading: 'Retail and Customer Experience',
          paragraphs: [
            'In retail architecture, every design decision influences customer behavior. Store layout, lighting, materials, and spatial flow guide shoppers through the space, highlight products, and create memorable experiences.',
            'Successful retail design balances brand identity with functionality, creating environments that are inviting, easy to navigate, and conducive to purchases.',
          ],
        },
        {
          heading: 'Flexibility and Future-Proofing',
          paragraphs: [
            'Commercial spaces must adapt to changing business needs. Flexible designs with movable partitions, modular systems, and adaptable infrastructure allow buildings to evolve without major renovations.',
            'Future-proofing also means incorporating infrastructure for emerging technologies and designing for potential changes in use or tenancy.',
          ],
        },
        {
          heading: 'Sustainability and Operating Costs',
          paragraphs: [
            'Energy-efficient systems, sustainable materials, and smart building technologies reduce operating costs while demonstrating corporate responsibility.',
            'Green buildings command higher rents, attract quality tenants, and offer lower vacancy rates, making sustainability a sound business investment.',
          ],
        },
      ],
      conclusion:
        'Commercial architecture is an investment in business success. By creating spaces that support productivity, enhance customer experiences, and operate efficiently, good design delivers measurable returns that far exceed initial costs.',
    },
  },
  {
    id: 4,
    title: 'BIM and Digital Technology: Revolutionizing Architectural Practice',
    excerpt:
      'Building Information Modeling (BIM) and emerging technologies like AI, VR, and parametric design are transforming how architects work. Explore how these tools enable better collaboration and more innovative designs.',
    category: 'Technology',
    date: 'October 28, 2024',
    author: 'Mr. Brian',
    image: '/images/pexels-thirdman-5582867.jpg',
    readTime: '9 min read',
    content: {
      introduction:
        'Digital technology is fundamentally changing architectural practice. Building Information Modeling (BIM), virtual reality, artificial intelligence, and parametric design tools are enabling architects to design more efficiently, collaborate more effectively, and create increasingly complex and innovative structures.',
      sections: [
        {
          heading: 'The BIM Revolution',
          paragraphs: [
            'BIM goes beyond 3D modeling to create intelligent, data-rich digital representations of buildings. These models contain information about materials, costs, performance characteristics, and construction sequencing.',
            'BIM enables better coordination among architects, engineers, and contractors, reducing errors, preventing conflicts, and streamlining the construction process. Clash detection identifies problems before construction begins, saving time and money.',
          ],
        },
        {
          heading: 'Virtual and Augmented Reality',
          paragraphs: [
            'VR allows clients to experience designs before construction, walking through spaces and understanding scale and spatial relationships in ways traditional drawings cannot convey.',
            'AR overlays digital information onto physical sites, helping visualize proposed designs in context and assisting construction teams with precise placement of building elements.',
          ],
        },
        {
          heading: 'Parametric and Generative Design',
          paragraphs: [
            'Parametric design uses algorithms to explore countless design variations based on specific parameters and constraints. This approach enables optimization for performance, cost, or aesthetic criteria.',
            'Generative design employs AI to propose design solutions that humans might not conceive, expanding creative possibilities while ensuring designs meet technical requirements.',
          ],
        },
        {
          heading: 'Digital Fabrication',
          paragraphs: [
            'CNC machines, 3D printers, and robotic fabrication tools bring digital designs into physical reality with precision and efficiency previously impossible.',
            'These technologies enable complex geometries, mass customization, and reduced material waste, opening new possibilities for architectural expression.',
          ],
        },
      ],
      conclusion:
        'Digital technology is not replacing architectural creativity but augmenting it. By embracing these tools, architects can work more efficiently, collaborate more effectively, and push the boundaries of what is possible in design and construction.',
    },
  },
  {
    id: 5,
    title: 'Maximizing Natural Light: Design Strategies for Healthier Spaces',
    excerpt:
      'Natural lighting significantly impacts health, mood, and energy consumption. Learn proven strategies for optimizing daylight in buildings through strategic design decisions.',
    category: 'Design Tips',
    date: 'October 20, 2024',
    author: 'Eng. Erem Edward',
    image: '/images/Bedroom.jpeg',
    readTime: '5 min read',
    content: {
      introduction:
        'Natural light is one of the most powerful tools in an architect\'s arsenal. It shapes how we experience spaces, influences our mood and health, and significantly impacts energy consumption. Designing for optimal daylighting requires understanding sun angles, building orientation, and various strategies for bringing light deep into buildings.',
      sections: [
        {
          heading: 'Building Orientation and Layout',
          paragraphs: [
            'Proper building orientation is fundamental to daylighting. In Uganda, orienting primary living spaces and large windows to the north and south minimizes harsh direct sunlight while maximizing natural light.',
            'Room layout should position frequently-used spaces where they will receive the most natural light, with less critical areas like storage or utilities in darker zones.',
          ],
        },
        {
          heading: 'Window Design and Placement',
          paragraphs: [
            'Window size, placement, and type dramatically affect light quality and quantity. Multiple smaller windows often provide better light distribution than single large openings.',
            'High windows and clerestories bring light deep into spaces while maintaining privacy. Strategic window placement on multiple walls creates balanced, even illumination throughout the day.',
          ],
        },
        {
          heading: 'Skylights and Light Wells',
          paragraphs: [
            'Skylights and roof monitors effectively illuminate deep floor plans and interior spaces. They provide consistent light from above, reducing reliance on perimeter windows.',
            'Light wells and atriums bring daylight to lower floors in multi-story buildings, creating bright, pleasant interior spaces that would otherwise be dark.',
          ],
        },
        {
          heading: 'Reflective Surfaces and Light Shelves',
          paragraphs: [
            'Light-colored walls, ceilings, and floors reflect daylight deeper into rooms. Strategic use of reflective surfaces amplifies available natural light.',
            'Light shelves bounce sunlight onto ceilings, distributing it evenly while reducing glare. These horizontal elements above eye level are particularly effective in tropical climates.',
          ],
        },
      ],
      conclusion:
        'Maximizing natural light requires thoughtful design from initial planning through final detailing. The results - healthier occupants, lower energy costs, and more beautiful spaces - make daylighting strategies essential to good architecture.',
    },
  },
  {
    id: 6,
    title: 'Urban Planning in Kampala: Challenges and Opportunities',
    excerpt:
      'Rapid urbanization in Kampala presents unique architectural and planning challenges. Examine how architects and urban planners are addressing density, infrastructure, and sustainable growth.',
    category: 'Urban Planning',
    date: 'October 15, 2024',
    author: 'Ms. Daphne',
    image: '/images/pexels-aleksandar-pasaric-1758672.jpg',
    readTime: '10 min read',
    content: {
      introduction:
        'Kampala, like many African cities, is experiencing rapid urbanization that presents both challenges and opportunities. Population growth, infrastructure demands, and informal settlements require innovative planning and architectural solutions. How we shape Kampala today will determine the city\'s livability for generations to come.',
      sections: [
        {
          heading: 'Managing Density and Growth',
          paragraphs: [
            'Kampala\'s population is growing rapidly, putting pressure on housing, transportation, and infrastructure. Smart densification through mixed-use development and vertical growth can accommodate population increase while preserving open spaces.',
            'Transit-oriented development, which concentrates density around public transportation, can reduce car dependency and create walkable, vibrant neighborhoods.',
          ],
        },
        {
          heading: 'Infrastructure Challenges',
          paragraphs: [
            'Inadequate infrastructure - roads, water, sewerage, and electricity - constrains development and affects quality of life. Upgrading infrastructure while accommodating growth requires coordinated planning and significant investment.',
            'Green infrastructure, including urban forests, wetland preservation, and sustainable drainage systems, can address multiple challenges while providing environmental and social benefits.',
          ],
        },
        {
          heading: 'Affordable Housing Crisis',
          paragraphs: [
            'Housing affordability is a critical issue. Innovative approaches including medium-density housing, cooperative development models, and efficient design can make quality housing accessible to more residents.',
            'Upgrading informal settlements rather than demolishing them recognizes existing communities and provides more humane, cost-effective solutions than wholesale redevelopment.',
          ],
        },
        {
          heading: 'Preserving Character and Identity',
          paragraphs: [
            'As Kampala modernizes, preserving its architectural heritage and cultural identity is important. Adaptive reuse of historic buildings and design guidelines that respect local context can maintain character while allowing evolution.',
            'Public spaces, cultural facilities, and community amenities create sense of place and support social cohesion in rapidly changing neighborhoods.',
          ],
        },
      ],
      conclusion:
        'Kampala\'s challenges are significant, but so are its opportunities. With thoughtful planning, innovative design, and inclusive development, we can create a city that is sustainable, equitable, and uniquely Kampalan - a place where all residents can thrive.',
    },
  },
  {
    id: 7,
    title: 'Adaptive Reuse: Breathing New Life into Historic Buildings',
    excerpt:
      'Adaptive reuse preserves architectural heritage while meeting contemporary needs. Explore successful case studies and learn about the economic, environmental, and cultural benefits of this sustainable approach.',
    category: 'Heritage',
    date: 'October 8, 2024',
    author: 'Mr. Joshua',
    image: '/images/gayaza.jpeg',
    readTime: '7 min read',
    content: {
      introduction:
        'Adaptive reuse - repurposing old buildings for new uses - is one of the most sustainable and culturally sensitive forms of development. It preserves architectural heritage, reduces environmental impact, and often creates more interesting, character-rich spaces than new construction. Understanding when and how to adaptively reuse buildings is an valuable skill for contemporary architects.',
      sections: [
        {
          heading: 'Environmental Benefits',
          paragraphs: [
            'Reusing existing buildings is inherently sustainable. It avoids the environmental impact of demolition and new construction, preserving the embodied energy in existing materials and structure.',
            'Studies show that adaptive reuse typically has lower carbon emissions than new construction, even when accounting for necessary upgrades and modifications.',
          ],
        },
        {
          heading: 'Economic Advantages',
          paragraphs: [
            'Adaptive reuse can be cost-effective, particularly when structural systems are sound. Existing foundations, walls, and roof structures represent significant sunk costs that can be leveraged.',
            'Historic buildings often occupy prime locations and possess architectural character that commands premium rents or sales prices, making adaptive reuse economically attractive.',
          ],
        },
        {
          heading: 'Design Challenges and Opportunities',
          paragraphs: [
            'Working within existing structures requires creativity and problem-solving. Constraints like floor heights, window locations, and structural limitations can inspire innovative design solutions.',
            'The juxtaposition of old and new creates visual interest and tells stories about a building\'s evolution. Successful projects respect historic character while clearly distinguishing new interventions.',
          ],
        },
        {
          heading: 'Cultural and Community Value',
          paragraphs: [
            'Historic buildings connect communities to their past and contribute to local identity. Preservation maintains continuity and sense of place in rapidly changing cities.',
            'Adaptive reuse often catalyzes neighborhood revitalization, attracting investment and activity while maintaining the area\'s character and authenticity.',
          ],
        },
      ],
      conclusion:
        'Adaptive reuse represents architecture at its most sustainable and culturally sensitive. By finding new purposes for old buildings, we honor the past while meeting present needs - creating spaces that are both practical and meaningful.',
    },
  },
  {
    id: 8,
    title: 'Affordable Housing Solutions: Innovative Design on a Budget',
    excerpt:
      'Quality architecture doesn\'t have to be expensive. Discover cost-effective design strategies, modular construction techniques, and innovative materials that make good design accessible.',
    category: 'Residential',
    date: 'September 30, 2024',
    author: 'Eng. Erem Edward',
    image: '/images/apartment.jpeg',
    readTime: '8 min read',
    content: {
      introduction:
        'Affordable housing is one of the most pressing challenges facing architects today. The belief that good design is expensive prevents many from accessing quality homes. However, thoughtful design, efficient planning, and smart material choices can deliver excellent housing at accessible prices. Architecture should be for everyone, not just the wealthy.',
      sections: [
        {
          heading: 'Efficient Design and Simple Forms',
          paragraphs: [
            'Complex shapes and irregular floor plans increase construction costs. Simple, rectangular forms are more economical to build while still allowing for attractive, functional designs.',
            'Efficient planning minimizes wasted circulation space and optimizes room sizes. Every square meter should serve a purpose, as reducing overall area is one of the most effective cost-control strategies.',
          ],
        },
        {
          heading: 'Smart Material Choices',
          paragraphs: [
            'Locally-available materials reduce transportation costs and support local economies. Compressed earth blocks, locally-fired bricks, and timber from nearby sources often provide better value than imported materials.',
            'Exposed materials - leaving concrete, brick, or timber visible - eliminate finishing costs while creating honest, attractive aesthetics.',
          ],
        },
        {
          heading: 'Modular and Prefabricated Construction',
          paragraphs: [
            'Factory-built components reduce on-site labor costs and construction time. Modular systems, prefabricated wall panels, and standardized components enable efficient construction without sacrificing quality.',
            'Repetition and standardization further reduce costs. Designing multiple identical units or repeating floor plans allows for efficiencies in planning, procurement, and construction.',
          ],
        },
        {
          heading: 'Community-Based Approaches',
          paragraphs: [
            'Cooperative housing models, where residents participate in planning and construction, reduce costs while building community. Sweat equity programs allow families to contribute labor in place of cash.',
            'Incremental housing strategies provide basic cores that owners can expand over time as resources allow, making initial costs more manageable.',
          ],
        },
      ],
      conclusion:
        'Affordable housing requires architects to prioritize efficiently and creatively solve problems within constraints. The result need not be austere or ugly - thoughtful design can deliver dignity, beauty, and quality at prices accessible to middle and low-income families. This is architecture at its most socially valuable.',
    },
  },
];

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
      <section className="relative py-20 bg-linear-to-r from-primary to-dark overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-white/90">{post.date}</span>
          </div>
          <h1 className="text-white font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-white/90">
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

      {/* Featured Image */}
      <section className="relative h-[60vh] bg-gray-200">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </section>

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed font-serif">
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
                <p key={pIndex} className="text-gray-600 text-lg leading-relaxed mb-4">
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
            <p className="text-gray-600 text-lg leading-relaxed">{post.content.conclusion}</p>
          </div>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-primary font-semibold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <i className="fab fa-facebook-f mr-2"></i>
                Facebook
              </button>
              <button className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
                <i className="fab fa-twitter mr-2"></i>
                Twitter
              </button>
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
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
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
