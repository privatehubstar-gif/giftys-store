"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show loader for a short elegant moment
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-[#C9A227]/30 animate-ping" />
        <div className="relative w-full h-full rounded-full overflow-hidden border border-[#C9A227]/60 shadow-[0_0_30px_rgba(201,162,39,0.25)]">
          <Image
            src="/logo-circular.jpg"
            alt="Gifty's Store"
            fill
            className="object-cover"
            sizes="128px"
            priority
          />
        </div>
      </div>
      <p className="font-serif text-[#C9A227] text-lg tracking-widest uppercase opacity-90">
        Gifty&apos;s Store
      </p>
      <p className="text-[#C9A227]/60 text-xs tracking-[0.3em] mt-1 uppercase">
        Carry Elegance, Always.
      </p>
    </div>
  );
}
