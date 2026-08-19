export interface GymInfo {
  name: string;
  tagline: string;
  rating: number;
  totalReviewsGoogle: number;
  totalReviewsJustdial: number;
  justdialRating: number;
  address: string;
  landmark: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  hours: string;
  closingTime: string;
  getThereTime: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  features: string[];
  equipment: string[];
  trainerSpecialist: string;
  image: string;
  intensity: 'High' | 'Medium' | 'Custom';
  idealFor: string;
}

export interface DayPopularity {
  day: string;
  dayShort: string;
  hourlyData: { hour: number; label: string; occupancy: number; isPeak?: boolean; note?: string }[];
  busiestTime: string;
  quietestTime: string;
  avgDuration: string;
}

export interface GymReview {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  source: 'Google' | 'Justdial' | 'Member Verified';
  verified: boolean;
  content: string;
  badge?: string;
  likes: number;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'interior' | 'strength' | 'cardio_aerobics' | 'dance' | 'outside';
  url: string;
  caption: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  features: string[];
  accentColor: string;
}

export interface MembershipPackage {
  id: string;
  name: string;
  category: string;
  targetAudience?: string;
  badge?: string;
  description: string;
  prices: {
    monthly: number;
    quarterly: number;
    annual: number;
  };
  features: string[];
  accentColor: string;
  popular?: boolean;
  coach: string;
  contactPhone: string;
}

export interface VIPPassData {
  passId: string;
  fullName: string;
  phone: string;
  serviceInterest: string;
  visitDate: string;
  slot: string;
  qrCodeSeed: string;
}

export interface GymOwner {
  id: string;
  name: string;
  role: string;
  designation: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  instagram: string;
  instagramHandle: string;
  specialties: string[];
  bio: string;
  image: string;
}
