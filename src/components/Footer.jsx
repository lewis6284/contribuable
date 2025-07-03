import React from "react";

const Footer = () => (
    <footer className="bg-gray-900 text-white py-8 px-4 text-center font-sans">
        <div className="max-w-md mx-auto md:max-w-4xl md:flex md:justify-between md:items-center">
            <div>
                <h2 className="text-lg mb-2 tracking-wide font-semibold">
                  Contribuables App
                </h2>
                <p className="text-sm opacity-80 mb-2 text-red-700">
                    La mairie de Bujumbura est à votre service
                </p>
            </div>
            <span className="block text-xs opacity-70 md:text-right md:mt-0 mt-2">
                Powered by ❤️  Lewis Irakoze and Eric Nikuze
                 <p>&copy; 2025 Mairie de Bujumbura. Tous droits réservés.</p>
            </span>
                {/* Pied de page */}
   
   
        </div>
    </footer>
);

export default Footer;
