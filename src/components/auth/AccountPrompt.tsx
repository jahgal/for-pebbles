import Link from "next/link";

interface AccountPromptProps {
  question: string;
  linkLable: string;
  to: string;
}

export default function AccountPrompt({
  question,
  linkLable,
  to,
}: AccountPromptProps) {
  return (
    <div className="w-full text-center mt-3 max-sm:text-label-xs">
      <span className="text-gray-500 cursor-default font-light">
        {question}
      </span>{" "}
      <Link className="underline cursor-pointer font-light" href={to}>
        {linkLable}
      </Link>
    </div>
  );
}
