import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Jun 2026 - Aug 2026",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 w-full group">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            HackersDaddy Internship
          </h3>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
            Web-Penetration Tester
          </p>
        </div>
      ),
    },
    {
      title: "May 2025 - Aug 2025",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 w-full group">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Forever PTE
          </h3>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
            Frontend Developer
          </p>
        </div>
      ),
    },
    {
      title: "Apr 2025 - Sep 2025",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 w-full group">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Vectr
          </h3>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
            Frontend Developer
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
