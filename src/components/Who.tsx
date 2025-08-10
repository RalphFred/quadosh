import heroImg from '../assets/hero.jpg';

export default function Who() {
  return (
    <div className="bg-white rounded-lg px-2 py-2 lg:px-12 lg:py-18 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
    <div className='w-full lg:w-1/2'>
      <img src={heroImg} alt="Hero Image" className='object-cover rounded-lg shadow-lg' />
    </div>

    <div className='w-full lg:w-1/2 space-y-4 '>
      <h2 className='text-4xl lg:text-5xl font-semibold mt-12 lg:mt-0'>Who are we?</h2>

      <p className='text-lg'>
        We are a trusted medical concierge service that brings quality healthcare right to your doorstep. Whether you're at home or in the office, our experienced doctors — trained in reputable hospitals — provide personalized care that fits into your schedule. No waiting rooms, no long trips, just convenient, private, and professional medical attention when and where you need it most.
      </p>

      <div className=" space-x-4">
        <button className='bg-white border-2 border-primary px-6 py-2 rounded-full font-semibold'>
          Explore Services
        </button>
        <button className='bg-primary text-white px-6 py-2 rounded-full'>
          Get Started
        </button>
      </div>
    </div>
    </div>
  );
}