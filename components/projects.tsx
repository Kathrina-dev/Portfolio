import React from "react";

type Project = {
  title: string;
  image: string;
  description: string;
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "Roastify",
    image: "/roastify.jpeg",
    description:
      "Roastify is a web application that allows users to connect to their Spotify account and get a roast of their spotify listening history.",
    github: "https://github.com/Kathrina-dev/Roastify",
    live: "https://roastify-beta.vercel.app/",
  },
  {
    title: "AWS n8n Canvas",
    image: "/aws.jpeg",
    description:
      "An app that helps you design your AWS cloud architecture using an n8n-like canvas and deploy it by calling AWS APIs.",
    github: "https://github.com/Kathrina-dev/Cloud-Service-n8n",
    live: "https://drive.google.com/file/d/1KF4ZWU2mrY02ub-YMiVVL1K8skKDtnjZ/view?usp=sharing",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white dark:bg-neutral-900 p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 group">
      <div className="overflow-hidden rounded-xl">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
          {project.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">{project.description}</p>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-95"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="mb-6">
        <div className="inline-block bg-black text-white px-6 py-3 rounded-md">Projects</div>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100">
          Selected Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
