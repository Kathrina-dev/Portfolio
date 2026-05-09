"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { useEffect, useRef, useState } from "react";

export default function PixelatedCanvasDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canvasSize, setCanvasSize] = useState(500);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      const availableWidth = container.clientWidth;
      setCanvasSize(Math.max(280, Math.min(availableWidth, 500)));
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full xl:ml-25 max-w-100 lg:max-w-125">
      <PixelatedCanvas
        src="/avatar.jpeg"
        width={canvasSize}
        height={canvasSize}
        cellSize={4}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.1}
        interactive={false}
        responsive
        distortionStrength={3}
        distortionRadius={80}
        distortionMode="swirl"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={4}
        sampleAverage
        tintColor="#FFFFFF"
        tintStrength={0.2}
        className="rounded-full border border-neutral-800 shadow-lg"
      />
    </div>
  );
}
