import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Who from "./components/Who";
import Why from "./components/Why";

export default function App() {
  return (
   <div className='bg-neutral-100 p-2 lg:p-4 space-y-2 lg:space-y-4'>
     <Navbar />
     <Hero />
     <Who />  
     <Services />  
     <Why />
     <CTA />
     <Contact />
   </div>
  );
}