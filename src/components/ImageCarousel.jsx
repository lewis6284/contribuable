import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/assets/1.jpg",
    title: "Bienvenue à la Mairie de Bujumbura",
    subtitle: "Découvrez tous nos services en ligne.",
    button: "En savoir plus",
  },
  {
    image: "/assets/2.jpg",
    title: "Déclarez votre activité aujourd'hui",
    subtitle: "Nous vous accompagnons dans vos démarches.",
    button: "Démarrer la déclaration",
  },
];

const ImageCarousel = () => {
  const { showPopup } = useGlobalContext();

  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={1000}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full">
            {/* Image responsive */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[120px] sm:h-[200px] md:h-[300px] object-cover"
            />

            {/* Overlay texte aligné à gauche avec animation continue */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-4 sm:px-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                animate={{ 
                  y: [0, -10, 0, 10, 0], 
                  transition: { 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut" 
                  } 
                }}
                className="text-left text-white max-w-md"
              >
                <h2 className="text-xl sm:text-3xl font-bold mb-3">{slide.title}</h2>
                <p className="text-sm sm:text-lg mb-5">{slide.subtitle}</p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md shadow-md transition duration-300">
                  {slide.button}
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
