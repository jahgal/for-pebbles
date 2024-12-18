"use client";

import { cn } from "@utils";

interface CheckBoxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  additionalClass?: string;
}

export default function CheckBox({
  checked,
  onChange,
  label,
  additionalClass,
}: CheckBoxProps) {
  const toggleCheckbox = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className={cn(`flex items-center gap-2`, additionalClass)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleCheckbox}
        className="w-5 h-5 p-0.5 rounded border-gray-600 accent-sparkPurple-500"
      />
      {label && <label className="text-gray-900 text-label-xs">{label}</label>}
    </div>
  );
}
