import { Client, InstagramStory, TeamMember } from './types';

export const COLORS = {
  bg: '#050a1b',
  accent: '#00ff88',
  chrome: '#cbd5e0',
};

export const CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Leuart',
    logo: '/clients/leuart/logo_variants/1.png',
    coverImage: '/clients/leuart/cover.jpg',
    industry: 'Architectural Design',
    description: 'Four geometric planes come together to create a refined dimensional form for modern interiors.',

    mainCampaign: 'New Dimension',
    aboutTitle: 'New Dimension',
    aboutText: 'The LEUART icon is built from four geometric planes that come together to create a new dimensional form. The central diagonal adds depth and perspective, symbolizing how LEUART transforms flat spaces into dynamic, well-crafted interiors.',
    logoConstruction: '/clients/leuart/logo_construction/construction.jpg',

    mockups: [
      '/clients/leuart/mockups/1.jpg',
      '/clients/leuart/mockups/2.jpg',
      '/clients/leuart/mockups/3.jpg',
      '/clients/leuart/mockups/4.jpg'
    ],
    colorPaletteImage: '/clients/leuart/color_palette/palette.png'
  },

  {
    id: '2',
    name: 'Studio adis',
    logo: '/clients/adis/logo_variants/1.png',
    coverImage: '/clients/adis/cover.jpg',
    industry: 'Architecture Firm',
    description: 'A clean architectural identity shaped around space, structure, and refined modern living.',

    mainCampaign: 'Built Perspective',
    aboutTitle: 'Built Perspective',
    aboutText: 'Studio adis is an architecture firm focused on thoughtful planning, balanced forms, and functional spaces. The identity reflects a studio that turns ideas into precise, livable environments with clarity and detail.',
    logoConstruction: '/clients/adis/logo_construction/construction.jpg',

    mockups: [
      '/clients/adis/mockups/1.jpg',
      '/clients/adis/mockups/2.jpg',
      '/clients/adis/mockups/3.jpg',
      '/clients/adis/mockups/4.jpg'
    ],
    colorPaletteImage: '/clients/adis/color_palette/palette.png'
  }

];

export const IG_STORIES: InstagramStory[] = [
  { id: 's1', imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&h=711&auto=format&fit=crop', clientName: 'Lumira Lux' },
  { id: 's2', imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=400&h=711&auto=format&fit=crop', clientName: 'Vertex Tech' },
  { id: 's3', imageUrl: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=400&h=711&auto=format&fit=crop', clientName: 'EcoSphere' },
  { id: 's4', imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=400&h=711&auto=format&fit=crop', clientName: 'Velocity Motors' },
  { id: 's5', imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=400&h=711&auto=format&fit=crop', clientName: 'Aether Studios' },
  { id: 's6', imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&h=711&auto=format&fit=crop', clientName: 'Nova Health' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Marcus Thorne',
    position: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=800&auto=format&fit=crop',
    bio: 'Visionary leader with 15+ years in high-end brand storytelling.',
    socials: { phone: '+91 00000 00000', twitter: '#' }
  },
  {
    id: 'm2',
    name: 'Elena Vance',
    position: 'Head of Brand Strategy',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&h=800&auto=format&fit=crop',
    bio: 'Specialist in consumer psychology and market positioning.',
    socials: { phone: '+91 00000 00000', instagram: '#' }
  },
  {
    id: 'm3',
    name: 'Julian Hayes',
    position: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=800&auto=format&fit=crop',
    bio: 'Merging cutting-edge code with immersive digital experiences.',
    socials: { phone: '+91 00000 00000', twitter: '#' }
  },
  {
    id: 'm4',
    name: 'Sofia Rodriguez',
    position: 'Senior Marketing Strategist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&h=800&auto=format&fit=crop',
    bio: 'Data-driven marketer obsessed with conversion optimization.',
    socials: { instagram: '#', phone: '+91 00000 00000' }
  }
];
