"use client";

import { ChangeEvent, useState } from "react";

import EyeOpenIcon from "images/eye-solid.svg";
import EyeClosedIcon from "images/eye-slash-solid.svg";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size: "small" | "medium" | "large";
  error?: boolean;
  hint?: string;
  classNames?: string;
}

export default function Input({
  size,
  onChange,
  classNames = "",
  error = false,
  type = "text",
  disabled = false,
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
    "flex w-full px-4 text-gray-900 placeholder:text-gray-400 disabled:bg-gray-100 disabled:text-gray-400 placeholder:text-label-s transition-all duration-300";

  const sizeStyles = {
    small: "h-10 rounded-md text-body-s",
    medium: "h-12 rounded-lg text-body-m",
    large: "h-14 rounded-lg text-body-l",
  };

  const borderStyles = error
    ? "border-2 border-loveRed-500 focus:border-sparkPurple-500"
    : "border border-gray-600 hover:border-sparkPurple-500 focus:border-sparkPurple-500 focus:border-2 disabled:hover:border-gray-600 ";

  const classes = `${classNames} ${borderStyles} ${baseStyles} ${sizeStyles[size]} flex items-center`;

  return (
    <div className="relative w-full">
      <input
        className={`${classes} ${type === "password" ? "pr-10" : ""}`}
        onChange={handleChange}
        type={type === "password" && showPassword ? "text" : type}
        {...props}
        disabled={disabled}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
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
  );
}
