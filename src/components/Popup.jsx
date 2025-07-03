import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';

const Popup = () => {
  const { showPopup, setShowPopup } = useGlobalContext();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleStart = () => {
    setVisible(false);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/declaration");
    }, 400);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setShowPopup(true);
      setTimeout(() => setVisible(true), 100);
    } else {
      setShowPopup(false);
      setVisible(false);
    }
  }, [location.pathname]);

  if (!showPopup || location.pathname !== "/") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-6 sm:p-14 w-full max-w-md sm:max-w-2xl mx-3 mt-6"
          initial={{ y: 30, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {/* Bouton de fermeture décoré */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-3 sm:top-6 sm:right-6 text-gray-700 text-3xl sm:text-5xl font-bold hover:text-red-600 transition-all duration-300 ease-in-out rounded-full hover:bg-red-100 hover:shadow-md border border-transparent hover:border-red-300 px-3"
            aria-label="Fermer le message de bienvenue"
          >
            ×
          </button>

          {/* Logo animé et cercles */}
          <div className="relative flex justify-center mb-6 sm:mb-8">
  <div className="relative w-44 h-44 sm:w-72 sm:h-72 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-green-600">
    <style>
      {`body { overflow: hidden !important; }`}
    </style>

    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="absolute w-[96%] h-[96%] sm:w-[98%] sm:h-[98%] rounded-full border-2 border-red-500 animate-ping" />
      <div className="absolute w-[91%] h-[91%] sm:w-[93%] sm:h-[93%] rounded-full border-2 border-green-700 animate-ping delay-200" />
    </div>

    <img
      src="/logo.jpg"
      alt="Logo Mairie de Bujumbura"
      className="w-36 h-36 sm:w-56 sm:h-56 rounded-full z-10 object-cover"
    />
  </div>
</div>

          
          {/* Texte de bienvenue */}
          <div className="text-center px-2 sm:px-4">
            <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
              Bienvenue sur la Plateforme de la Mairie de Bujumbura
            </p>
      
          </div>

          {/* Bouton animé amélioré */}
          <motion.button
            onClick={handleStart}
            className="mt-6 bg-gradient-to-r from-green-600 via-green-500 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 sm:py-4 w-full rounded-2xl shadow-lg hover:shadow-2xl text-xl sm:text-3xl transition-all flex items-center justify-center gap-3 relative overflow-hidden"
            whileHover={{ scale: 1.09, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.25)" }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 flex items-center">
              Commencer votre déclaration
              <motion.span
                className="ml-2 sm:ml-3 inline-block text-xl sm:text-2xl"
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                <FaArrowRight />
              </motion.span>
            </span>
            <span className="absolute left-0 top-0 w-full h-full bg-white/10 pointer-events-none rounded-2xl blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
