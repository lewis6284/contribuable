import InputField from "./FormRemplir";
import { User, IdCard, Calendar } from "lucide-react";
import AdresseNaissance from "./AdresseNaissance";

const FormPhysique = ({
  formData,
  handleChange,
  isFilled,
  communesNaissance,
  zonesNaissance,
  locationData
}) => (
  <>
    <InputField label="Nom" name="nom" value={formData.nom} onChange={handleChange} icon={User} />
    {isFilled(formData.nom) && (
      <InputField label="Prénom" name="prenom" value={formData.prenom} onChange={handleChange} icon={User} />
    )}
    {isFilled(formData.prenom) && (
      <>
        <div className="mb-4">
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
        {isFilled(formData.pieceIdentite) && (
          <InputField label="Numéro de la pièce" name="numeroIdentite" value={formData.numeroIdentite} onChange={handleChange} icon={IdCard} />
        )}
      </>
    )}
    {isFilled(formData.numeroIdentite) && (
      <div className="mb-4">
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
    {isFilled(formData.sexe) && (
      <InputField label="Date de naissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} type="date" icon={Calendar} />
    )}
    {isFilled(formData.dateNaissance) && (
      <AdresseNaissance
        locationData={locationData}
        communesNaissance={communesNaissance}
        zonesNaissance={zonesNaissance}
        formData={formData}
        handleChange={handleChange}
      />
    )}
    {isFilled(formData.zoneNaissance) && (
      <InputField label="Nom du père" name="nom_pere" value={formData.nom_pere} onChange={handleChange} icon={User} />
    )}
    {isFilled(formData.nom_pere) && (
      <InputField label="Nom de la mère" name="nom_mere" value={formData.nom_mere} onChange={handleChange} icon={User} />
    )}
    {isFilled(formData.nom_mere) && (
      <InputField label="Numéro de téléphone" name="telephone" value={formData.telephone} onChange={handleChange} icon={User} type="tel" />
    )}
    {isFilled(formData.telephone) && (
      <InputField label="Email" name="email" value={formData.email} onChange={handleChange} icon={User} type="email" />
    )}
  </>
);

export default FormPhysique;