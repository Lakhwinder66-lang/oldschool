import { GymInfo, ServiceItem, DayPopularity, GymReview, GalleryPhoto, MembershipPlan } from '../types';

export const GYM_DETAILS: GymInfo = {
  name: "Old Skoool Gym",
  tagline: "The Pinnacle of Strength & Transformation in Firozpur",
  rating: 5.0,
  totalReviewsGoogle: 7,
  totalReviewsJustdial: 18,
  justdialRating: 5.0,
  address: "Gobind Nagri Road, Industrial Area, Model Town, Firozpur, Punjab 152001",
  landmark: "Near Model Town Industrial Belt",
  area: "Industrial Area, Model Town",
  city: "Firozpur (Ferozepur)",
  state: "Punjab",
  pincode: "152001",
  phone: "085448 34372",
  phoneRaw: "+918544834372",
  whatsapp: "918544834372",
  hours: "Open Daily · 5:30 AM – 10:00 PM",
  closingTime: "10:00 PM",
  getThereTime: "9 mins from City Centre",
  description: "Old Skoool Gym is one of the premier fitness powerhouses in Firozpur, Punjab. We deliver top-tier training infrastructure spanning heavy iron Strength Training, endurance Cardio Systems, high-octane Aerobics, energetic Dance Studio Classes, certified Diet & Nutrition Consultancy, and 1-on-1 Personal Training with dedicated body transformation coaches.",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "strength",
    title: "Strength Training & Power Iron",
    category: "Muscle & Hypertrophy",
    tag: "Heavy Duty",
    description: "Olympic barbells, custom multi-grip dumbbells up to 50kg, precision cable towers, squat racks, and biomechanically tuned isolation machines for serious lifters.",
    features: [
      "Heavy gauge power racks & deadlift platforms",
      "Hammer Strength & calibrated plate loading",
      "Spotter assistance & form correction guidance",
      "Progressive overload periodization tracking"
    ],
    equipment: ["Eleiko Bars", "Hammer Strength", "Dumbbells 2.5kg - 50kg", "Cable Stations", "Hack Squat"],
    trainerSpecialist: "Master Coach Jaspreet & Gurwinder",
    image: "/src/assets/images/gym_interior_hero_1787135615190.jpg",
    intensity: "High",
    idealFor: "Bodybuilding, Strength, Muscle Gain, Powerlifting"
  },
  {
    id: "cardio",
    title: "High-Performance Cardio Zone",
    category: "Endurance & Heart Health",
    tag: "Calorie Burn",
    description: "State-of-the-art commercial treadmills, air assault bikes, rowing ergometers, and elliptical cross-trainers designed to elevate stamina, VO2 max, and accelerate fat loss.",
    features: [
      "Interactive heart-rate & telemetry tracking",
      "HIIT sprint conditioning protocols",
      "Low-impact joint friendly cardio options",
      "Pacing programs for 5K to marathon endurance"
    ],
    equipment: ["Commercial Treadmills", "Air Assault Bikes", "Concept2 Rowers", "Cross Trainers", "Spin Bikes"],
    trainerSpecialist: "Coach Harpreet Singh",
    image: "/src/assets/images/gym_cardio_dance_1787135636415.jpg",
    intensity: "High",
    idealFor: "Fat Loss, Cardiovascular Health, Athletic Stamina"
  },
  {
    id: "aerobics",
    title: "Aerobics & Group Energy",
    category: "Functional Fitness",
    tag: "High Energy",
    description: "Electrifying rhythm-driven group aerobics designed to tone muscles, enhance flexibility, boost core stability, and torch up to 650 calories in a single session.",
    features: [
      "Step aerobics & core fusion beats",
      "Energizing acoustic soundstage & mood lighting",
      "All fitness levels welcome with scaleable steps",
      "Dedicated morning & evening ladies & mixed batches"
    ],
    equipment: ["Aerobic Steps", "Resistance Bands", "Light Toning Bars", "Medicine Balls", "Yoga Mats"],
    trainerSpecialist: "Instructor Simran & Team",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    intensity: "Medium",
    idealFor: "Weight Loss, Flexibility, Core Toning, Full Body Conditioning"
  },
  {
    id: "dance",
    title: "Dance & Cardio Choreography",
    category: "Rhythm & Agility",
    tag: "Fun & Fit",
    description: "Fuse pulsating Punjabi beats, Zumba rhythms, and dynamic body isolations. A sweat-drenched cardiovascular party where every track pushes your stamina.",
    features: [
      "Bhangra Cardio & Bollywood HIIT fusion",
      "Zumba certified choreography modules",
      "Great for mental de-stress and agility",
      "Dedicated wooden-floor mirrored dance studio"
    ],
    equipment: ["Sprung Dance Floor", "Acoustic Surround Array", "Full Wall Mirrors", "Ambient Glow"],
    trainerSpecialist: "Dance Maestro Aman",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1200&auto=format&fit=crop",
    intensity: "High",
    idealFor: "Cardio conditioning, coordination, stress relief, fun fat burning"
  },
  {
    id: "diet",
    title: "Certified Diet & Nutrition Consultant",
    category: "Wellness & Biochemistry",
    tag: "Custom Meal Plans",
    description: "Science-backed personalized macro and micronutrient coaching tailored to Punjabi dietary lifestyles, vegetarians, athletes, and transformation goals.",
    features: [
      "Customized Desi & Western macro balanced charts",
      "Fat-loss, lean bulking & diabetic-friendly diets",
      "Weekly body composition & caliper check-ins",
      "Supplement timing, hydration & gut health advice"
    ],
    equipment: ["InBody Composition Analyzer", "Skinfold Calipers", "Macro Digital Tracker", "Nutrient Manuals"],
    trainerSpecialist: "Dietitian Dr. Manmeet Kaur (Consultant)",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    intensity: "Custom",
    idealFor: "Sustainable fat reduction, muscle building, clinical lifestyle reversal"
  },
  {
    id: "pt",
    title: "1-on-1 Elite Personal Training",
    category: "Tailored Coaching",
    tag: "Guaranteed Results",
    description: "Direct mentorship with dedicated coaches. Get customized workout routines, posture correction, motivation, and strict accountability for fast results.",
    features: [
      "100% focused attention every training rep",
      "Kinematic movement & injury prevention checks",
      "Real-time load management and progression",
      "Flexible private booking slots (Morning / Evening)"
    ],
    equipment: ["Private PT Zone", "VBT Velocity Sensors", "BFR Bands", "Mobility Rigs"],
    trainerSpecialist: "Head Coach Lakhwinder & Senior Staff",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    intensity: "High",
    idealFor: "Fast-track body transformations, beginners, competitive athletes"
  }
];

