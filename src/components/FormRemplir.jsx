import React from "react";

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  icon: Icon,
  placeholder = "",
  ...props
}) => (
  <div className="mb-4">
    {label && (
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        {Icon && <Icon className="w-5 h-5 text-green-700" />}
        {label}
      </label>
    )}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-green-300 rounded-sm px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
      {...props}
    />
  </div>
);

export default InputField;