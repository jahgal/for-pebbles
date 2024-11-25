"use client";

import { ChangeEvent, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@utils";

import EyeOpenIcon from "images/eye-solid.svg";
import EyeClosedIcon from "images/eye-slash-solid.svg";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  hint?: string;
  additionalClass?: string;
}

const inputVariants = cva(
  "flex w-full px-4 items-center text-gray-900 placeholder:text-gray-400 disabled:bg-gray-100 disabled:text-gray-400 placeholder:text-label-s transition-all duration-300",
  {
    variants: {
      size: {
        small: "h-10 rounded-md text-body-s",
        medium: "h-12 rounded-lg text-body-m",
        large: "h-14 rounded-lg text-body-l",
      },
      error: {
        true: "border-2 border-loveRed-500 focus:border-sparkPurple-500",
        false:
          "border border-gray-600 hover:border-sparkPurple-500 focus:border-sparkPurple-500 focus:border-2 disabled:hover:border-gray-600",
      },
      type: {
        password: "pr-10",
        text: "",
        email: "",
        number: "",
      },
    },
    defaultVariants: {
      size: "medium",
      error: false,
      type: "text",
    },
  }
);

export default function Input({
  size,
  onChange,
  additionalClass,
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

  return (
    <div className="relative w-full">
      <input
        className={cn(
          inputVariants({
            size,
            error,
            type,
          }),
          additionalClass
        )}
        onChange={handleChange}
        type={type === "password" && showPassword ? "text" : type || undefined}
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
