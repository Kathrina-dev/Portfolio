"use client";

const skills: string[] = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Python", "Tailwind CSS",
  "Node.js", "Git & GitHub",
];

// Duplicate for seamless loop
const doubled = [...skills, ...skills];

export default function SkillsCarousel() {
  return (
    <div className="carousel-track flex flex-col">
      {doubled.map((skill, i) => (
        <div
          key={i}
          className="mt-3 text-center py-4"
          style={{ color: "var(--yellow-muted)", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
        >
          <span style={{ borderBottom: "1.5px solid var(--yellow-muted)", paddingBottom: "2px" }}>
            {skill}
          </span>
        </div>
      ))}
    </div>
  );
}