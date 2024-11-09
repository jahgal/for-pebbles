"use client";

import { colors } from "@/styles/colors";

import WarnIcon from "images/circle-exclamation-sharp-solid.svg";

interface WarningMessageProps extends React.AllHTMLAttributes<HTMLDivElement> {
  errorMessage: string;
}

export default function WarningMessage({
  errorMessage,
  ...props
}: WarningMessageProps) {
  return (
    <div
      className="text-loveRed-500 text-label-s inline-flex gap-1 items-center"
      {...props}
    >
      <WarnIcon width="15px" fill={colors.loveRed[500]} />
      {errorMessage}
    </div>
  );
}
