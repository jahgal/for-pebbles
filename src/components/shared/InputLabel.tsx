"use client";

interface InputLableProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "className"> {
  text: string;
  classNames?: string;
}

export default function InputLabel({
  text,
  classNames,
  ...props
}: InputLableProps) {
  const classes = `${classNames} w-full text-gray-900 text-label-s`;
  return (
    <label className={classes} {...props}>
      {text}
    </label>
  );
}