export const POPULAR_TIMES_DATA: DayPopularity[] = [
  {
    day: "Monday",
    dayShort: "Mon",
    avgDuration: "1 - 1.5 hours",
    busiestTime: "6:00 PM – 8:30 PM (Peak 88%)",
    quietestTime: "1:00 PM – 3:30 PM (Low 22%)",
    hourlyData: [
      { hour: 6, label: "6 AM", occupancy: 45 },
      { hour: 7, label: "7 AM", occupancy: 70, isPeak: true },
      { hour: 8, label: "8 AM", occupancy: 65 },
      { hour: 9, label: "9 AM", occupancy: 42 },
      { hour: 10, label: "10 AM", occupancy: 30 },
      { hour: 11, label: "11 AM", occupancy: 24 },
      { hour: 12, label: "12 PM", occupancy: 20 },
      { hour: 13, label: "1 PM", occupancy: 18 },
      { hour: 14, label: "2 PM", occupancy: 15 },
      { hour: 15, label: "3 PM", occupancy: 22, note: "Usually not too busy" },
      { hour: 16, label: "4 PM", occupancy: 38 },
      { hour: 17, label: "5 PM", occupancy: 68 },
      { hour: 18, label: "6 PM", occupancy: 88, isPeak: true },
      { hour: 19, label: "7 PM", occupancy: 92, isPeak: true },
      { hour: 20, label: "8 PM", occupancy: 78 },
      { hour: 21, label: "9 PM", occupancy: 48 },
    ]
  },
  {
    day: "Tuesday",
    dayShort: "Tue",
    avgDuration: "1 - 1.5 hours",
    busiestTime: "6:30 PM – 8:30 PM",
    quietestTime: "2:00 PM – 4:00 PM",
    hourlyData: [
      { hour: 6, label: "6 AM", occupancy: 40 },
      { hour: 7, label: "7 AM", occupancy: 68, isPeak: true },
      { hour: 8, label: "8 AM", occupancy: 62 },
      { hour: 9, label: "9 AM", occupancy: 38 },
      { hour: 10, label: "10 AM", occupancy: 28 },
      { hour: 11, label: "11 AM", occupancy: 22 },
      { hour: 12, label: "12 PM", occupancy: 19 },
      { hour: 13, label: "1 PM", occupancy: 16 },
      { hour: 14, label: "2 PM", occupancy: 14 },
      { hour: 15, label: "3 PM", occupancy: 20, note: "Usually not too busy" },
      { hour: 16, label: "4 PM", occupancy: 35 },
      { hour: 17, label: "5 PM", occupancy: 65 },
      { hour: 18, label: "6 PM", occupancy: 84, isPeak: true },
      { hour: 19, label: "7 PM", occupancy: 89, isPeak: true },
      { hour: 20, label: "8 PM", occupancy: 74 },
      { hour: 21, label: "9 PM", occupancy: 42 },
    ]
  },
  {
    day: "Wednesday",
    dayShort: "Wed",
    avgDuration: "1 - 1.5 hours",
    busiestTime: "6:00 PM – 8:00 PM",
    quietestTime: "1:00 PM – 3:30 PM",
    hourlyData: [
      { hour: 6, label: "6 AM", occupancy: 42 },
      { hour: 7, label: "7 AM", occupancy: 65, isPeak: true },
      { hour: 8, label: "8 AM", occupancy: 58 },
      { hour: 9, label: "9 AM", occupancy: 36 },
      { hour: 10, label: "10 AM", occupancy: 26 },
      { hour: 11, label: "11 AM", occupancy: 20 },
      { hour: 12, label: "12 PM", occupancy: 18 },
      { hour: 13, label: "1 PM", occupancy: 15 },
      { hour: 14, label: "2 PM", occupancy: 16 },
      { hour: 15, label: "3 PM", occupancy: 24, note: "Usually not too busy" },
      { hour: 16, label: "4 PM", occupancy: 40 },
      { hour: 17, label: "5 PM", occupancy: 69 },
      { hour: 18, label: "6 PM", occupancy: 86, isPeak: true },
      { hour: 19, label: "7 PM", occupancy: 90, isPeak: true },
      { hour: 20, label: "8 PM", occupancy: 72 },
      { hour: 21, label: "9 PM", occupancy: 44 },
    ]
  },
  {
    day: "Thursday",
    dayShort: "Thu",
    avgDuration: "1 - 1.5 hours",
    busiestTime: "6:30 PM – 8:30 PM",
    quietestTime: "2:00 PM – 3:45 PM",
    hourlyData: [
      { hour: 6, label: "6 AM", occupancy: 38 },
      { hour: 7, label: "7 AM", occupancy: 64, isPeak: true },
      { hour: 8, label: "8 AM", occupancy: 55 },
      { hour: 9, label: "9 AM", occupancy: 34 },
      { hour: 10, label: "10 AM", occupancy: 25 },
      { hour: 11, label: "11 AM", occupancy: 21 },
      { hour: 12, label: "12 PM", occupancy: 17 },
      { hour: 13, label: "1 PM", occupancy: 14 },
      { hour: 14, label: "2 PM", occupancy: 16 },
      { hour: 15, label: "3 PM", occupancy: 22, note: "Usually not too busy" },
      { hour: 16, label: "4 PM", occupancy: 36 },
      { hour: 17, label: "5 PM", occupancy: 66 },
      { hour: 18, label: "6 PM", occupancy: 82, isPeak: true },
      { hour: 19, label: "7 PM", occupancy: 88, isPeak: true },
      { hour: 20, label: "8 PM", occupancy: 70 },
      { hour: 21, label: "9 PM", occupancy: 40 },
    ]
  },
  {
    day: "Friday",
    dayShort: "Fri",
    avgDuration: "1 - 1.5 hours",
    busiestTime: "6:00 PM – 8:00 PM",
    quietestTime: "1:30 PM – 3:30 PM",
    hourlyData: [
      { hour: 6, label: "6 AM", occupancy: 46 },
      { hour: 7, label: "7 AM", occupancy: 72, isPeak: true },
      { hour: 8, label: "8 AM", occupancy: 60 },
      { hour: 9, label: "9 AM", occupancy: 38 },
      { hour: 10, label: "10 AM", occupancy: 28 },
      { hour: 11, label: "11 AM", occupancy: 22 },
      { hour: 12, label: "12 PM", occupancy: 18 },
      { hour: 13, label: "1 PM", occupancy: 17 },
      { hour: 14, label: "2 PM", occupancy: 18 },
      { hour: 15, label: "3 PM", occupancy: 25, note: "Usually not too busy" },
      { hour: 16, label: "4 PM", occupancy: 44 },
      { hour: 17, label: "5 PM", occupancy: 72 },
      { hour: 18, label: "6 PM", occupancy: 91, isPeak: true },
      { hour: 19, label: "7 PM", occupancy: 94, isPeak: true },
      { hour: 20, label: "8 PM", occupancy: 76 },
      { hour: 21, label: "9 PM", occupancy: 45 },
    ]
  },
  {
    day: "Saturday",
    dayShort: "Sat",
    avgDuration: "1 - 1.5 hours",
    busiestTime: "7:00 AM – 9:30 AM & 6:00 PM",
    quietestTime: "2:00 PM – 4:00 PM",
    hourlyData: [
      { hour: 6, label: "6 AM", occupancy: 52 },
      { hour: 7, label: "7 AM", occupancy: 82, isPeak: true },
      { hour: 8, label: "8 AM", occupancy: 86, isPeak: true },
      { hour: 9, label: "9 AM", occupancy: 68 },
      { hour: 10, label: "10 AM", occupancy: 44 },
      { hour: 11, label: "11 AM", occupancy: 32 },
      { hour: 12, label: "12 PM", occupancy: 24 },
      { hour: 13, label: "1 PM", occupancy: 20 },
      { hour: 14, label: "2 PM", occupancy: 18 },
      { hour: 15, label: "3 PM", occupancy: 23, note: "Usually not too busy" },
      { hour: 16, label: "4 PM", occupancy: 42 },
      { hour: 17, label: "5 PM", occupancy: 68 },
      { hour: 18, label: "6 PM", occupancy: 85, isPeak: true },
      { hour: 19, label: "7 PM", occupancy: 80 },
      { hour: 20, label: "8 PM", occupancy: 62 },
      { hour: 21, label: "9 PM", occupancy: 38 },
    ]
  },
  {
    day: "Sunday",
    dayShort: "Sun",
    avgDuration: "1 - 1.5 hours",
    busiestTime: "8:00 AM – 10:30 AM",
    quietestTime: "1:00 PM – 4:00 PM",
    hourlyData: [
      { hour: 6, label: "6 AM", occupancy: 30 },
      { hour: 7, label: "7 AM", occupancy: 55 },
      { hour: 8, label: "8 AM", occupancy: 78, isPeak: true },
      { hour: 9, label: "9 AM", occupancy: 84, isPeak: true },
      { hour: 10, label: "10 AM", occupancy: 62 },
      { hour: 11, label: "11 AM", occupancy: 38 },
      { hour: 12, label: "12 PM", occupancy: 22 },
      { hour: 13, label: "1 PM", occupancy: 16 },
      { hour: 14, label: "2 PM", occupancy: 14 },
      { hour: 15, label: "3 PM", occupancy: 19, note: "Usually not too busy" },
      { hour: 16, label: "4 PM", occupancy: 32 },
      { hour: 17, label: "5 PM", occupancy: 54 },
      { hour: 18, label: "6 PM", occupancy: 65 },
      { hour: 19, label: "7 PM", occupancy: 58 },
      { hour: 20, label: "8 PM", occupancy: 42 },
      { hour: 21, label: "9 PM", occupancy: 25 },
    ]
  }
];

