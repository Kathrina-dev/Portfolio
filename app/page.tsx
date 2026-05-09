import TimelineDemo from "@/components/timeline-demo";
import PixelatedCanvasDemo from "@/components/pixelated-canvas-demo";
import EncryptedTextDemoSecond from "@/components/encrypted-text-demo-2";
import TechStack from "@/components/techstack";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main>
      <div className="lg:p-8 p-4 flex flex-col md:flex-row items-center gap-4">
        <PixelatedCanvasDemo />
        <div className="xl:ml-40 xl:mt-12 lg:ml-4 p-4 flex flex-col items-start align-center">
          <div className="w-full flex justify-center">
            <EncryptedTextDemoSecond />
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-black">
            Kathrina Elangbam
          </h1>
          <p className="text-xl font-mono text-neutral-600">Full Stack Developer </p>
          <Socials />
        </div>
      </div>
      <TechStack />
      <TimelineDemo/>
    </main>
  );
}