import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import logo from "../assets/images/logo-text.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand-black rounded-lg text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div>
              <img
                src={logo}
                alt="qadosh Logo"
                className="h-12 lg:h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md mt-4">
              Healthcare, Right Where You Are.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+2349160731000"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +234 916 073 1000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:qadoshmedical@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  qadoshmedical@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Mission */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Mission Statement */}
            <div className="text-center lg:text-left">
              <p className="text-gray-300 max-w-2xl">
                Bringing quality healthcare directly to you - delivering
                personalized medical services in the comfort of your home,
                office, and community.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Qadosh Medical Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
