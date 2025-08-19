import heroImg from '../assets/img.jpg';

export default function Hero() {
  return (
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
  );
}