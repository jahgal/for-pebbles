"use client";

import { useRouter } from "next/navigation";

interface GnbProps {
  text: string;
  to: string;
}
export default function Gnb({ text, to }: GnbProps) {
  const router = useRouter();

  return (
    <div
      className="flex break-keep px-4 justify-center items-center text-gray-700 text-body-l font-bold cursor-pointer select-none"
      onClick={() => router.push(to)}
    >
      {text}
    </div>
  );
}
