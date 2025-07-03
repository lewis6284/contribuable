import React from "react";

const AdresseActuelle = ({
  communesBujumbura,
  zonesActuelle,
  quartiersActuelle,
  avenuesActuelle,
  formData,
  handleChange,
}) => (
  <>
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
);

export default AdresseActuelle;