import { useState, useEffect, useRef } from "react";
import { User, IdCard, Calendar } from "lucide-react";
import PopReusable from "./PopReuseble";
import { useGlobalContext } from "../GlobalContext";
import { locationData } from "../../public/assets/data";
import { communesBujumbura } from "../../public/assets/communes";

import InputField from "./FormRemplir";
import InputFile from "./InputFile";
import AdresseNaissance from "./AdresseNaissance";
import AdresseActuelle from "./AdresseActuelle";
import FormMorale from "./FormMoral";
import FormPhysique from "./FormPhysique";

const ContribPhysi = () => {
  const [formData, setFormData] = useState({
    type_contribuable: "",
    denomination: "",
    caractere: "",
    rc: "",
    nif: "",
    nom: "",
    prenom: "",
    pieceIdentite: "",
    numeroIdentite: "",
    sexe: "",
    dateNaissance: "",
    lieuNaissance: "",
    provinceNaissance: "",
    communeNaissance: "",
    zoneNaissance: "",
    nom_pere: "",
    nom_mere: "",
    telephone: "",
    email: "",
    provinceActuelle: "",
    communeActuelle: "",
    zoneActuelle: "",
    quartierActuelle: "",
    avenueActuelle: "",
    maisonActuelle: "",
    cni: "",
    photo: "",
    note_impot: "",
    bordereau: "",
    rc_copie: "",
    status: "",
    nif_copie: "",
    decret: "",
    agrement: ""
  });
 const envoyer = async (formData, setIsPopReuseOpen, setPopupMsg) => {
  const data = new FormData();
  // data.append("contribuable", contribuable.id); // <-- SUPPRIMÉ
 console.log("FormData:", formData);
  // Ajoute tous les champs du formulaire dans FormData
  Object.entries(formData).forEach(([key, value]) => {
    if (value) data.append(key, value);
  });

  try {
    const response = await fetch("http://127.0.0.1:8000/contribuables/api/contribuables-physiques/", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setPopupMsg("Enregistrement réussi !");
      setIsPopReuseOpen(true);
    } else {
      const err = await response.json();
      setPopupMsg("Erreur : " + JSON.stringify(err));
      setIsPopReuseOpen(true);
    }
  } catch (error) {
    setPopupMsg("Erreur réseau : " + error.message);
    setIsPopReuseOpen(true);
  }
};

// Ajoute cette fonction dans ton composant ContribPhysi.jsx

const envoyerMorale = async (formData, setIsPopReuseOpen, setPopupMsg) => {
  const data = new FormData();
  console.log("FormData:", formData);
  Object.entries(formData).forEach(([key, value]) => {
    if (value) data.append(key, value);
  });

  try {
    const response = await fetch("http://127.0.0.1:8000/contribuables/api/contribuables-morales/", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setPopupMsg("Enregistrement réussi !");
      setIsPopReuseOpen(true);
    } else {
      const err = await response.json();
      setPopupMsg("Erreur : " + JSON.stringify(err));
      setIsPopReuseOpen(true);
    }
  } catch (error) {
    setPopupMsg("Erreur réseau : " + error.message);
    setIsPopReuseOpen(true);
  }
};


  const { setPopupMsg } = useGlobalContext();

  const [communesNaissance, setCommunesNaissance] = useState([]);
  const [zonesNaissance, setZonesNaissance] = useState([]);
  const [zonesActuelle, setZonesActuelle] = useState([]);
  const [quartiersActuelle, setQuartiersActuelle] = useState([]);
  const [avenuesActuelle, setAvenuesActuelle] = useState([]);
  const [isPopReuseOpen, setIsPopReuseOpen] = useState(false);
  const onPopReuseClose = () => setIsPopReuseOpen(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files && files[0] ? files[0] : ""
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isFilled = (value) => value && value.trim() !== "";

  // Dynamique pour l'adresse de naissance
  useEffect(() => {
    if (formData.provinceNaissance) {
      const communes = Object.keys(locationData[formData.provinceNaissance]?.communes || {});
      setCommunesNaissance(communes);
      setFormData((prev) => ({
        ...prev,
        communeNaissance: "",
        zoneNaissance: ""
      }));
      setZonesNaissance([]);
    }
  }, [formData.provinceNaissance]);

  useEffect(() => {
    if (formData.provinceNaissance && formData.communeNaissance) {
      const zones = locationData[formData.provinceNaissance]?.communes[formData.communeNaissance] || [];
      setZonesNaissance(zones);
      setFormData((prev) => ({
        ...prev,
        zoneNaissance: ""
      }));
    }
  }, [formData.communeNaissance, formData.provinceNaissance]);

  // Dynamique pour l'adresse actuelle (Bujumbura)
  useEffect(() => {
    if (formData.communeActuelle) {
      const zones = Object.keys(communesBujumbura[formData.communeActuelle]?.zones || {});
      setZonesActuelle(zones);
      setFormData((prev) => ({
        ...prev,
        zoneActuelle: "",
        quartierActuelle: "",
        avenueActuelle: "",
        maisonActuelle: ""
      }));
      setQuartiersActuelle([]);
      setAvenuesActuelle([]);
    }
  }, [formData.communeActuelle]);

  useEffect(() => {
    if (formData.communeActuelle && formData.zoneActuelle) {
      const quartiers = Object.keys(
        communesBujumbura[formData.communeActuelle]?.zones[formData.zoneActuelle]?.quartiers || {}
      );
      setQuartiersActuelle(quartiers);
      setFormData((prev) => ({
        ...prev,
        quartierActuelle: "",
        avenueActuelle: "",
        maisonActuelle: ""
      }));
      setAvenuesActuelle([]);
    }
  }, [formData.zoneActuelle, formData.communeActuelle]);

  useEffect(() => {
    if (formData.communeActuelle && formData.zoneActuelle && formData.quartierActuelle) {
      const avenues =
        communesBujumbura[formData.communeActuelle]?.zones[formData.zoneActuelle]?.quartiers[
          formData.quartierActuelle
        ] || [];
      setAvenuesActuelle(avenues);
      setFormData((prev) => ({
        ...prev,
        avenueActuelle: "",
        maisonActuelle: ""
      }));
    }
  }, [formData.quartierActuelle, formData.zoneActuelle, formData.communeActuelle]);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollTop = formRef.current.scrollHeight;
    }
  }, [formData]);

  const isMorale = formData.type_contribuable === "morale";
  const isPhysique = formData.type_contribuable === "physique";

  return (
    <div
      ref={formRef}
      className="max-w-lg pb-5 mx-auto mt-8 bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-2xl overflow-y-auto h-[90vh] scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-200"
    >
      <PopReusable
        isPopReuseOpen={isPopReuseOpen}
        onPopReuseClose={onPopReuseClose}
        title="Confirmation"
        children={<Message />}
        showPopReuseClose={true}
        width="w-[400px]"
        className="text-green-00 text-center"
      />
      <h2 className="text-2xl font-extrabold text-center text-green-700 mb-6">
        Formulaire d'inscription du nouveau Contribuable
      </h2>

      {/* Type de contribuable */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Type de contribuable</label>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type_contribuable"
              value="physique"
              checked={formData.type_contribuable === "physique"}
              onChange={handleChange}
            /> Personne Physique
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type_contribuable"
              value="morale"
              checked={formData.type_contribuable === "morale"}
              onChange={handleChange}
            /> Personne Morale
          </label>
        </div>
      </div>

      {/* Personne Morale */}
      {isMorale && (
        <FormMorale formData={formData} handleChange={handleChange} />
      )}

      {/* Personne Physique */}
      {isPhysique && (
        <FormPhysique
          formData={formData}
          handleChange={handleChange}
          isFilled={isFilled}
          communesNaissance={communesNaissance}
          zonesNaissance={zonesNaissance}
          locationData={locationData}
        />
      )}

      {/* Adresse actuelle */}
      {isFilled(formData.email || formData.nif) && (
        <AdresseActuelle
          communesBujumbura={communesBujumbura}
          zonesActuelle={zonesActuelle}
          quartiersActuelle={quartiersActuelle}
          avenuesActuelle={avenuesActuelle}
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {/* Documents à fournir pour personne physique */}
      {(isPhysique && formData.maisonActuelle) && (
        <>
          <InputFile label="CNI (scan ou photo)" name="cni" onChange={handleChange} />
          <InputFile label="Photo d'identité récente" name="photo" onChange={handleChange} />
          <InputFile label="Note d'impôt" name="note_impot" onChange={handleChange} />
          <InputFile label="Bordereau de paiement" name="bordereau" onChange={handleChange} />
        </>
      )}

      {/* Bouton d’envoi */}
    {(formData.bordereau) && (
  <button
    type="button"
    onClick={() =>
      formData.type_contribuable === "morale"
        ? envoyerMorale(formData, setIsPopReuseOpen, setPopupMsg)
        : envoyer(formData, setIsPopReuseOpen, setPopupMsg)
    }
    className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-6 py-3 rounded-xl w-full transition duration-300 flex items-center justify-center gap-2 mt-4"
  >
    Envoyer
  </button>
)}
    </div>
  );
};

export default ContribPhysi;

// Message de confirmation
const Message = () => {
  const { popupMsg } = useGlobalContext();
  return <p className="text-center">{popupMsg}</p>;
};