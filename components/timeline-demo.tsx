"use client";

import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";

function ExperienceCard({ 
  title, 
  role, 
  details, 
  isOpen, 
  onToggle 
}: { 
  title: string, 
  role: string, 
  details: string,
  isOpen: boolean,
  onToggle: () => void
}) {
  return (
    <div 
      onClick={onToggle}
      className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 w-full group cursor-pointer"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
        {role}
      </p>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-neutral-500 dark:text-neutral-400 text-base">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TimelineDemo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Jun 2026 - Aug 2026",
      content: (
        <ExperienceCard 
          title="HackersDaddy Internship"
          role="Web-Penetration Tester"
          details="Conducted vulnerability assessments and penetration testing on web applications."
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        />
      ),
    },
    {
      title: "May 2025 - Aug 2025",
      content: (
        <ExperienceCard 
          title="Forever PTE"
          role="Frontend Developer"
          details="Developed and maintained responsive frontend interfaces using Next.js and React."
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        />
      ),
    },
    {
      title: "Apr 2025 - Sep 2025",
      content: (
        <ExperienceCard 
          title="Vectr"
          role="Frontend Developer"
          details="Collaborated with designers to implement pixel-perfect UI components and animations."
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        />
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
