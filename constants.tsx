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
    coverImage: '/clients/leuart/cover.jpg',
    industry: 'Architectural Design',
    description: 'Four geometric planes come together to create a refined dimensional form for modern interiors.',

    mainCampaign: 'New Dimension',
    aboutTitle: 'New Dimension',
    aboutText: 'The LEUART icon is built from four geometric planes that come together to create a new dimensional form. The central diagonal adds depth and perspective, symbolizing how LEUART transforms flat spaces into dynamic, well-crafted interiors.',

    mockups: [
      '/clients/leuart/1.jpeg',
      '/clients/leuart/2.jpeg',
      '/clients/leuart/3.jpeg',
      '/clients/leuart/4.jpeg',
      '/clients/leuart/5.jpeg'
    ]
  },

  {
    id: '2',
    name: 'Studio adis',
    coverImage: '/clients/adis/cover.jpg',
    industry: 'Architecture Firm',
    description: 'A clean architectural identity shaped around space, structure, and refined modern living.',

    mainCampaign: 'Built Perspective',
    aboutTitle: 'Built Perspective',
    aboutText: 'Studio adis is an architecture firm focused on thoughtful planning, balanced forms, and functional spaces. The identity reflects a studio that turns ideas into precise, livable environments with clarity and detail.',

    mockups: [
      '/clients/adis/1.jpg',
      '/clients/adis/2.png',
      '/clients/adis/3.jpg',
      '/clients/adis/4.png'
    ]
  },

  {
    id: '3',
    name: 'Base6',
    coverImage: '/clients/base6/1.jpeg',
    industry: 'Brand Identity',
    description: 'A focused visual identity system built across practical campaign and brand touchpoints.',

    mainCampaign: 'Visual System',
    aboutTitle: 'Visual System',
    aboutText: 'Base6 brings together brand applications, presentation assets, and campaign visuals into a consistent identity experience.',

    mockups: [
      '/clients/base6/1.jpeg',
      '/clients/base6/2.jpeg',
      '/clients/base6/3.jpeg',
      '/clients/base6/4.jpeg',
      '/clients/base6/5.jpeg'
    ]
  },

  {
    id: '4',
    name: 'FCG',
    coverImage: '/clients/FCG/1.jpeg',
    industry: 'Brand Identity',
    description: 'A clear identity direction supported by polished applications and visual brand assets.',

    mainCampaign: 'Brand Applications',
    aboutTitle: 'Brand Applications',
    aboutText: 'FCG is presented through a practical set of brand touchpoints designed for consistency, recall, and everyday use.',

    mockups: [
      '/clients/FCG/1.jpeg',
      '/clients/FCG/2.jpeg',
      '/clients/FCG/3.jpeg',
      '/clients/FCG/4.jpeg',
      '/clients/FCG/5.jpeg',
      '/clients/FCG/6.jpeg'
    ]
  },

  {
    id: '5',
    name: 'Ghazva',
    coverImage: '/clients/ghazva/1.jpeg',
    industry: 'Brand Identity',
    description: 'A distinctive brand presence shaped through clean visuals and memorable campaign applications.',

    mainCampaign: 'Identity Rollout',
    aboutTitle: 'Identity Rollout',
    aboutText: 'Ghazva uses a strong visual direction across multiple assets to create a cohesive and recognizable brand experience.',

    mockups: [
      '/clients/ghazva/1.jpeg',
      '/clients/ghazva/2.jpeg',
      '/clients/ghazva/3.jpeg',
      '/clients/ghazva/4.jpeg'
    ]
  },

  {
    id: '6',
    name: 'Oaks',
    coverImage: '/clients/oaks/1.jpeg',
    industry: 'Brand Identity',
    description: 'A refined identity system built with strong brand applications and clear visual consistency.',

    mainCampaign: 'Designed Presence',
    aboutTitle: 'Designed Presence',
    aboutText: 'Oaks brings a polished visual language into brand materials, helping each application feel connected and intentional.',

    mockups: [
      '/clients/oaks/1.jpeg',
      '/clients/oaks/2.jpeg',
      '/clients/oaks/3.jpeg',
      '/clients/oaks/4.jpeg',
      '/clients/oaks/5.jpeg'
    ]
  },

  {
    id: '7',
    name: 'Singularity',
    coverImage: '/clients/singularity/1.jpeg',
    industry: 'Brand Identity',
    description: 'A modern identity direction with clean applications and a sharp visual system.',

    mainCampaign: 'Future Form',
    aboutTitle: 'Future Form',
    aboutText: 'Singularity uses focused visuals and structured brand assets to create a contemporary identity across touchpoints.',

    mockups: [
      '/clients/singularity/1.jpeg',
      '/clients/singularity/2.jpeg',
      '/clients/singularity/3.jpeg',
      '/clients/singularity/4.jpeg'
    ]
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
