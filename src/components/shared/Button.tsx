"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text" | "kakao";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  color?: "primary" | "second";
  children: React.ReactElement;
}

export default function Button({
  variant = "contained",
  size = "medium",
  color = "primary",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "w-full rounded focus:outline-none transition-all duration-300";

  const variantStyles = {
    contained:
      color === "primary"
        ? "bg-babypink-500 text-white hover:bg-babypink-600"
        : "bg-blue-500 text-gray-0 hover:bg-blue-600",
    outlined:
      color === "primary"
        ? "border border-babypink-500 text-babypink-500 hover:bg-babypink-50"
        : "border border-blue-500 text-blue-500 hover:bg-blue-50",
    text:
      color === "primary"
        ? "text-babypink-500 hover:bg-babypink-50"
        : "text-gray-950 hover:bg-blue-50",
    kakao: `bg-kakao-bg text-kakao-text`,
  };

  const sizeStyles = {
    xsmall:
      "h-8 px-2.5 text-label-s max-sm:h-6 max-sm:px-2 max-sm:text-label-xs",
    small: "h-10 px-3 text-label-s max-sm:h-8 max-sm:px-2.5",
    medium:
      "h-12 px-4 text-label-m max-sm:h-10 max-sm:px-3 max-sm:text-label-s",
    large: "h-14 px-5 text-label-l max-sm:h-12 max-sm:px-4 max-sm:text-label-m",
    xlarge:
      "h-16 px-6 text-label-l max-sm:h-16 max-sm:px-5 max-sm:text-label-m",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${props.className ?? ""}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
