import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-primary py-24 text-white md:py-32">
      <div className="section-shell flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <h2 className="max-w-5xl text-[clamp(2.7rem,5.2vw,5.3rem)] font-medium leading-[0.98] tracking-[-0.045em] text-balance">Your health should fit your life, not interrupt it.</h2>
        <a href="#contact" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 font-semibold text-primary transition-colors duration-150 hover:bg-wash">Arrange a visit <ArrowRight size={19} /></a>
      </div>
    </section>
  );
}
