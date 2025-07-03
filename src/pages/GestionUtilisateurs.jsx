import React, { useEffect, useState } from "react";

const GestionUtilisateurs = () => {
  const [physiques, setPhysiques] = useState([]);
  const [morales, setMorales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContribuables = async () => {
      setLoading(true);
      try {
        const resPhysiques = await fetch("http://127.0.0.1:8000/api/contribuables-physiques/");
        const dataPhysiques = await resPhysiques.json();
        const resMorales = await fetch("http://127.0.0.1:8000/api/contribuables-morales/");
        const dataMorales = await resMorales.json();
        setPhysiques(dataPhysiques);
        setMorales(dataMorales);
      } catch (err) {
        alert("Erreur lors du chargement des contribuables");
      }
      setLoading(false);
    };
    fetchContribuables();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-green-700">Liste des Contribuables</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          <h3 className="text-lg font-semibold mt-4 mb-2">Personnes Physiques</h3>
          <ul className="mb-6">
            {physiques.map((c) => (
              <li key={c.id} className="border-b py-2">{c.nom} {c.prenom} ({c.nif || c.email})</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">Personnes Morales</h3>
          <ul>
            {morales.map((c) => (
              <li key={c.id} className="border-b py-2">{c.denomination} ({c.nif || c.email})</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GestionUtilisateurs;