"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text" | "kakao";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  children: React.ReactElement;
}

export default function Button({
  variant = "contained",
  size = "medium",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "w-full rounded focus:outline-none transition-all duration-300";

  const variantStyles = {
    contained: `bg-blue-500 text-gray-0 hover:bg-blue-600`,
    outlined: `border border-blue-500 text-blue-500 hover:bg-blue-50`,
    text: `text-gray-950 hover:bg-blue-50`,
    kakao: `bg-kakao-bg text-kakao-text`,
  };

  const sizeStyles = {
    xsmall: "h-8 px-2.5 text-label-s",
    small: "h-10 px-3 text-label-s",
    medium: "h-12 px-4 text-label-m",
    large: "h-14 px-5 text-label-l",
    xlarge: "h-16 px-6 text-label-l",
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
