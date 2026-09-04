import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import careImage from '../assets/qadosh-community-care-art.jpg';

const principles = [
  { title: 'Time to be heard', text: 'A good consultation should leave room for questions, context, and clear next steps.' },
  { title: 'Care in familiar surroundings', text: 'Home and office visits reduce avoidable stress and make quality care easier to access.' },
  { title: 'Support that stays personal', text: 'Your health needs are individual. The attention you receive should be individual too.' },
];

const revealCopy = 'Good care should feel accessible, attentive, private, and personal.';

export default function Why() {
  const [active, setActive] = useState(0);
  const previous = () => setActive((current) => (current - 1 + principles.length) % principles.length);
  const next = () => setActive((current) => (current + 1) % principles.length);

  return (
    <section id="why-qadosh" className="overflow-hidden bg-wash py-20 md:py-44">
      <div className="section-shell">
        <p data-scrub-copy className="max-w-6xl text-[2.15rem] font-medium leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl md:text-[clamp(3.4rem,5.3vw,5.4rem)]">
          {revealCopy.split(' ').map((word, index) => <span key={`${word}-${index}`} className="mr-[0.22em] inline-block">{word}</span>)}
        </p>

        <div className="mt-12 grid items-stretch gap-px bg-line md:mt-20 lg:grid-cols-[1fr_1fr]">
          <div className="overflow-hidden bg-white">
            <img data-motion-image src={careImage} alt="Editorial illustration of a Qadosh doctor leading a preventive health conversation" className="h-[260px] w-full origin-center object-cover transition-transform duration-700 ease-out hover:scale-105 sm:h-[320px] lg:h-full lg:min-h-[440px]" />
          </div>
          <div className="flex flex-col justify-between bg-primary p-7 text-white sm:p-10 lg:min-h-[440px] lg:p-16">
            <div aria-live="polite">
              <p className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl">{principles[active].title}</p>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/78 sm:text-lg sm:leading-8">{principles[active].text}</p>
            </div>
            <div className="mt-10 flex items-end justify-between border-t border-white/30 pt-5 lg:mt-16 lg:pt-6">
              <span className="text-sm font-medium tabular-nums text-white/65">{String(active + 1).padStart(2, '0')} / {String(principles.length).padStart(2, '0')}</span>
              <div className="flex gap-2">
                <button type="button" onClick={previous} aria-label="Previous care principle" className="grid size-12 place-items-center rounded-full border border-white/55 transition-colors duration-150 hover:bg-white hover:text-primary"><ChevronLeft size={20} /></button>
                <button type="button" onClick={next} aria-label="Next care principle" className="grid size-12 place-items-center rounded-full border border-white/55 transition-colors duration-150 hover:bg-white hover:text-primary"><ChevronRight size={20} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
