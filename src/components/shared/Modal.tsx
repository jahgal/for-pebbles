"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-950/70 flex justify-center items-center z-[1000]">
      <dialog
        ref={dialogRef}
        className="w-[80%] max-w-[500px] max-h-[500px] h-auto border-none rounded-xl bg-gray-0 p-5 relative flex justify-center items-center text-xl font-medium"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="absolute top-[10px] right-[10px] w-12 h-12 bg-transparent border-none rounded-2xl cursor-pointer flex items-center justify-center font-medium text-body-l hover:bg-gray-50 after:content-['x'] after:text-gray-950"
        />
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
