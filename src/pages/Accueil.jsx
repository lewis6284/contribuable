import React from "react";
import { useNavigate } from "react-router-dom";
// Importation des icônes utilisées pour représenter chaque service
import {
  FaRegFileAlt,      // Icône pour la déclaration d'activité
  FaUserPlus,        // Icône pour l'inscription des contribuables
  FaIdCard,          // Icône pour les actes d'état civil
  FaHome,            // Icône pour le certificat de résidence
  FaMoneyBillWave,   // Icône pour le paiement des taxes
  FaCalendarAlt      // Icône pour les réservations
} from 'react-icons/fa';
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer.jsx"

const Accueil = () => {
  const navigate = useNavigate();
  // Assure que la page passe sous la barre de navigation (z-0)
  // Ajoutez une classe z-0 sur le conteneur principal si votre nav a z-10 ou plus
  const services = [
    {
      icon: <FaRegFileAlt className="mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-700 mb-2 sm:mb-4 md:mb-6 drop-shadow-xl" />,
      title: <span className="animate-gradient-move">Déclaration d'Activité</span>,
      desc: "Commencez avec le portail officiel de déclaration d’activité de la mairie de Bujumbura.",
      btn: "Déclarer une activité",
      link: "/declaration"
    },
    {
      icon: <FaUserPlus className="mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-700 mb-2 sm:mb-4 md:mb-6 drop-shadow-xl" />,
      title: <span className="animate-gradient-move">Inscription des nouveaux Contribuables</span>,
      desc: "Inscrivez-vous comme contribuable.",
      btn: "S'inscrire",
      link: "/contribuable"
    },
    {
      icon: <FaIdCard className="mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-700 mb-2 sm:mb-4 md:mb-6 drop-shadow-xl" />,
      title: <span className="animate-gradient-move">Actes d’État Civil</span>,
      desc: "Demandez vos actes de naissance, de mariage ou de décès en ligne.",
      btn: "Demander un acte",
      link: "/etat-civil"
    },
    {
      icon: <FaHome className="mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-700 mb-2 sm:mb-4 md:mb-6 drop-shadow-xl" />,
      title: <span className="animate-gradient-move">Certificat de Résidence</span>,
      desc: "Obtenez votre certificat de résidence sans vous déplacer.",
      btn: "Demander un certificat",
      link: "/certificat-residence"
    },
    {
      icon: <FaMoneyBillWave className="mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-700 mb-2 sm:mb-4 md:mb-6 drop-shadow-xl" />,
      title: <span className="animate-gradient-move">Paiement des Taxes</span>,
      desc: "Payez vos taxes locales en toute sécurité.",
      btn: "Payer mes taxes",
      link: "/paiement-taxes"
    },
    {
      icon: <FaCalendarAlt className="mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-700 mb-2 sm:mb-4 md:mb-6 drop-shadow-xl" />,
      title: <span className="animate-gradient-move">Réservations</span>,
      desc: "Réservez des salles municipales pour vos événements spéciaux.",
      btn: "Réserver une salle",
      link: "/reservations"
    }
  ];

  const historique = {
    titre: "La Mairie de Bujumbura",
    texte: `
L’Hôtel de ville de Bujumbura symbolise le progrès, la démocratie et l'engagement communautaire...`
  };

  const mission = {
    titre: "Mission",
    texte: `La mission principale de la Mairie de Bujumbura est d'assurer une gestion efficace et transparente...`
  };

  const objectifs = {
    titre: "Objectifs",
    items: [
      "Renforcer la gouvernance locale et la participation citoyenne.",
      "Développer les infrastructures urbaines et les services publics.",
      "Promouvoir un environnement sain et durable.",
      "Favoriser l'inclusion sociale et le bien-être des habitants.",
      "Assurer la sécurité et l'ordre public dans la ville."
    ]
  };

  const partenaires = [
    { img: "21.jpg", alt: "FinBank" },
    { img: "22.jpg", alt: "iHelá" },
    { img: "23.jpg", alt: "Bancobu" },
    { img: "24.jpg", alt: "Interbank" }
  ];

  // Animation on scroll: fade-in sections when they enter viewport
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-on-scroll');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add('opacity-100', 'translate-y-0');
          section.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">
      <ImageCarousel />
      {/* Responsive Logo Section */}
      <div className="relative flex justify-center -mt-23 sm:-mt-32 z-10 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="relative w-32 h-32 xs:w-44 xs:h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-green-600 overflow-visible">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-5/6 h-5/6 rounded-full border-2 border-red-600 animate-pulse-slow"></div>
            <div className="absolute w-5/6 h-5/6 rounded-full border-2 border-green-700 animate-pulse-slow"></div>
          </div>
          <img 
            src="/logo.jpg" 
            alt="Logo" 
            className="w-24 h-24 xs:w-32 xs:h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full z-80 animate-logo-pop object-cover" 
          />
        </div>
      </div>

      {/* Section Actualités élégante et animée */}
      <section className="py-12 px-6 md:px-20 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-green-700 animate-gradient-move drop-shadow-lg">
          Actualités de la Mairie de Bujumbura
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Actualité 1 */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col group hover:scale-105 transition-transform duration-500 border-t-4 border-green-600 relative overflow-hidden">
            <img
              src="public/assets/actu1.jpg"
              alt="Actualité 1"
              className="rounded-xl mb-4 h-44 object-cover w-full group-hover:brightness-90 transition duration-300"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-700 mb-2 group-hover:underline transition">
                Lancement du portail en ligne
              </h3>
              <p className="text-gray-700 text-sm">
                La mairie de Bujumbura lance officiellement son portail numérique pour faciliter l’accès aux services municipaux.
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-4 block">Publié le 10 juin 2024</span>
            <span className="absolute top-0 right-0 bg-green-600 text-white text-xs px-3 py-1 rounded-bl-2xl font-semibold shadow-lg animate-bounce-slow">
              Mairie
            </span>
          </div>
          {/* Actualité 2 */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col group hover:scale-105 transition-transform duration-500 border-t-4 border-green-600 relative overflow-hidden">
            <img
              src="public/assets/actu2.jpg"
              alt="Actualité 2"
              className="rounded-xl mb-4 h-44 object-cover w-full group-hover:brightness-90 transition duration-300"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-700 mb-2 group-hover:underline transition">
                Campagne de propreté urbaine
              </h3>
              <p className="text-gray-700 text-sm">
                Une grande campagne de nettoyage est organisée dans tous les quartiers de la ville ce mois-ci.
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-4 block">Publié le 5 juin 2024</span>
            <span className="absolute top-0 right-0 bg-green-600 text-white text-xs px-3 py-1 rounded-bl-2xl font-semibold shadow-lg animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
              Mairie
            </span>
          </div>
          {/* Actualité 3 */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col group hover:scale-105 transition-transform duration-500 border-t-4 border-green-600 relative overflow-hidden">
            <img
              src="public/assets/actu3.jpg"
              alt="Actualité 3"
              className="rounded-xl mb-4 h-44 object-cover w-full group-hover:brightness-90 transition duration-300"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-700 mb-2 group-hover:underline transition">
                Nouveaux horaires pour les services
              </h3>
              <p className="text-gray-700 text-sm">
                Les horaires d’ouverture des guichets municipaux sont désormais étendus pour mieux vous servir.
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-4 block">Publié le 1 juin 2024</span>
            <span className="absolute top-0 right-0 bg-green-600 text-white text-xs px-3 py-1 rounded-bl-2xl font-semibold shadow-lg animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
              Info
            </span>
          </div>
        </div>
      </section>

      {/* Historique, Mission et Objectifs */}
      <section className="py-14 px-6 md:px-20 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <img src="public/assets/Maire.jpg" alt="Maire" className="rounded-2xl shadow-xl border-4 border-green-700 w-full h-auto max-h-96 object-cover" />
          </div>
          <div className="w-full md:w-2/3 bg-white p-8 rounded-xl shadow-xl border-l-8 border-green-600 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-red-700 mb-4 animate-gradient-move text-center">{historique.titre}</h2>
            <p className="text-gray-700 leading-relaxed">{historique.texte}</p>
          </div>
        </div>

        {/* Mission et Objectifs */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-green-50 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-3">{mission.titre}</h3>
            <p>{mission.texte}</p>
          </div>
          <div className="bg-green-50 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-3">{objectifs.titre}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {objectifs.items.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 px-2 sm:px-4 md:px-10 lg:px-20 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-red-800 drop-shadow-lg">
            Nos Services de Mairie Disponibles En Ligne
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 justify-items-center">
  {services.map((service) => (
    <div
      key={service.title}
      className="bg-white/90 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl text-center hover:scale-105 transition-transform duration-300 border-t-4 md:border-t-8 border-red-700 flex flex-col justify-between items-center w-full max-w-xs"
    >
      <div>
        {service.icon}
        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-3 text-gray-800">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
      </div>
      <button
        onClick={() => navigate(service.link)}
        className="mt-4 md:mt-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold w-full py-2 rounded-lg shadow-md transition hover:scale-[1.02] text-sm md:text-base"
      >
        {service.btn}
      </button>
    </div>
  ))}
</div>


          {/* Partenaires */}
          <div className="mt-12 md:mt-20 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 md:mb-12">
              Nos Partenaires Financiers
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {partenaires.map((p, idx) => (
                <div
                  key={p.img}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-lg animate-bounce-slow hover:scale-110 transition-transform duration-500 bg-white"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <img
                    src={`/public/assets/${p.img}`}
                    alt={p.alt}
                    className="object-contain w-full h-4/5"
                  />
                  <span className="mt-2 text-gray-700 font-semibold text-base md:text-lg text-center">
                    {p.alt}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 md:mt-10 text-center">
              <p className="text-gray-600 text-base md:text-lg">
                Grâce à nos partenaires financiers, nous pouvons offrir des services de qualité à la communauté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }

          @keyframes spin-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          .animate-spin-reverse {
            animation: spin-reverse 12s linear infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.12); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3.5s ease-in-out infinite;
          }

          @keyframes logo-pop {
            0% { transform: scale(0.8); opacity: 0; }
            80% { transform: scale(1.08); }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-logo-pop {
            animation: logo-pop 1.2s cubic-bezier(.68,-0.55,.27,1.55) both;
          }

          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 6s cubic-bezier(.68,-0.55,.27,1.55) both;
          }

          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-gradient-move {
            background: linear-gradient(90deg, #22c55e, rgb(41, 5, 139),rgb(238, 10, 48), #22c55e);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient-move 0.5s ease-in-out infinite alternate;
          }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 1.5s infinite;
          }
        `}
      </style>
      
      <div>
         <Footer/>
      </div>
    </div>
    
  );
};

export default Accueil;
