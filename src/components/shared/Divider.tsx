import React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@utils";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  additionalClass?: string;
}

const dividerStyles = cva("bg-gray-300", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export default function Divider({
  orientation = "horizontal",
  additionalClass,
}: DividerProps) {
  const classes = cn(dividerStyles({ orientation }), additionalClass);

  return <div className={classes} />;
}
