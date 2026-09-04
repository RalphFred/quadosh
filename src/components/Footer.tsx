import { Mail, Phone } from 'lucide-react';
import logo from '../assets/images/logo-text.png';

export default function Footer() {
  return (
    <footer className="bg-night py-14 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div>
          <img src={logo} alt="Qadosh Medical Services" className="h-14 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/60">Personalized medical services in the comfort of your home, office, and community.</p>
        </div>
        <div>
          <p className="text-sm font-medium text-secondary">Explore</p>
          <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold" aria-label="Footer navigation">
            <a href="#about" className="text-white/70 hover:text-secondary">About us</a>
            <a href="#services" className="text-white/70 hover:text-secondary">Services</a>
            <a href="#contact" className="text-white/70 hover:text-secondary">Contact us</a>
          </nav>
        </div>
        <div>
          <p className="text-sm font-medium text-secondary">Reach us</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <a href="tel:+2348057820833" className="flex items-center gap-2 hover:text-secondary"><Phone size={16} /> +234 805 782 0833</a>
            <a href="mailto:qadoshmedical@gmail.com" className="flex items-center gap-2 hover:text-secondary"><Mail size={16} /> qadoshmedical@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-12 border-t border-white/15 pt-6 text-xs tracking-[0.015em] text-white/45">© {new Date().getFullYear()} Qadosh Medical Services. All rights reserved.</div>
    </footer>
  );
}
