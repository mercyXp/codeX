import { ReactNode, InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
}

export default function AuthInput({
  label,
  icon,
  className,
  ...props
}: AuthInputProps) {
  return (
    <div className="w-full">
      {/* Label with improved spacing and dark mode support */}
      <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      
      <div className="relative group">
        <input
          {...props}
          className={`
            w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 
            text-gray-900 placeholder:text-gray-400 outline-none transition-all
            
            /* Focus States */
            focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10
            
            /* Dark Mode States */
            dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500
            dark:focus:border-blue-400 dark:focus:bg-zinc-800 dark:focus:ring-blue-400/10
            
            /* Add padding if icon exists */
            ${icon ? "pr-12" : "pr-4"}
            ${className}
          `}
        />

        {/* Icon wrapper with a transition that matches the input focus */}
        {icon && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}