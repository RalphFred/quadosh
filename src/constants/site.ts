export const SITE = {
  name: "QMS Company",
  title: "Quality Management Solutions",
  description: "Professional quality management solutions designed to help your organization achieve operational excellence, compliance, and continuous improvement.",
  url: "https://qmscompany.com", // Update with actual domain
  image: "/favicon.svg",
  
  // Contact Information
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@qmscompany.com",
    address: {
      street: "123 Business Ave, Suite 100",
      city: "Business City",
      state: "BC",
      zip: "12345",
      full: "123 Business Ave, Suite 100\nBusiness City, BC 12345"
    }
  },
  
  // Business Hours
  hours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM", 
    sunday: "Closed"
  },
  
  // Social Media
  social: {
    facebook: "#",
    linkedin: "#", 
    twitter: "#"
  }
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
] as const;

export const SERVICES = [
  {
    id: "iso-certification",
    title: "ISO Certification Support",
    shortDescription: "Complete guidance through ISO standards",
    description: "Complete guidance through ISO 9001, 14001, 45001, and other international standards. From gap analysis to certification maintenance.",
    features: ["Gap Analysis", "Documentation Support", "Implementation Guidance", "Certification Maintenance"],
    icon: "certificate",
    popular: true
  },
  {
    id: "qms",
    title: "Quality Management Systems",
    shortDescription: "Robust QMS design and implementation",
    description: "Design and implement robust QMS tailored to your organization's needs and industry requirements.",
    features: ["QMS Design", "Process Mapping", "Document Control", "Performance Monitoring"],
    icon: "system",
    popular: false
  },
  {
    id: "process-improvement", 
    title: "Process Improvement",
    shortDescription: "Lean Six Sigma methodologies",
    description: "Lean Six Sigma methodologies to eliminate waste, reduce variation, and optimize your operations.",
    features: ["Lean Implementation", "Six Sigma Projects", "Value Stream Mapping", "Kaizen Events"],
    icon: "improvement",
    popular: false
  },
  {
    id: "training",
    title: "Training & Development",
    shortDescription: "Comprehensive quality training programs",
    description: "Comprehensive training programs to build quality awareness and competency across your organization.",
    features: ["Quality Awareness", "Internal Auditor Training", "Management Training", "Custom Workshops"],
    icon: "training",
    popular: false
  },
  {
    id: "audit",
    title: "Audit & Assessment", 
    shortDescription: "Internal audits and assessments",
    description: "Internal audit programs and management system assessments to ensure ongoing compliance and improvement.",
    features: ["Internal Audits", "Management Reviews", "Compliance Assessments", "Risk Assessments"],
    icon: "audit",
    popular: false
  },
  {
    id: "consulting",
    title: "Consulting Services",
    shortDescription: "Strategic quality consulting",
    description: "Strategic consulting to align quality initiatives with business objectives and drive organizational excellence.",
    features: ["Strategic Planning", "Change Management", "Risk Management", "Performance Excellence"],
    icon: "consulting",
    popular: false
  }
] as const; 