export const REVIEWS_LIST: GymReview[] = [
  {
    id: "rev-1",
    author: "Harmanpreet Gill",
    rating: 5,
    date: "1 week ago",
    source: "Google",
    verified: true,
    badge: "Local Guide · 42 reviews",
    content: "Old Skoool Gym is hands down the cleanest and best equipped gym in Ferozepur! The dumbbell rack goes very heavy, coaches are always attentive to posture, and the music vibe keeps adrenaline pumped. Loved the diet chart they prepared for me.",
    likes: 14
  },
  {
    id: "rev-2",
    author: "Navjot Sandhu",
    rating: 5,
    date: "2 weeks ago",
    source: "Justdial",
    verified: true,
    badge: "Verified Member",
    content: "Joined 3 months ago for weight loss and aerobics classes. Lost 8 kgs already! Simran ma'am and the trainers are very cooperative. Gobind Nagri location is super convenient with ample parking space.",
    likes: 9
  },
  {
    id: "rev-3",
    author: "Gurinderjit Sharma",
    rating: 5,
    date: "1 month ago",
    source: "Google",
    verified: true,
    badge: "Strength Athlete",
    content: "Proper hardcore atmosphere without any show-off nonsense. True old school work ethic with modern machines. Best place in Model Town / Industrial Area for serious lifters.",
    likes: 19
  },
  {
    id: "rev-4",
    author: "Kiran Bala",
    rating: 5,
    date: "1 month ago",
    source: "Justdial",
    verified: true,
    badge: "Aerobics & Dance Member",
    content: "The evening dance and aerobics sessions are top tier in Punjab! Very safe and welcoming environment for female members. Highly recommend Old Skoool Gym to all fitness enthusiasts.",
    likes: 11
  },
  {
    id: "rev-5",
    author: "Sukhwinder 'Sukha' Dhillon",
    rating: 5,
    date: "2 months ago",
    source: "Google",
    verified: true,
    badge: "Personal Training",
    content: "Personal training under Lakhwinder Sir completely changed my bench press and squat form. The diet consultant advised proper vegetarian protein distribution. 5/5 stars deserved!",
    likes: 22
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Old Skoool Gym Main Floor",
    category: "interior",
    url: "/src/assets/images/gym_interior_hero_1787135615190.jpg",
    caption: "Heavy duty iron zone, Olympic platforms and ambient rim lights."
  },
  {
    id: "g2",
    title: "Aerobics & Dance Studio",
    category: "dance",
    url: "/src/assets/images/gym_cardio_dance_1787135636415.jpg",
    caption: "Sprung floor studio with acoustic surround sound & full length mirrors."
  },
  {
    id: "g3",
    title: "Powerlifting & Heavy Dumbbells",
    category: "strength",
    url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
    caption: "Custom dumbbells up to 50kg, precision cast iron plates."
  },
  {
    id: "g4",
    title: "Cardio & HIIT Zone",
    category: "cardio_aerobics",
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    caption: "Commercial treadmills, assault bikes and stairmasters with telemetry."
  },
  {
    id: "g5",
    title: "Exterior & Parking View",
    category: "outside",
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
    caption: "Exterior facade on Gobind Nagri Road, Industrial Area with spacious parking."
  },
  {
    id: "g6",
    title: "Nutrition & Diet Consultation Desk",
    category: "interior",
    url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop",
    caption: "Dedicated consultation room for body composition and diet mapping."
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "pass",
    name: "1-Day VIP Trial Pass",
    duration: "Single Day Access",
    price: "₹0",
    originalPrice: "₹250",
    features: [
      "Full access to Strength & Cardio Zone",
      "Complimentary Body Composition Analysis",
      "Trainer form consultation & orientation",
      "Locker & shower facilities access"
    ],
    accentColor: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: "monthly",
    name: "Monthly Core Transformation",
    duration: "1 Month Unlimited",
    price: "₹1,499",
    originalPrice: "₹1,800",
    features: [
      "Unlimited gym floor access 5:30 AM – 10:00 PM",
      "Strength & Cardio training equipment",
      "Aerobics & Dance batch inclusion",
      "Free initial customized Diet Chart",
      "Mobile tracking support"
    ],
    accentColor: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: "quarterly",
    name: "3-Month Iron Warrior",
    duration: "Quarterly Commitment",
    price: "₹3,799",
    originalPrice: "₹4,800",
    popular: true,
    features: [
      "Everything in Monthly Core",
      "Bi-weekly Diet Consultant revisions",
      "Priority slot booking for Dance & Aerobics",
      "2 One-on-One PT form correction sessions",
      "Free Old Skoool Gym Shaker Bottle"
    ],
    accentColor: "from-amber-500/25 to-red-500/25"
  },
  {
    id: "annual",
    name: "1-Year Elite Athlete VIP",
    duration: "365 Days All-Inclusive",
    price: "₹11,999",
    originalPrice: "₹16,000",
    features: [
      "Unlimited 365-day access with guest passes",
      "Monthly comprehensive InBody analysis",
      "Full custom diet, contest/macro strategy",
      "Dedicated personal trainer guidance",
      "Free Old Skoool Gym official training kit"
    ],
    accentColor: "from-emerald-500/20 to-teal-500/20"
  }
];
