"use client";

import { ChangeEvent, useState } from "react";

import WarnIcon from "images/circle-exclamation-sharp-solid.svg";
import EyeOpenIcon from "images/eye-solid.svg";
import EyeClosedIcon from "images/eye-slash-solid.svg";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size: "small" | "medium" | "large";
  error?: boolean;
  errorMessage?: string;
  label?: string;
  hint?: string;
}

export default function Input({
  size,
  onChange,
  label,
  errorMessage,
  error = false,
  type = "text",
  className = "",
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const baseStyles =
    "flex w-full px-4 border text-gray-900 focus:border-blue-500 placeholder:text-gray-300 placeholder:font-light transition-all duration-300";

  const sizeStyles = {
    small: "h-10 rounded-md text-body-s",
    medium: "h-12 rounded-lg text-body-m",
    large: "h-14 rounded-lg text-body-l",
  };

  const borderStyles = error ? "border-red-600" : "border-gray-600";

  const classes = `${className} ${borderStyles} ${baseStyles} ${sizeStyles[size]} flex items-center`;

  return (
    <div className="flex-col justify-start items-start gap-3 inline-flex relative">
      {label && <label className="text-gray-900 text-label-s">{label}</label>}
      <div className="relative w-full">
        <input
          className={`${classes} ${type === "password" ? "pr-10" : ""}`}
          onChange={handleChange}
          type={type === "password" && showPassword ? "text" : type}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOpenIcon width="20px" />
            ) : (
              <EyeClosedIcon width="20px" />
            )}
          </button>
        )}
      </div>
      {error && errorMessage && (
        <div className="text-red-500 text-label-s inline-flex gap-1 items-center">
          <WarnIcon width="15px" fill="#ef4444" />
          {errorMessage}
        </div>
      )}
    </div>
  );
}
