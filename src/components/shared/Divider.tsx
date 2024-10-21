import React from "react";

interface DividerProps {
  orientation?: "horizontal" | "vertical"; // Orientation을 수평 또는 수직으로 설정
  className?: string; // 추가 클래스 이름
}

export default function Divider({
  orientation = "horizontal",
  className,
}: DividerProps) {
  const baseStyles = "bg-gray-300";
  const horizontalStyles = "h-px w-full";
  const verticalStyles = "w-px h-full";

  return (
    <div
      className={`${baseStyles} ${
        orientation === "horizontal" ? horizontalStyles : verticalStyles
      } ${className}`}
    />
  );
}
