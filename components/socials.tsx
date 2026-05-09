"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IconType } from "react-icons";

const Socials = () => {
  const socials: {
    name: string;
    icon: IconType;
    link: string;
  }[] = [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/Kathrina-dev",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/kathrina-elangbam-03b6692b3/",
    },
    {
      name: "Email",
      icon: CgMail,
      link: "mailto:kathrinaelangbam@gmail.com",
    },
  ];

  return (
    <div className="mt-1">
      <div className="flex items-center gap-5">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="text-black text-3xl"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;