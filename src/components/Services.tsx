import { services } from "../constants";

export default function Services() {
  return (
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
  );
}
