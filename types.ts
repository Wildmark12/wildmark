
export interface Client {
  id: string;
  name: string;
  logo: string;
  coverImage?: string;
  industry: string;
  description: string;

  mainCampaign: string;
  aboutTitle?: string;
  aboutText?: string;
  logoConstruction?: string;

  mockups?: string[];
  colorPalette?: {
    name: string;
    hex: string;
    rgb: string;
    cmyk: string;
  }[];
  colorPaletteImage?: string;
  typography?: {
    name: string;
    sample: string;
    description?: string;
  }[];
  typographyImage?: string;
  brandElements?: string[];
  logoDisplay?: string;
}

export interface InstagramStory {
  id: string;
  imageUrl: string;
  clientName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  socials: {
    twitter?: string;
    instagram?: string;
    phone?: string;
  };
}
