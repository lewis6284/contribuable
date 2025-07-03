import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaCheckCircle,
  FaUsers,
  FaFilePdf,
  FaDownload,
  FaHistory,
  FaEnvelope,
} from "react-icons/fa";

const DashboardAgent = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Documents fournis", icon: <FaFileAlt />, path: "/documents" },
    { label: "Valider les déclarations", icon: <FaCheckCircle />, path: "/paiements" },
    { label: "Voir les contribuables", icon: <FaUsers />, path: "/contribuables" },
    { label: "Générer une facture PDF", icon: <FaFilePdf />, path: "/generation-pdf" },
    { label: "Envoyer un message", icon: <FaEnvelope />, path: "/messages" },
    { label: "Télécharger l'expertise", icon: <FaDownload />, path: "/expertise" },
    { label: "Voir l'historique", icon: <FaHistory />, path: "/historique" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Agent de Mairie</h2>
          <nav className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-700 transition duration-200 text-left"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="text-sm text-center text-gray-200 mt-10">
          &copy; {new Date().getFullYear()} Mairie de Bujumbura
        </div>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-green-700 mb-8">
          Tableau de bord – Agent de Mairie
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-4 p-5 bg-white shadow hover:shadow-lg rounded-2xl border border-gray-200 hover:bg-gray-50 transition"
            >
              <span className="text-2xl text-green-600">{item.icon}</span>
              <span className="text-lg font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardAgent;
