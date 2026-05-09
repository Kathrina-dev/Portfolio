import TimelineDemo from "@/components/timeline-demo";
import PixelatedCanvasDemo from "@/components/pixelated-canvas-demo";
import EncryptedTextDemoSecond from "@/components/encrypted-text-demo-2";

export default function Home() {
  return (
    <main>
      <div className="p-8 flex flex-col md:flex-row items-center">
        <PixelatedCanvasDemo />
        <EncryptedTextDemoSecond/>
      </div>
      <TimelineDemo/>
    </main>
  );
}