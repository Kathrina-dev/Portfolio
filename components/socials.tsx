"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IconType } from "react-icons";

const Socials = () => {
  const [copied, setCopied] = useState(false);
  const email = "kathrinaelangbam@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const socials: {
    name: string;
    icon: IconType;
    link?: string;
    onClick?: (e: React.MouseEvent) => void;
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
      onClick: handleCopyEmail,
    },
  ];

  return (
    <div className="mt-1">
      <div className="flex items-center gap-5">
        {socials.map((social) => {
          const Icon = social.icon;

          if (social.name === "Email") {
            return (
              <div key={social.name} className="relative inline-flex items-center justify-center">
                {copied && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs font-medium rounded-md shadow-md whitespace-nowrap transition-all duration-200 z-50 flex items-center justify-center">
                    <span>Copied to clipboard!</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                  </div>
                )}
                <button
                  type="button"
                  onClick={social.onClick}
                  aria-label="Copy Email to Clipboard"
                  title="Copy email to clipboard"
                  className="text-black text-3xl hover:opacity-75 transition-opacity cursor-pointer focus:outline-none"
                >
                  <Icon />
                </button>
              </div>
            );
          }

          return (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="text-black text-3xl hover:opacity-75 transition-opacity"
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