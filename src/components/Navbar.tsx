import logo from '../assets/logo-text.jpg';
import { useState } from "react";


export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const NavLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  const handleClick = () => {
    setIsOpenMenu((prevState) => !prevState);
  };
  return (
   <nav className="bg-white rounded-lg px-2 py-2 lg:px-12 lg:py-2 flex justify-between items-center"> 
     <img src={logo} alt="qadosh Logo" className='h-12 lg:h-16 w-auto'/>

     <div className="hidden lg:flex items-center space-x-16">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">
        <button className='bg-primary text-white px-6 py-2 rounded-full'>
        Contact us
      </button>
      </a>
     </div>

      {/* MObile menu goes in here */}
      <div
          className={`flex lg:hidden z-50 icon-menu ${isOpenMenu && "open"}`}
          onClick={handleClick}
        >
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
      </div>

      <div
          className={`absolute top-0 right-0 bg-primary rounded-bl-[200px] flex items-center justify-end duration-300 overflow-hidden ${
            isOpenMenu ? "w-[250px] h-[400px] lg:w-[350px]" : "w-0 h-0"
          }`}
        >
          <div className="flex flex-col text-white text-lg mr-[20px] md:mr-[40px] lg:mr-[80px]">
            {NavLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className={index === NavLinks.length - 1 ? "" : "mb-4"}
                onClick={handleClick}
              >
                {link.name}
              </a>
            ))}
             <a href="#contact">
              <button className='bg-white text-primary px-6 py-2 rounded-full mt-4'>
              Contact us
            </button>
             </a>
          </div>
        </div>
   </nav>
  );
}