"use client";

import { cn } from "@utils";

interface InputLableProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "className"> {
  text: string;
  additionalClass?: string;
}

export default function InputLabel({
  text,
  additionalClass,
  ...props
}: InputLableProps) {
  const classes = cn("w-full text-gray-900 text-label-s", additionalClass);

  return (
    <label className={classes} {...props}>
      {text}
    </label>
  );
}
