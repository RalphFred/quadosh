import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/logo-text.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Qadosh', href: '#why-qadosh' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);
    menuRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className={`sticky top-0 border-b border-line bg-white/94 backdrop-blur-xl ${isOpen ? 'z-[80]' : 'z-40'}`}>
      <nav className="section-shell flex h-[5.25rem] items-center justify-between" aria-label="Main navigation" aria-hidden={isOpen} inert={isOpen}>
        <a href="#home" aria-label="Qadosh Medical Services home">
          <img src={logo} alt="Qadosh Medical Services" className="h-11 w-auto object-contain sm:h-12" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink/75 transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="primary-button text-sm">Book a visit</a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Open navigation"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={22} />
        </button>
      </nav>

      <div
        ref={menuRef}
        id="mobile-navigation"
        className="mobile-menu-panel fixed inset-0 z-[70] flex min-h-dvh flex-col bg-white outline-none md:hidden"
        data-open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label="Mobile navigation"
        inert={!isOpen}
        tabIndex={-1}
      >
          <div className="section-shell flex h-[5.25rem] shrink-0 items-center justify-between border-b border-line">
            <a href="#home" aria-label="Qadosh Medical Services home" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="Qadosh Medical Services" className="h-11 w-auto object-contain" />
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink"
              aria-label="Close navigation"
              onClick={() => setIsOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="section-shell flex flex-1 flex-col pb-7 pt-8">
            <nav className="flex flex-col" aria-label="Mobile navigation links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-line py-5 text-[clamp(2.15rem,10vw,3.4rem)] font-medium leading-none tracking-[-0.04em] text-ink transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <a href="#contact" onClick={() => setIsOpen(false)} className="primary-button w-full text-base">Book a home visit</a>
            </div>
          </div>
      </div>
    </header>
  );
}
