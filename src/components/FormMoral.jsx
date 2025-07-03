import InputField from "./FormRemplir";
import InputFile from "./InputFile";

const FormMorale = ({ formData, handleChange }) => (
  <>
    <InputField label="Dénomination" name="denomination" value={formData.denomination} onChange={handleChange} />
    <InputField label="N° de Registre de Commerce" name="rc" value={formData.rc} onChange={handleChange} />
    <InputField label="NIF" name="nif" value={formData.nif} onChange={handleChange} />
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
    {formData.maisonActuelle && (
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
  </>
);

export default FormMorale;