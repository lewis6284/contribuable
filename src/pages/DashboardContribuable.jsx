import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardContribuable = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/declaration")}
          className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-6 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
        >
          🧾 Déclaration fiscale
        </button>

        <button
          onClick={() => navigate("/paiement")}
          className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-6 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
        >
          💳 Paiement
        </button>

        <button
          onClick={() => navigate("/mes-documents")}
          className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-6 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
        >
          📄 Mes documents
        </button>

        <button
          onClick={() => navigate("/profil")}
          className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-6 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
        >
          👤 Mon profil
        </button>
      </div>
    </div>
  );
};

export default DashboardContribuable;
