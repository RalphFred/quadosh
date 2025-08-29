import { Helmet } from 'react-helmet-async';
import heroImg from '../assets/img.jpg';

export default function Hero() {
  return (
   <>
     <Helmet>
       <title>Qadosh Medical Services - Healthcare Right Where You Are</title>
       <meta name="description" content="Get expert medical care delivered to your home or office. Professional doctors provide personalized healthcare services including consultations, health checks, and ongoing care. Serving Nigeria with quality medical concierge services." />
       <meta name="keywords" content="home healthcare, medical concierge, doctor home visit, health check, medical services, Nigeria healthcare, home medical care, private doctor, health consultation" />
       
       {/* Open Graph */}
       <meta property="og:title" content="Qadosh Medical Services - Healthcare Right Where You Are" />
       <meta property="og:description" content="Get expert medical care delivered to your home or office. Professional doctors provide personalized healthcare services." />
       <meta property="og:type" content="website" />
       <meta property="og:url" content="https://qadoshmedical.com" />
       
       {/* Twitter */}
       <meta name="twitter:title" content="Qadosh Medical Services - Healthcare Right Where You Are" />
       <meta name="twitter:description" content="Get expert medical care delivered to your home or office. Professional doctors provide personalized healthcare services." />
     </Helmet>
     
     <div className="bg-white rounded-lg px-2 py-2 lg:px-12 lg:py-18 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"> 
      <div className='w-full lg:w-1/2 space-y-4 text-center lg:text-left'>
        <h1 className='text-5xl lg:text-6xl font-semibold mt-20 lg:mt-0'>Healthcare, Right Where <span className='text-primary'>You</span> Are.</h1>

        <p className='text-lg'>
          Bringing over a decade of medical expertise directly to your home or office — so you get the care you need, when and where you need it.
        </p>

        <div className=" space-x-4">        
          <a href="#contact">
          <button className='bg-white cursor-pointer border-2 border-primary px-6 py-2 rounded-full font-semibold'>
            Explore Services
          </button>
        </a>
        <a href="#contact">
          <button className='bg-primary cursor-pointer text-white px-6 py-2 rounded-full'>
            Get Started
          </button>
        </a>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <img src={heroImg} alt="Hero Image" className='object-cover rounded-lg shadow-lg' />
      </div>
     </div>
   </>
  );
}