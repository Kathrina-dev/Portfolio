"use client";

import { useEffect, useRef } from "react";

const lines: string[] = [
  "Hi, I'm <span class='gradient-text'>Kathrina</span>, <em>I love</em> <span class='gradient-text'>coding.</span>",
  "<em>Bring</em> <span class='gradient-text'>ideas</span> <em>to life with</em> <span class='gradient-text'>code.</span>",
  "<span class='gradient-text'>Tech</span> <em>enthusiast.</em> <span class='gradient-text'>Web</span> <em>developer.</em>",
  "<em>Exploring</em> <span class='gradient-text'>open-source</span> <em>tech.</em>",
  "<em>Building the</em> <span class='gradient-text'>future,</span> <em>one line at a</em> <span class='gradient-text'>time.</span>",
  "<em>Always</em> <span class='gradient-text'>learning,</span> <em>always</em> <span class='gradient-text'>creating.</span>",
  "<em>Driven by</em> <span class='gradient-text'>code and curiosity.</span>",
];

const DUR_FWD = 90;
const DUR_GAP = 2000;
const DUR_BWD = 70;
const DUR_DONE = 800;

export default function TypewriterText() {
  const ref = useRef<HTMLSpanElement>(null);
  const state = useRef({
    lineIdx: 0,
    charIdx: 0,
    deleting: false,
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const el = ref.current;
      if (!el) return;
      const { lineIdx, charIdx, deleting } = state.current;
      const raw = lines[lineIdx];

      if (deleting) {
        if (charIdx > 0) {
          let ci = charIdx - 1;
          // skip back over HTML tag
          if (raw[ci] === ">") {
            while (ci >= 0 && raw[ci] !== "<") ci--;
            ci--;
          }
          state.current.charIdx = ci;
          el.innerHTML = raw.substring(0, ci);
          timer = setTimeout(tick, DUR_BWD);
        } else {
          state.current.deleting = false;
          state.current.lineIdx = (lineIdx + 1) % lines.length;
          timer = setTimeout(tick, DUR_DONE);
        }
      } else {
        if (charIdx < raw.length) {
          let ci = charIdx;
          // skip forward over HTML tag
          if (raw[ci] === "<") {
            while (ci < raw.length && raw[ci] !== ">") ci++;
            ci++;
          } else {
            ci++;
          }
          state.current.charIdx = ci;
          el.innerHTML = raw.substring(0, ci);
          timer = setTimeout(tick, DUR_FWD);
        } else {
          state.current.deleting = true;
          timer = setTimeout(tick, DUR_GAP);
        }
      }
    }

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      ref={ref}
      className="cursor pr-1"
      style={{ fontFamily: "'Afacad Flux', sans-serif" }}
    />
  );
}