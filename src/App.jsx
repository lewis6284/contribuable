import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import Popup from "./components/Popup";
import DeclarationForm from "./components/DeclarationForm";
import Declaration from "./pages/Declaration";
import Accueil from "./pages/Accueil"; // Page d'accueil personnalisée
import Contribuable from "./pages/Contribuable";
import DashboardContribuable from "./pages/DashboardContribuable"; 
import DashboardAdmin from "./pages/DashboardAdmin"; // Page de dashboard pour les administrateurs
import GestionUtilisateurs from "./pages/GestionUtilisateurs"; // Page de gestion des utilisateurs
import validationcontribuables from "./pages/ValidationContribuables"; // Page de validation des contribuables
import DashboardAgent from "./pages/DashboardAgent"; // Page de dashboard pour les agents 
const App = () => {
  const [popupOpen, setPopupOpen] = useState(true);

  return (
    <>
      <Navbar />
      {popupOpen && <Popup onClose={() => setPopupOpen(true)} />}

      {/* Contenu principal */}
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/" element={
              <div style={{ zIndex: 20, position: "relative" }}>
                <Accueil />
              </div>
            }
          />
          <Route path="/validation-contribuables" element={<validationcontribuables />} />
          <Route path="/gestion-utilisateurs" element={<GestionUtilisateurs />} />
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/declaration" element={<Declaration />} />
          <Route path="/contribuable" element={<Contribuable />} />
          <Route path="/dashboard" element={<DashboardContribuable />} />
          <Route path="/dashboard-agent" element={<DashboardAgent />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
