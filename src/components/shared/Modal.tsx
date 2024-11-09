"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  if (typeof window === "undefined") {
    return null;
  }

  return createPortal(
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-950/70 flex justify-center items-center z-[1000]">
      <dialog
        ref={dialogRef}
        className="w-[35rem] border-none rounded-xl bg-white p-10 relative flex justify-center items-start"
      >
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
