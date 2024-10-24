"use client";

interface CheckBoxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export default function CheckBox({
  checked,
  onChange,
  label,
  className,
}: CheckBoxProps) {
  const toggleCheckbox = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleCheckbox}
        className="h-4 w-4 p-0.5 rounded accent-babypink-500"
      />
      {label && <label className="text-gray-950 text-label-xs">{label}</label>}
    </div>
  );
}
