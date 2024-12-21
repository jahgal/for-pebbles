"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@utils";

interface HelpTextProps
  extends Omit<React.AllHTMLAttributes<HTMLDivElement>, "type">,
    VariantProps<typeof helpTextVariants> {
  message: string;
  additionalClass?: string;
}

const helpTextVariants = cva(
  "text-label-s inline-flex gap-1 items-center px-2",
  {
    variants: {
      type: {
        default: "text-gray-700",
        warning: "text-loveRed-500",
        primary: "text-sparkPurple-500",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

export default function HelpText({
  message,
  type = "default",
  additionalClass,
  ...props
}: HelpTextProps) {
  return (
    <div className={cn(helpTextVariants({ type }), additionalClass)} {...props}>
      {message}
    </div>
  );
}
