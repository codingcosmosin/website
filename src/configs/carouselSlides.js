import ccLogo from '../assets/ccLogo.png';

export const carouselSlides = [
  {
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=1200&q=80&auto=format&fit=crop',
    alt: 'code editor',
    title: 'Build with Confidence',
    caption: 'Tools, tutorials and projects to grow your coding skills.',
    style: { maxHeight: '60vh', objectFit: 'cover' },
  },
  {
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop',
    alt: 'teamwork',
    title: 'Collaborate',
    caption: 'Share projects, learn together and ship faster.',
    style: { maxHeight: '60vh', objectFit: 'cover' },
  },
  {
    image: ccLogo,
    alt: 'branding',
    title: 'Our Brand',
    caption: 'Welcome to Coding Cosmos — explore our content.',
    style: { maxHeight: '60vh', objectFit: 'contain', background: '#f8f9fa' },
  },
];