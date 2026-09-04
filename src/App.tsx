import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PageMotion from './components/PageMotion';
import SEO from './components/SEO';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsapButton';
import Who from './components/Who';
import Why from './components/Why';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-canvas text-ink">
      <SEO />
      <PageMotion />
      <Navbar />
      <main>
        <Hero />
        <Who />
        <Services />
        <Why />
        <CTA />
        <Contact />
      </main>
      <WhatsAppButton phoneNumber="+234 916 073 1000" />
      <Footer />
    </div>
  );
}
