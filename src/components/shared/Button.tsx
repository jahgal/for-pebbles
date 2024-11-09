"use client";

import React from "react";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: "contained" | "outlined" | "text";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  color?: "purple" | "red" | "orange" | "blue";
  classNames?: string;
  children: React.ReactElement;
}

export default function Button({
  variant = "contained",
  size = "medium",
  color = "purple",
  classNames = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "w-full rounded-md focus:outline-none transition-all duration-300";

  const variantStyles = {
    contained: {
      purple: "bg-sparkPurple-500 text-white hover:bg-sparkPurple-600",
      red: "bg-loveRed-500 text-white hover:bg-loveRed-600",
      orange: "bg-happyOrange-500 text-white hover:bg-happyOrange-600",
      blue: "bg-coolBlue-500 text-white hover:bg-coolBlue-600",
    },
    outlined: {
      purple:
        "border border-sparkPurple-500 text-sparkPurple-500 hover:bg-sparkPurple-50",
      red: "border border-loveRed-500 text-loveRed-500 hover:bg-loveRed-50",
      orange:
        "border border-happyOrange-500 text-happyOrange-500 hover:bg-happyOrange-50",
      blue: "border border-coolBlue-500 text-coolBlue-500 hover:bg-coolBlue-50",
    },
    text: {
      purple: "text-sparkPurple-500 hover:bg-sparkPurple-50",
      red: "text-loveRed-500 hover:bg-loveRed-50",
      orange: "text-happyOrange-500 hover:bg-happyOrange-50",
      blue: "text-coolBlue-500 hover:bg-coolBlue-50",
    },
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

  const classes = `${baseStyles} ${variantStyles[variant][color]} ${sizeStyles[size]} ${classNames}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
