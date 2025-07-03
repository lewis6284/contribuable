import React from "react";
import { CheckCircle } from "lucide-react";

const InputFile = ({ label, name, onChange }) => (
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

export default InputFile;