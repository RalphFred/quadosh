export default function CTA() {
  return (
    <div className="bg-sand-black text-white px-4 py-8 lg:px-12 lg:py-12 rounded-lg flex flex-col lg:flex-row items-center justify-between space-y-4 text-center lg:text-left">
      <div className="max-w-4xl">
        <h2 className="text-3xl  font-semibold mb-4">Your Health, Your Schedule — Let’s Get Started</h2>
      <p className="">Skip the waiting room and get expert care where you feel most comfortable. Send us a quick message today and we’ll arrange your visit.</p>
      </div>
      <a href="#contact">
        <button className='bg-primary text-white px-6 py-2 rounded-full'>
        Get Started
      </button>
      </a>
    </div>
  );
}
