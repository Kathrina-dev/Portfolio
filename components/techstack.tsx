"use client";

import { useState } from "react";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiFirebaseFill,
  RiFlutterFill,
} from "react-icons/ri";
import {
  FaReact,
  FaNodeJs,
  FaRaspberryPi,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import {
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiArduino,
  SiPostman,
  SiGnubash,
} from "react-icons/si";
import { IconType } from "react-icons";

const TechStack = () => {
  const techstack = [
    "NextJS",
    "ReactJS",
    "Tailwind CSS",
    "Typescript",
    "NodeJS",
    "ExpressJS",
    "PostgreSQL",
    "Firebase",
    "MongoDB",
    "Flutter",
    "React Native",
    "Python",
    "Jupyter Notebook",
    "NumPy",
    "Pandas",
    "Arduino",
    "Raspberry Pi",
    "Docker",
    "Linux",
    "Bash",
    "Git",
    "Github",
    "Postman",
  ];

  const icons: Record<string, IconType> = {
    NextJS: RiNextjsFill,
    ReactJS: FaReact,
    "Tailwind CSS": RiTailwindCssFill,
    Typescript: BsTypescript,
    NodeJS: FaNodeJs,
    ExpressJS: SiExpress,
    PostgreSQL: SiPostgresql,
    Firebase: RiFirebaseFill,
    MongoDB: SiMongodb,
    Flutter: RiFlutterFill,
    "React Native": FaReact,
    Python: SiPython,
    "Jupyter Notebook": SiJupyter,
    NumPy: SiNumpy,
    Pandas: SiPandas,
    Arduino: SiArduino,
    "Raspberry Pi": FaRaspberryPi,
    Docker: FaDocker,
    Linux: FaLinux,
    Bash: SiGnubash,
    Git: FaGitAlt,
    Github: FaGithub,
    Postman: SiPostman,
  };

  const [isOpen, setIsOpen] = useState(false);

  const visibleTech = isOpen ? techstack : techstack.slice(0, 6);

  return (
    <div className="mt-8 max-w-171">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black">Tech Stack</h3>
        <button
          aria-label={isOpen ? "Collapse tech list" : "Expand tech list"}
          onClick={() => setIsOpen((s) => !s)}
          className="ml-3 px-2 py-1 rounded-md text-black hover:bg-black/5"
        >
          {isOpen ? "▴" : "▾"}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {visibleTech.map((t) => {
          const Icon = icons[t];
          return (
            <button
              key={t}
              className="inline-flex items-center gap-2 px-3 py-2 border-2 border-black text-black rounded-full hover:shadow-md transition"
              aria-label={t}
              title={t}
            >
              {Icon && <Icon className="text-lg shrink-0" />}
              <span className="text-xs lg:text-sm">{t}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
