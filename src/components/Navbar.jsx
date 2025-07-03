import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faEnvelope,
  faPhone,
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (key) => {
    setOpenSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="font-sans position f">
      {/* Bande verte du haut améliorée */}
      <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white flex justify-between items-center px-2 py-2 flex-wrap gap-2">
        <span className="font-semibold">Bienvenue à la Mairie de Bujumbura</span>
        <div className="flex items-center gap-2 sm:gap-4 text-white text-xs ml-auto animate-fade-in-right">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-400 transition-colors">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <span className="flex items-center gap-1 ml-2">
            <FontAwesomeIcon icon={faPhone} />
            <span className="hidden md:inline">+257 22 23 4527</span>
          </span>
          <span className="flex items-center gap-1 ml-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="hidden md:inline">mairiebujumbura@gmail.com</span>
          </span>
        </div>
      </div>

      {/* Logo + Nom + Menu */}
      <div className="bg-white border-b border-gray-300 flex justify-between items-center px-4 py-2 flex-wrap">
        <div className="flex items-center gap-4">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">La Mairie de Bujumbura</h2>
            <p className="text-red-600 text-sm">elle est à votre service</p>
          </div>
        </div>

        {/* Desktop menu */}
        <nav className="flex gap-4 sm:gap-6 text-black font-medium px-1 py-2 hidden md:flex items-center">
          <Link to="/" className="hover:text-green-700 px-1 py-2 cursor-pointer">Accueil</Link>

          <div className="group relative">
            <button className="hover:text-green-700 px-1 py-2 cursor-pointer flex items-center gap-1">
              Nos Services <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </button>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white border rounded shadow p-2 z-10">
              <Link to="/service1" className="block px-4 py-2 hover:bg-gray-100">Service 1</Link>
              <Link to="/service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</Link>
            </div>
          </div>

          <div className="group relative">
      
            <div className="absolute hidden group-hover:block top-full left-0 bg-white border rounded shadow p-2 z-10">
              
             
            </div>
          </div>
          <Link to="/declaration" className="block px-4 py-2 hover:bg-gray-100">Déclaration d'Activite</Link>
          <Link to="/culture" className="hover:text-green-700 px-1 py-2 cursor-pointer">Culture et loisir</Link>
          <Link to="/evenements" className="hover:text-green-700 px-1 py-2 cursor-pointer">Evénéments</Link>
          <Link to="/etat-civil" className="hover:text-green-700 px-1 py-2 cursor-pointer">État Civil</Link>
          <Link to="/contact" className="hover:text-green-700 px-1 py-2 cursor-pointer">Contact Nous</Link>
        </nav>

        {/* Menu hamburger mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-2xl text-green-700" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <Link to="/" className="block py-2 border-b">Accueil</Link>

          <div>
            <button
              className="w-full flex justify-between items-center py-2 border-b"
              onClick={() => toggleSubMenu("services")}
            >
              Nos Services
              <FontAwesomeIcon icon={openSubMenus["services"] ? faChevronUp : faChevronDown} />
            </button>
            {openSubMenus["services"] && (
              <div className="ml-4">
              <Link to="/etat-civil" className="block py-2 border-b">État Civil</Link>
              </div>
            )}
          </div>
          
          <Link to="/contribuable" className="block py-2 border-b">Declaration d'activite</Link>

          <Link to="/culture" className="block py-2 border-b">Culture et loisir</Link>
          <Link to="/evenements" className="block py-2 border-b">Evénéments</Link>
          <Link to="/contact" className="block py-2 border-b">Contact Nous</Link>
        </div>
      )}

      {/* Bande rouge défilante */}
      <div className="overflow-hidden bg-red-600 py-2 px-4">
        <div className="whitespace-nowrap text-white text-sm animate-marquee-alternate">
          La déclaration de votre activité commence maintenant. Nous vous invitons à faire la déclaration de 2025.
        </div>
      </div>
    </div>
  );
};

export default Navbar;