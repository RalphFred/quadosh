import { Helmet } from 'react-helmet-async';
import { services } from "../constants";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Medical Services - Home Healthcare & Consultations | Qadosh</title>
        <meta name="description" content="Comprehensive medical services including home consultations, health checks, long-term care, medical liaison, staff health screenings, and wellness education." />
        <meta name="keywords" content="medical services, home consultations, health checks, long-term care, medical liaison, staff health screening, wellness education, home healthcare, medical concierge" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Medical Services - Home Healthcare & Consultations | Qadosh" />
        <meta property="og:description" content="Comprehensive medical services including home consultations, health checks, long-term care, and wellness education." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qadoshmedical.com/#services" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Medical Services - Home Healthcare & Consultations | Qadosh" />
        <meta name="twitter:description" content="Comprehensive medical services including home consultations, health checks, long-term care, and wellness education." />
      </Helmet>
      
      <div className="bg-white rounded-lg px-2 py-2 lg:px-12 lg:py-18">
          <div className="flex justify-between items-center w-full mt-8 lg:mt-0">
              <div className="max-w-4xl">
                <h1 className="text-4xl lg:text-5xl font-semibold mb-2">Our Services</h1>
              <p>
                From routine check-ups to long-term ongoing care, we bring trusted, high-quality healthcare right to your home or office — making it easier, safer, and more convenient to look after your health.
              </p>
              </div>

            <div className="hidden lg:block">
        <a href="#contact">
          <button className='bg-primary cursor-pointer text-white px-6 py-2 rounded-full'>
            Get Started
          </button>
        </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {
              services.map((service, index) => (
                <div key={index} className="p-8 bg-blue-100 rounded-2xl space-y-4">
                  <div className="rounded-full size-12 bg-primary flex justify-center items-center text-white">
                    <service.icon />
                  </div>

                  <div className="mt-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-1">{service.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
    </>
  );
}
