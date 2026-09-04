import { ArrowDownRight, ArrowRight } from 'lucide-react';
import heroImg from '../assets/qadosh-hero-art.jpg';

export default function Hero() {
  return (
    <section id="home" className="bg-white pb-24 pt-12 md:pb-36 md:pt-20 lg:pb-44">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div className="relative z-10">
            <h1 className="display-title max-w-6xl text-ink">Healthcare that comes to you.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Experienced doctors provide consultations, health checks, and ongoing care in the privacy of your home or office.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="primary-button">Book a home visit <ArrowRight size={18} /></a>
              <a href="#services" className="secondary-button">Explore our services <ArrowDownRight size={18} /></a>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="absolute -left-2 top-10 h-[72%] w-3 bg-secondary md:-left-5 md:w-5" aria-hidden="true" />
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                data-motion-image
                src={heroImg}
                alt="Editorial illustration of a Qadosh doctor speaking with a patient during a home visit"
                className="aspect-[4/5] w-full origin-center object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
