"use client";

import { cn } from "@utils";

interface WarningMessageProps extends React.AllHTMLAttributes<HTMLDivElement> {
  errorMessage: string;
  color?: string;
}

export default function WarningMessage({
  errorMessage,
  color = "text-loveRed-500",
  ...props
}: WarningMessageProps) {
  return (
    <div
      className={cn("text-label-s inline-flex gap-1 items-center px-2", color)}
      {...props}
    >
      {errorMessage}
    </div>
  );
}
