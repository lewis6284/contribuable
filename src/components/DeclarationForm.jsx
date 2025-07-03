import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";

const DeclarationForm = () => {
  const navigate = useNavigate();
  const {
    nic, setNic,
    password, setPassword,
  } = useGlobalContext();

  const [loading, setLoading] = useState(false);

  const showPassword = /^\d{8}$/.test(nic);
  const isLoginValid = /^\d{8}$/.test(nic) && password.length >= 8;

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("✅ Connexion réussie !");
      navigate("/Contribuable");
    }, 1000);
  };

  return (
    <div className="flex justify-center bg-white-100 pt-0 px-2 max-h-screen mt-0">
      <form
        className="max-w-xl bg-white text-gray-800 px-6 py-6 rounded-sm shadow-md border border-gray-300"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
          Connectez-vous
        </h2>

        {/* NIC */}
        <div className="mb-5">
          <label className="block mb-1 font-medium">Numéro d'identification du contribuble (NIC)</label>
          <input
            type="text"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            placeholder="Ex: 12345678"
            className="w-full px-4 py-2 rounded-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Password */}
        {showPassword && (
          <div className="mb-5">
            <label className="block mb-1 font-medium">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 8 caractères"
              className="w-full px-4 py-2 rounded-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}

        {/* Login Button */}
        <button
          type="button"
          onClick={handleLogin}
          disabled={!isLoginValid || loading}
          className={`w-full py-3 rounded-sm font-semibold text-white transition duration-300 ${
            isLoginValid && !loading
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {loading ? "Patientez..." : "Connexion"}
        </button>

        {/* Lien inscription */}
        <div className="mt-5 text-center">
          <p
            onClick={() => navigate("/mot-de-pass-oublie")}
            className="text-end text-sm text-green-600 hover:underline cursor-pointer"
          >
            Mot de passe oublié ?
          </p>
          <span
            onClick={() => navigate("/Contribuable")}
            className="text-green-600 hover:underline font-medium cursor-pointer"
          >
            Êtes-vous un nouveau contribuable ? Inscrivez-vous ici
          </span>
        </div>
      </form>
    </div>
  );
};

export default DeclarationForm;
