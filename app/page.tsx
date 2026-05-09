import TimelineDemo from "@/components/timeline-demo";
import PixelatedCanvasDemo from "@/components/pixelated-canvas-demo";
import EncryptedTextDemoSecond from "@/components/encrypted-text-demo-2";
import TechStack from "@/components/techstack";

export default function Home() {
  return (
    <main>
      <div className="p-8 flex flex-col lg:flex-row items-center gap-20">
        <PixelatedCanvasDemo />
        <div className="p-4 flex-col gap-8">
          <EncryptedTextDemoSecond/>
          <TechStack/>
        </div>
      </div>
      <TimelineDemo/>
    </main>
  );
}