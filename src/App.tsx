import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WhatsAppButton from "./components/WhatsapButton";
import Who from "./components/Who";
import Why from "./components/Why";

export default function App() {
  return (
   <div className='bg-neutral-100 p-2 lg:p-4 space-y-2 lg:space-y-4'>
     <Navbar />
     <div id="home"><Hero /></div>
     <div id="about"><Who /> </div> 
     <div id="services"><Services /></div>
     <Why />
     <CTA />
     <WhatsAppButton phoneNumber="+234 805 782 0833" />
     <div id="contact"><Contact /></div>
     <Footer />
   </div>
  );
}