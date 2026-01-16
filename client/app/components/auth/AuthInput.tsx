import { ReactNode } from "react";

interface AuthInputProps {
  label: string;
  type: string;
  placeholder?: string;
  icon?: ReactNode;
}

export default function AuthInput({
  label,
  type,
  placeholder,
  icon,
}: AuthInputProps) {
  return (
    <div>
      <label className="mb-1 block text-sm">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md bg-gray-100 px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
        />
        {icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}
