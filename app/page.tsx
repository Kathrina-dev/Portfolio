import TimelineDemo from "@/components/timeline-demo";
import PixelatedCanvasDemo from "@/components/pixelated-canvas-demo";
import EncryptedTextDemoSecond from "@/components/encrypted-text-demo-2";
import TechStack from "@/components/techstack";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main>
      <div className="w-full px-4 lg:px-8 py-12 md:py-15 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32 xl:gap-40">
        <PixelatedCanvasDemo />
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-full flex justify-center md:justify-start">
            <EncryptedTextDemoSecond />
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-black">
            Kathrina Elangbam
          </h1>
          <p className="text-xl font-mono text-neutral-600 mt-2">Full Stack Developer</p>
          <div className="mt-6 flex justify-center md:justify-start w-full">
            <Socials />
          </div>
        </div>
      </div>
      <TechStack />
      <TimelineDemo />
    </main>
  );
}