import React from "react";

const AdresseNaissance = ({
  locationData,
  communesNaissance,
  zonesNaissance,
  formData,
  handleChange,
}) => (
  <>
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
);

export default AdresseNaissance;