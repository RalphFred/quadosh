import { useState } from 'react';
import homeCare from '../assets/qadosh-hero-art.jpg';
import healthCheck from '../assets/qadosh-home-care-art.jpg';
import wellness from '../assets/qadosh-community-care-art.jpg';
import { services } from '../constants';

const serviceGroups = [
  { title: 'Care at home', summary: 'Medical attention without the journey.', image: homeCare, items: [services[0], services[2]] },
  { title: 'Preventive care', summary: 'Stay ahead of changes in your health.', image: healthCheck, items: [services[1], services[4]] },
  { title: 'Coordinated care', summary: 'Support beyond a single consultation.', image: wellness, items: [services[3], services[5]] },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = serviceGroups[activeIndex];

  return (
    <section id="services" className="bg-white py-28 md:py-44">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <h2 className="section-title max-w-4xl">Medical support, arranged around the way you live.</h2>
          <p className="body-copy lg:max-w-md">Choose the kind of support you need now. We can also combine services into a plan that grows with you.</p>
        </div>

        <div className="mt-10 md:hidden">
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line" role="tablist" aria-label="Service categories">
            {serviceGroups.map((group, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={group.title}
                  id={`service-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="mobile-service-panel"
                  className={`min-h-16 px-2 py-3 text-center text-sm font-medium leading-5 transition-colors ${isActive ? 'bg-primary text-white' : 'bg-white text-ink'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {group.title}
                </button>
              );
            })}
          </div>

          <div
            id="mobile-service-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeIndex}`}
            className="relative mt-4 min-h-[430px] overflow-hidden rounded-2xl text-white"
          >
            <img src={activeGroup.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute inset-0 bg-primary/82" />
            <div className="relative flex min-h-[430px] flex-col justify-end p-6">
              <h3 className="text-3xl font-medium tracking-[-0.025em]">{activeGroup.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/82">{activeGroup.summary}</p>
              <div className="mt-5 grid gap-4 border-t border-white/35 pt-5">
                {activeGroup.items.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <item.icon size={18} className="mt-1 shrink-0 text-secondary" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-sm leading-5 text-white/72">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 hidden h-[560px] gap-px overflow-hidden rounded-2xl bg-white md:flex">
          {serviceGroups.map((group, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={group.title}
                type="button"
                data-active={isActive}
                aria-expanded={isActive}
                className="service-panel group relative min-h-0 overflow-hidden text-left text-white"
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <img src={group.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <span className={`absolute inset-0 transition-colors duration-300 ${isActive ? 'bg-primary/78' : 'bg-ink/76'}`} />

                <span className="relative flex h-full min-h-44 flex-col justify-end p-6 sm:p-8 md:min-h-0">
                  <span className={`text-2xl font-medium tracking-[-0.025em] transition-opacity duration-300 md:text-3xl ${isActive ? 'opacity-100' : 'md:[writing-mode:vertical-rl] md:rotate-180'}`}>{group.title}</span>
                  <span className={`overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-out ${isActive ? 'mt-4 max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <span className="block max-w-lg text-base leading-7 text-white/82">{group.summary}</span>
                    <span className="mt-6 grid gap-3 border-t border-white/35 pt-5">
                      {group.items.map((item) => (
                        <span key={item.title} className="flex items-start gap-3">
                          <item.icon size={18} className="mt-1 shrink-0 text-secondary" />
                          <span><span className="block font-medium">{item.title}</span><span className="mt-1 block text-sm leading-5 text-white/70">{item.description}</span></span>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
