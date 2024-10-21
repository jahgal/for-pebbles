"use client";

import Link from "next/link";

interface CardProps {
  id: number | string;
}

export default function Card({ id }: CardProps) {
  return (
    <Link
      className="flex justify-center items-center h-52 bg-gray-50 rounded-lg text-gray-950 text-body-m font-medium max-w-52"
      href={`/photos/${id}`}
    >
      {id}
    </Link>
  );
}
