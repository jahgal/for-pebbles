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
          "text-sparkPurple-500 border-sparkPurple-500 hover:bg-sparkPurple-700 active:bg-sparkPurple-900 disabled:bg-gray-400",
        red: "text-loveRed-500 border-loveRed-500 hover:bg-loveRed-700 active:bg-loveRed-900 disabled:bg-gray-400",
        orange:
          "text-happyOrange-500 border-happyOrange-500 hover:bg-happyOrange-700 active:bg-happyOrange-900 disabled:bg-gray-400",
        blue: "text-coolBlue-500 border-coolBlue-500 hover:bg-coolBlue-700 active:bg-coolBlue-900 disabled:bg-gray-400",
        black:
          "text-gray-950 border-gray-950 hover:bg-gray-700 active:bg-gray-900 disabled:bg-gray-400",
      },
    },
    compoundVariants: [
      // Contained variants
      {
        variant: "contained",
        color: "purple",
        className: "bg-sparkPurple-500 text-white",
      },
      {
        variant: "contained",
        color: "red",
        className: "bg-loveRed-500 text-white",
      },
      {
        variant: "contained",
        color: "orange",
        className: "bg-happyOrange-500  text-white",
      },
      {
        variant: "contained",
        color: "blue",
        className: "bg-coolBlue-500  text-white",
      },
      {
        variant: "contained",
        color: "black",
        className: "bg-gray-950 text-white",
      },
      // Outlined variants
      {
        variant: "outlined",
        color: "purple",
        className:
          "border-sparkPurple-500 text-sparkPurple-500 hover:bg-sparkPurple-50",
      },
      {
        variant: "outlined",
        color: "red",
        className: "border-loveRed-500 text-loveRed-500 hover:bg-loveRed-50",
      },
      {
        variant: "outlined",
        color: "orange",
        className:
          "border-happyOrange-500 text-happyOrange-500 hover:bg-happyOrange-50",
      },
      {
        variant: "outlined",
        color: "blue",
        className: "border-coolBlue-500 text-coolBlue-500 hover:bg-coolBlue-50",
      },
      {
        variant: "outlined",
        color: "black",
        className: "border-gray-950 text-gray-950 hover:bg-gray-300",
      },
      // Text variants
      {
        variant: "text",
        color: "purple",
        className: "text-sparkPurple-500 hover:bg-sparkPurple-50",
      },
      {
        variant: "text",
        color: "red",
        className: "text-loveRed-500 hover:bg-loveRed-50",
      },
      {
        variant: "text",
        color: "orange",
        className: "text-happyOrange-500 hover:bg-happyOrange-50",
      },
      {
        variant: "text",
        color: "blue",
        className: "text-coolBlue-500 hover:bg-coolBlue-50",
      },
      {
        variant: "text",
        color: "black",
        className: "text-gray-950 hover:bg-gray-300",
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
