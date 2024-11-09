import React from "react";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  classNames?: string;
}

export default function Divider({
  orientation = "horizontal",
  classNames = "",
}: DividerProps) {
  const baseStyles = "bg-gray-300";
  const horizontalStyles = "h-px w-full";
  const verticalStyles = "w-px h-full";

  const classes = `${baseStyles} ${
    orientation === "horizontal" ? horizontalStyles : verticalStyles
  } ${classNames}`;

  return <div className={classes} />;
}
