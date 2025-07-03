import { useState, useEffect, useRef } from "react";
import { CheckCircle, User, IdCard, Calendar, MapPin } from "lucide-react";
import PopReusable from "./PopReuseble";
import { useGlobalContext } from "../GlobalContext";
import { locationData } from "../../public/assets/data";
import { communesBujumbura } from "../../public/assets/communes";
import { envoyer } from "../envoyer"

const ContribPhysi = () => {
  // Formulaire principal
  const [formData, setFormData] = useState({
    type_contribuable: "", // "physique" ou "morale"
    // Morale
    denomination: "",
    caractere: "", // "prive", "public", "asbl"
    rc: "",
    nif: "",
    // Physique
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
    // Adresse actuelle
    provinceActuelle: "",
    communeActuelle: "",
    zoneActuelle: "",
    quartierActuelle: "",
    avenueActuelle: "",
    maisonActuelle: "",
    // Documents physique
    cni: "",
    photo: "",
    note_impot: "",
    bordereau: "",
    // Documents morale
    rc_copie: "",
    status: "",
    nif_copie: "",
    decret: "",
    agrement: ""
  });

  const { setPopupMsg } = useGlobalContext()

  // Pour la sélection dynamique de l'adresse de naissance
  const [communesNaissance, setCommunesNaissance] = useState([]);
  const [zonesNaissance, setZonesNaissance] = useState([]);

  // Pour la sélection dynamique de l'adresse actuelle (Bujumbura)
  const [zonesActuelle, setZonesActuelle] = useState([]);
  const [quartiersActuelle, setQuartiersActuelle] = useState([]);
  const [avenuesActuelle, setAvenuesActuelle] = useState([]);

  // Pop-up confirmation
  const [isPopReuseOpen, setIsPopReuseOpen] = useState(false);
  const onPopReuseClose = () => setIsPopReuseOpen(false);

  const formRef = useRef(null);

  // Gestion des changements de champs
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

  // Détection du type de contribuable
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

      {/* Sélection du type de contribuable */}
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

      {/* Champs pour Personne Morale */}
      {isMorale && (
        <>
          <div className="mb-4">
            <label className="block font-medium mb-1">Dénomination</label>
            <input
              name="denomination"
              value={formData.denomination}
              onChange={handleChange}
              className="w-full border border-green-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">N° de Registre de Commerce</label>
            <input
              name="rc"
              value={formData.rc}
              onChange={handleChange}
              className="w-full border border-green-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">NIF</label>
            <input
              name="nif"
              value={formData.nif}
              onChange={handleChange}
              className="w-full border border-green-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Caractère</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="caractere"
                  value="prive"
                  checked={formData.caractere === "prive"}
                  onChange={handleChange}
                /> Commercial Privé
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="caractere"
                  value="public"
                  checked={formData.caractere === "public"}
                  onChange={handleChange}
                /> Commercial Public
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="caractere"
                  value="asbl"
                  checked={formData.caractere === "asbl"}
                  onChange={handleChange}
                /> Sans but lucratif (ASBL)
              </label>
            </div>
          </div>
        </>
      )}

      {/* Champs pour Personne Physique */}
      {isPhysique && (
        <>
          <div className="mb-4">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <User className="w-5 h-5 text-green-700" /> Nom
            </label>
            <input
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {isFilled(formData.nom) && (
            <div className="mb-4 animate-fade-in">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <User className="w-5 h-5 text-green-700" /> Prénom
              </label>
              <input
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}
          {/* ... (reprends ici la logique du formulaire physique comme avant) ... */}
          {/* Pièce d'identité */}
      {isFilled(formData.prenom) && (
        <div className="mb-4 animate-fade-in">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <IdCard className="w-5 h-5 text-green-700" /> Type de pièce
          </label>
          <select
            name="pieceIdentite"
            value={formData.pieceIdentite}
            onChange={handleChange}
            className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">-- Sélectionner --</option>
            <option value="CNI">CNI</option>
            <option value="Passeport">Passeport</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
      )}

      {/* Numéro de la pièce */}
      {isFilled(formData.pieceIdentite) && (
        <div className="mb-4 animate-fade-in">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <IdCard className="w-5 h-5 text-green-700" /> Numéro de la pièce
          </label>
          <input
            name="numeroIdentite"
            value={formData.numeroIdentite}
            onChange={handleChange}
            className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}

      {/* Sexe */}
      {isFilled(formData.numeroIdentite) && (
        <div className="mb-4 animate-fade-in">
          <label className="text-sm font-medium text-gray-700">Sexe</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sexe"
                value="M"
                checked={formData.sexe === "M"}
                onChange={handleChange}
              /> Masculin
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sexe"
                value="F"
                checked={formData.sexe === "F"}
                onChange={handleChange}
              /> Féminin
            </label>
          </div>
        </div>
      )}

      {/* Date de naissance */}
      {isFilled(formData.sexe) && (
        <div className="mb-4 animate-fade-in">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Calendar className="w-5 h-5 text-green-700" /> Date de naissance
          </label>
          <input
            type="date"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
            className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}

      {/* Lieu de naissance (Province, Commune, Zone) */}
      {isFilled(formData.dateNaissance) && (
        <>
          <div className="mb-6 animate-fade-in">
            <MapPin className="w-5 h-5 text-green-700" /> Lieu de naissance
          </div>
          {/* Province */}
          <div className="mb-5">
            <label className="block mb-1 font-medium">Province</label>
            <select
              name="provinceNaissance"
              value={formData.provinceNaissance}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Sélectionner une province --</option>
              {Object.keys(locationData).map((prov) => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </div>
          {/* Commune */}
          {communesNaissance.length > 0 && (
            <div className="mb-5 animate-fadeIn">
              <label className="block mb-1 font-medium">Commune</label>
              <select
                name="communeNaissance"
                value={formData.communeNaissance}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Sélectionner une commune --</option>
                {communesNaissance.map((comm) => (
                  <option key={comm} value={comm}>{comm}</option>
                ))}
              </select>
            </div>
          )}
          {/* Zone */}
          {zonesNaissance.length > 0 && (
            <div className="mb-5 animate-fadeIn">
              <label className="block mb-1 font-medium">Zone</label>
              <select
                name="zoneNaissance"
                value={formData.zoneNaissance}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Sélectionner une zone --</option>
                {zonesNaissance.map((zn) => (
                  <option key={zn} value={zn}>{zn}</option>
                ))}
              </select>
            </div>
          )}
        </>
      )}

      {/* Famille */}
      {isFilled(formData.zoneNaissance) && (
        <div className="mb-4 animate-fade-in">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <User className="w-5 h-5 text-green-700" /> Nom du père
          </label>
          <input
            name="nom_pere"
            value={formData.nom_pere}
            onChange={handleChange}
            className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}

      {isFilled(formData.nom_pere) && (
        <div className="mb-4 animate-fade-in">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <User className="w-5 h-5 text-green-700" /> Nom de la mère
          </label>
          <input
            name="nom_mere"
            value={formData.nom_mere}
            onChange={handleChange}
            className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}

      {/* Téléphone */}
      {isFilled(formData.nom_mere) && (
        <div className="mb-4 animate-fade-in">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <User className="w-5 h-5 text-green-700" /> Numéro de téléphone
          </label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}

      {/* Email */}
      {isFilled(formData.telephone) && (
        <div className="mb-4 animate-fade-in">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <User className="w-5 h-5 text-green-700" /> Entre votre email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}

        </>
      )}

      {/* Adresse de naissance, famille, téléphone, email, adresse actuelle */}
      {/* ... (reprends ici la logique dynamique déjà en place) ... */}
      
      {/* Adresse actuelle (Bujumbura) */}
      {isFilled(formData.email || formData.nif) && (
        <>
          <div className="mb-6 animate-fade-in">
            <MapPin className="w-5 h-5 text-green-700" /> Adresse actuelle (Bujumbura)
          </div>
          {/* Commune */}
          <div className="mb-4 animate-fade-in">
            <label className="block mb-1 font-medium">Commune</label>
            <select
              name="communeActuelle"
              value={formData.communeActuelle}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Sélectionner une commune --</option>
              {Object.keys(communesBujumbura).map((comm) => (
                <option key={comm} value={comm}>{comm}</option>
              ))}
            </select>
          </div>
          {/* Zone */}
          {zonesActuelle.length > 0 && (
            <div className="mb-4 animate-fade-in">
              <label className="block mb-1 font-medium">Zone</label>
              <select
                name="zoneActuelle"
                value={formData.zoneActuelle}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Sélectionner une zone --</option>
                {zonesActuelle.map((zn) => (
                  <option key={zn} value={zn}>{zn}</option>
                ))}
              </select>
            </div>
          )}
          {/* Quartier */}
          {quartiersActuelle.length > 0 && (
            <div className="mb-4 animate-fade-in">
              <label className="block mb-1 font-medium">Quartier</label>
              <select
                name="quartierActuelle"
                value={formData.quartierActuelle}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Sélectionner un quartier --</option>
                {quartiersActuelle.map((quartier) => (
                  <option key={quartier} value={quartier}>{quartier}</option>
                ))}
              </select>
            </div>
          )}
          {/* Avenue */}
          {avenuesActuelle.length > 0 && (
            <div className="mb-4 animate-fade-in">
              <label className="block mb-1 font-medium">Avenue</label>
              <select
                name="avenueActuelle"
                value={formData.avenueActuelle}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Sélectionner une avenue --</option>
                {avenuesActuelle.map((avenue) => (
                  <option key={avenue} value={avenue}>{avenue}</option>
                ))}
              </select>
            </div>
          )}
          {/* Numéro de maison */}
          {formData.avenueActuelle && (
            <div className="mb-4 animate-fade-in">
              <label className="block mb-1 font-medium">Numéro de maison</label>
              <input
                name="maisonActuelle"
                value={formData.maisonActuelle}
                onChange={handleChange}
                className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Entrez le numéro de maison"
              />
            </div>
          )}
        </>
      )}

      {/* Documents à fournir */}
      <hr className="my-6 border-green-200" />
      {( formData.caractere) &&<h3 className="font-bold text-green-700 mb-2">📎 Documents à fournir</h3>}
      {/* Personne physique */}
      {(isPhysique && formData.maisonActuelle) && (
        <>
          <InputFile label="CNI (scan ou photo)" name="cni" onChange={handleChange} />
          <InputFile label="Photo d'identité récente" name="photo" onChange={handleChange} />
          <InputFile label="Note d'impôt" name="note_impot" onChange={handleChange} />
          <InputFile label="Bordereau de paiement" name="bordereau" onChange={handleChange} />
        </>
      )}

      {/* Personne morale */}
      {(isMorale && formData.maisonActuelle) && (
        <>
          {formData.caractere === "prive" && (
            <>
              <InputFile label="Registre de commerce (photocopie)" name="rc_copie" onChange={handleChange} />
              <InputFile label="Statuts (photocopie)" name="status" onChange={handleChange} />
              <InputFile label="NIF (photocopie)" name="nif_copie" onChange={handleChange} />
              <InputFile label="Note d'impôt (photocopie)" name="note_impot" onChange={handleChange} />
              <InputFile label="Bordereau de paiement (photocopie)" name="bordereau" onChange={handleChange} />
            </>
          )}
          {formData.caractere === "public" && (
            <>
              <InputFile label="Décret (photocopie)" name="decret" onChange={handleChange} />
              <InputFile label="NIF (photocopie)" name="nif_copie" onChange={handleChange} />
              <InputFile label="Note d'impôt (photocopie)" name="note_impot" onChange={handleChange} />
              <InputFile label="Bordereau de paiement (photocopie)" name="bordereau" onChange={handleChange} />
            </>
          )}
          {formData.caractere === "asbl" && (
            <>
              <InputFile label="Agrément (photocopie)" name="agrement" onChange={handleChange} />
              <InputFile label="Note d'impôt (photocopie)" name="note_impot" onChange={handleChange} />
              <InputFile label="Bordereau de paiement (photocopie)" name="bordereau" onChange={handleChange} />
            </>
          )}
        </>
      )}

      {/* Bouton d’envoi final */}
      {(formData.bordereau) && (
        <button
          type="button"
          onClick={()=>envoyer(formData,setIsPopReuseOpen, setPopupMsg)
        }
          className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-6 py-3 rounded-xl w-full transition duration-300 flex items-center justify-center gap-2 mt-4"
        >
          <CheckCircle className="w-5 h-5" /> Envoyer
        </button>
      )}
    </div>
  );
};


//input file component !!!!
const  InputFile = ({ label, name, onChange }) =>{
  return (
    <div className="mb-4 animate-fade-in">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <CheckCircle className="w-5 h-5 text-green-700" /> {label}
      </label>
      <input
        type="file"
        name={name}
        accept="image/*,application/pdf"
        onChange={onChange}
        className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default ContribPhysi;

const Message = () => {
  const { popupMsg } = useGlobalContext()
  return(<p className="text-center">{popupMsg}</p>)
}
  