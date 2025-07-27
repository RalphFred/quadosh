export const SITE = {
  name: "Qadosh Management Services Ltd",
  shortName: "QMS",
  title: "Empowering Africa Through Smart Facility Management & Engineering Excellence",
  description: "Delivering innovative solutions across infrastructure, engineering, logistics, and real estate. Nigerian-owned company transforming service delivery across Africa.",
  url: "https://qadoshmanagement.com", // Update with actual domain
  image: "/logo.jpg",
  
  // Company Information
  company: {
    fullName: "Qadosh Management Services Ltd",
    shortName: "QMS",
    country: "Nigeria",
    region: "Africa",
    description: "A forward-thinking, Nigerian-owned company offering comprehensive services in infrastructure, engineering, logistics, and real estate."
  },
  
  // Contact Information
  contact: {
    phone: "+234 XXX XXX XXXX", // Update with actual number
    email: "info@qadoshmanagement.com", // Update with actual email
    address: {
      street: "Business Address", // Update with actual address
      city: "Lagos", // Update with actual city
      state: "Lagos State",
      country: "Nigeria",
      full: "Business Address\nLagos, Lagos State\nNigeria"
    }
  },
  
  // Business Hours
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 2:00 PM", 
    sunday: "Closed"
  },
  
  // Social Media
  social: {
    facebook: "#",
    linkedin: "#", 
    twitter: "#",
    instagram: "#"
  },

  // Vision & Mission
  vision: "To become Africa's foremost facility management and engineering solutions provider.",
  mission: "To transform infrastructure and service delivery in Africa through innovation, excellence, and integrity."
} as const;

export const CORE_VALUES = [
  {
    title: "Integrity",
    description: "We uphold transparency and honesty in all our dealings.",
    icon: "integrity"
  },
  {
    title: "Excellence", 
    description: "We strive for superior quality and outstanding service delivery.",
    icon: "excellence"
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and technologies.",
    icon: "innovation"
  },
  {
    title: "Teamwork",
    description: "We believe in the power of collaboration.",
    icon: "teamwork"
  },
  {
    title: "Customer Focus",
    description: "We put client satisfaction at the heart of everything.",
    icon: "customer"
  }
] as const;

export const NAVIGATION = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
] as const;

export const SERVICES = [
  {
    id: "engineering",
    title: "Engineering Services",
    shortDescription: "Mechanical, electrical & civil engineering excellence",
    description: "From conceptual design to final execution, QMS delivers top-tier mechanical, electrical, and civil engineering solutions tailored to client needs.",
    features: ["Mechanical Engineering", "Electrical Systems", "Civil Engineering", "Design to Execution"],
    icon: "engineering",
    popular: true
  },
  {
    id: "facility-management",
    title: "Facility Management",
    shortDescription: "End-to-end maintenance & asset management",
    description: "We provide end-to-end maintenance, asset management, and sustainability solutions for commercial and residential properties.",
    features: ["Property Maintenance", "Asset Management", "Sustainability Solutions", "24/7 Support"],
    icon: "facility",
    popular: true
  },
  {
    id: "real-estate",
    title: "Real Estate Development & Advisory",
    shortDescription: "Property development & strategic consultation",
    description: "We develop, manage, and consult on real estate projects that drive value and growth across Africa.",
    features: ["Property Development", "Real Estate Advisory", "Investment Analysis", "Market Research"],
    icon: "realestate",
    popular: false
  },
  {
    id: "procurement-logistics", 
    title: "Procurement & Logistics",
    shortDescription: "Seamless supply chain management",
    description: "QMS ensures seamless procurement, supply chain, and logistics operations, delivering the right materials at the right time and cost.",
    features: ["Supply Chain Management", "Procurement Services", "Logistics Coordination", "Cost Optimization"],
    icon: "logistics",
    popular: false
  },
  {
    id: "project-management",
    title: "Project Management",
    shortDescription: "Professional project delivery",
    description: "Our experienced team ensures projects are delivered on time, within budget, and to the highest standards.",
    features: ["Project Planning", "Budget Management", "Quality Assurance", "Timeline Delivery"],
    icon: "project",
    popular: false
  }
] as const;

export const WHY_CHOOSE_QMS = [
  {
    title: "Proven Track Record",
    description: "Successful projects across engineering, real estate, and logistics.",
    icon: "track-record"
  },
  {
    title: "Qualified Experts",
    description: "Diverse team of engineers, project managers, and consultants.",
    icon: "experts"
  },
  {
    title: "Client-Centric",
    description: "Customized solutions aligned with client objectives.",
    icon: "client-centric"
  },
  {
    title: "Pan-African Reach",
    description: "Operational capacity across Nigeria and the African continent.",
    icon: "pan-african"
  }
] as const;

export const CAREER_AREAS = [
  "Engineering",
  "Facility Management", 
  "Real Estate Advisory",
  "Logistics and Procurement",
  "Project Management",
  "Business Development"
] as const; 