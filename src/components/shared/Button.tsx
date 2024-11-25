"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@utils";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  additionalClass?: string;
  children: React.ReactElement;
}

const buttonVariants = cva(
  "w-full rounded-md focus:outline-none transition-all duration-300",
  {
    variants: {
      variant: {
        contained: "text-white",
        outlined: "bg-transparent border",
        text: "bg-transparent",
      },
      size: {
        xsmall:
          "h-8 px-2.5 text-label-s max-sm:h-6 max-sm:px-2 max-sm:text-label-xs",
        small: "h-10 px-3 text-label-s max-sm:h-8 max-sm:px-2.5",
        medium:
          "h-12 px-4 text-label-m max-sm:h-10 max-sm:px-3 max-sm:text-label-s",
        large:
          "h-14 px-5 text-label-l max-sm:h-12 max-sm:px-4 max-sm:text-label-m",
        xlarge:
          "h-16 px-6 text-label-l max-sm:h-16 max-sm:px-5 max-sm:text-label-m",
      },
      color: {
        purple:
          "text-sparkPurple-500 border-sparkPurple-500 hover:bg-sparkPurple-50",
        red: "text-loveRed-500 border-loveRed-500 hover:bg-loveRed-50",
        orange:
          "text-happyOrange-500 border-happyOrange-500 hover:bg-happyOrange-50",
        blue: "text-coolBlue-500 border-coolBlue-500 hover:bg-coolBlue-50",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "purple",
        className: "bg-sparkPurple-500 hover:bg-sparkPurple-600 text-white",
      },
      {
        variant: "contained",
        color: "red",
        className: "bg-loveRed-500 hover:bg-loveRed-600 text-white",
      },
      {
        variant: "contained",
        color: "orange",
        className: "bg-happyOrange-500 hover:bg-happyOrange-600 text-white",
      },
      {
        variant: "contained",
        color: "blue",
        className: "bg-coolBlue-500 hover:bg-coolBlue-600 text-white",
      },
    ],
    defaultVariants: {
      variant: "contained",
      size: "medium",
      color: "purple",
    },
  }
);

export default function Button({
  variant,
  size,
  color,
  additionalClass = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, color }), additionalClass)}
      {...props}
    >
      {children}
    </button>
  );
}
