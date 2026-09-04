import { Check } from 'lucide-react';
import careImage from '../assets/qadosh-home-care-art.jpg';
import inlineCareImage from '../assets/qadosh-community-care-art.jpg';

const commitments = [
  { title: 'Clinical experience', description: 'Doctors trained in reputable hospitals, bringing sound judgement into every visit.' },
  { title: 'Care on your terms', description: 'Appointments arranged around your location, schedule, and individual needs.' },
  { title: 'Privacy and attention', description: 'A familiar setting and enough time to have the conversation your health deserves.' },
];

export default function Who() {
  return (
    <section id="about" className="bg-wash py-28 md:py-40">
      <div className="section-shell grid grid-flow-dense grid-cols-12 gap-px overflow-hidden border border-line bg-line">
        <div className="col-span-12 min-h-[430px] overflow-hidden bg-white lg:col-span-7 lg:row-span-2 lg:min-h-[700px]">
          <img data-motion-image src={careImage} alt="Editorial illustration of a Qadosh clinician checking a patient's blood pressure at home" className="h-full w-full origin-center object-cover transition-transform duration-700 ease-out hover:scale-105" />
        </div>

        <div className="col-span-12 flex flex-col justify-center bg-white p-8 sm:p-12 lg:col-span-5 lg:row-span-2 lg:p-16">
          <h2 className="section-title">
            Care that fits
            <img src={inlineCareImage} alt="" aria-hidden="true" className="mx-3 inline-block h-[0.68em] w-[1.55em] rounded-full object-cover align-[0.02em]" />
            into your life.
          </h2>
          <p className="body-copy mt-7">Qadosh is a medical concierge service for people who value quality, privacy, and time. We meet you where you are, then shape the care around what you actually need.</p>
          <a href="#contact" className="mt-10 inline-flex w-fit items-center gap-2 border-b border-primary pb-1 font-semibold text-primary hover:text-primary-deep">Talk to a doctor <span aria-hidden="true">↗</span></a>
        </div>

        {commitments.map((commitment) => (
          <div key={commitment.title} className="col-span-12 bg-white p-8 sm:p-10 lg:col-span-4">
            <Check size={20} className="text-secondary" strokeWidth={2.4} />
            <h3 className="mt-8 text-xl font-medium tracking-[-0.02em]">{commitment.title}</h3>
            <p className="mt-3 max-w-sm leading-7 text-muted">{commitment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
