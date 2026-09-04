import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  section?: 'home' | 'about' | 'services' | 'contact';
}

export default function SEO({
  title = "Qadosh Medical Services - Healthcare Right Where You Are",
  description = "Get expert medical care delivered to your home or office. Professional doctors provide personalized healthcare services including consultations, health checks, and ongoing care. Serving Nigeria with quality medical concierge services.",
  keywords = "home healthcare, medical concierge, doctor home visit, health check, medical services, Nigeria healthcare, home medical care, private doctor, health consultation",
  image = "/logo-text.png",
  url = "https://www.qadoshmedical.com",
  type = "website",
  author = "Qadosh Medical Services",
  section = "home"
}: SEOProps) {
  
  // Section-specific meta tags
  const getSectionMeta = () => {
    switch (section) {
      case 'home':
        return {
          title: "Qadosh Medical Services - Healthcare Right Where You Are",
          description: "Get expert medical care delivered to your home or office. Professional doctors provide personalized healthcare services including consultations, health checks, and ongoing care. Serving Nigeria with quality medical concierge services.",
          keywords: "home healthcare, medical concierge, doctor home visit, health check, medical services, Nigeria healthcare, home medical care, private doctor, health consultation"
        };
      case 'about':
        return {
          title: "About Qadosh Medical Services - Trusted Medical Concierge",
          description: "Learn about Qadosh Medical Services - a trusted medical concierge service bringing quality healthcare to your doorstep. Experienced doctors trained in reputable hospitals.",
          keywords: "about us, medical concierge, trusted healthcare, experienced doctors, home medical service, Nigeria medical services"
        };
      case 'services':
        return {
          title: "Medical Services - Home Healthcare & Consultations | Qadosh",
          description: "Comprehensive medical services including home consultations, health checks, long-term care, medical liaison, staff health screenings, and wellness education.",
          keywords: "medical services, home consultations, health checks, long-term care, medical liaison, staff health screening, wellness education"
        };
      case 'contact':
        return {
          title: "Contact Qadosh Medical Services - Get in Touch Today",
          description: "Contact Qadosh Medical Services for home healthcare. Call +2348057820833 or email qadoshmedical@gmail.com. Get expert medical care at your convenience.",
          keywords: "contact us, medical consultation, home healthcare contact, Nigeria medical services, phone consultation"
        };
      default:
        return { title, description, keywords };
    }
  };

  const sectionMeta = getSectionMeta();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{sectionMeta.title}</title>
      <meta name="description" content={sectionMeta.description} />
      <meta name="keywords" content={sectionMeta.keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={sectionMeta.title} />
      <meta property="og:description" content={sectionMeta.description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Qadosh Medical Services" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={sectionMeta.title} />
      <meta name="twitter:description" content={sectionMeta.description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0669a5" />
      <meta name="msapplication-TileColor" content="#0669a5" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo-text.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data - Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Qadosh Medical Services",
          "description": "Professional medical concierge service providing home healthcare, consultations, and medical services in Nigeria.",
          "url": url,
          "logo": `${url}/logo-text.png`,
          "image": image,
          "telephone": "+2348057820833",
          "email": "qadoshmedical@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Nigeria"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "addressCountry": "Nigeria"
          },
          "serviceArea": {
            "@type": "Country",
            "name": "Nigeria"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Medical Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Home Consultations & Treatments",
                  "description": "Expert medical care delivered to your home or office"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Annual & Routine Health Checks",
                  "description": "Comprehensive health screenings and check-ups"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Long-Term Home Care Visits",
                  "description": "Ongoing medical support and care management"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Medical Liaison & Escort",
                  "description": "Coordinate in-patient care and accompany to appointments"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Domestic Staff Health Checks",
                  "description": "Thorough health screenings for household staff"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Health Talks & Wellness Education",
                  "description": "Health presentations and outreaches at events and gatherings"
                }
              }
            ]
          },
          "sameAs": [
            "https://facebook.com/qadoshmedical",
            "https://twitter.com/qadoshmedical",
            "https://instagram.com/qadoshmedical",
            "https://linkedin.com/company/qadoshmedical"
          ]
        })}
      </script>

      {/* Additional Structured Data for Medical Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does Qadosh Medical Services offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer home consultations, health checks, long-term care, medical liaison, staff health screenings, and wellness education services."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide services in Nigeria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide medical concierge services throughout Nigeria, bringing healthcare directly to your home or office."
              }
            },
            {
              "@type": "Question",
              "name": "How can I contact Qadosh Medical Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact us by phone at +2348057820833, email at qadoshmedical@gmail.com, or through our contact form on the website."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
