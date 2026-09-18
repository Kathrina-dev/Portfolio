"use client";
import { useEffect, useRef, useState } from "react";

export default function ProfileImage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState(200);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      const availableWidth = container.clientWidth;
      setSize(Math.max(120, Math.min(availableWidth, 360)));
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[360px]">
      <img
        src="/avatar.jpeg"
        alt="Profile"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="rounded-full border border-neutral-800 shadow-lg object-cover"
      />
    </div>
  );
}
