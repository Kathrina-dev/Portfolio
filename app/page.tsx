import TypewriterText from "@/components/TypewriterText";
import SkillsCarousel from "@/components/Skillscarousel";

const NAV_LINKS = ["Projects", "About", "Contact"];
const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Kathrina-dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kathrina-elangbam-03b6692b3/" },
  { label: "Instagram", href: "https://www.instagram.com/kathrina_elangbam/" },
];

export default function Home() {
  return (
    /*
     * Mobile  : single column, scrollable, padding 12px
     * Tablet  : still single col but bigger spacing
     * Desktop : full-screen bento grid (lg+), no scroll
     */
    <main className="min-h-screen lg:h-screen lg:overflow-hidden w-full flex flex-col p-3 sm:p-4 lg:p-6 gap-3 bg-[#f7e98e]">

      {/* ── NAV ──────────────────────────────────────────── */}
      <header
        className="bento-card bloom flex items-center justify-between px-4 sm:px-6 py-3 lg:py-0 flex-shrink-0 lg:h-[10%]"
        style={{ animationDelay: "0s" }}
      >
        <p className="font-display text-lg sm:text-2xl lg:text-3xl text-[#4a3500]">
          <span className="font-light">KATHRINA</span>{" "}
          <strong className="font-extrabold">ELANGBAM</strong>
        </p>
        <nav className="flex gap-3 sm:gap-5 text-sm sm:text-base font-semibold font-heading text-[#7a5e00]">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#4a3500] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* ── MAIN GRID ────────────────────────────────────── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 lg:min-h-0">

        {/* ── LEFT COLUMN ─────────────────────────────── */}
        <div className="flex flex-col gap-3 lg:min-h-0">

          {/* TOP HALF: typewriter + avatar */}
          <div className="flex flex-col sm:flex-row gap-3 lg:h-[60%] lg:min-h-0">

            {/* Typewriter card */}
            <div
              className="bento-card bloom flex items-center overflow-hidden
                         w-full sm:w-[67%]
                         min-h-[130px] sm:min-h-[170px]
                         px-5 sm:px-8 py-5 lg:py-0"
              style={{ animationDelay: "0s", fontSize: "clamp(1.4rem, 3.5vw, 3.8rem)" }}
            >
              <div className="font-display leading-snug w-full">
                <TypewriterText />
              </div>
            </div>

            {/* Avatar — hidden on xs, shown sm+ */}
            <div
              className="bento-card bloom overflow-hidden
                         hidden sm:block
                         sm:w-[30%]
                         min-h-[170px]"
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src="/avatar.jpeg"
                alt="Kathrina Elangbam"
                className="avatar-img"
              />
            </div>
          </div>

          {/* BOTTOM HALF: intro + contact */}
          <div className="flex flex-col sm:flex-row gap-3 lg:h-[40%] lg:min-h-0">

            <div
              className="bento-card bloom flex flex-col justify-end w-full sm:w-1/2 p-4 sm:p-5"
              style={{ animationDelay: "2s" }}
            >
              <h2 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-[#4a3500] mb-1">
                Hey there!
              </h2>
              <p className="text-sm sm:text-base text-[#7a5e00] leading-relaxed">
                I&apos;m Kathrina, an aspiring software engineer studying Computer
                Science &amp; Engineering at VIT-AP. Deeply passionate about
                technology and the endless possibilities it holds.
              </p>
            </div>

            <div
              className="bento-card bloom flex flex-col justify-end w-full sm:w-1/2 p-4 sm:p-5"
              style={{ animationDelay: "1.6s" }}
            >
              <span className="text-xl text-[#7a5e00] mb-1">↗</span>
              <h2 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-[#4a3500] mb-1">
                Contact Me
              </h2>
              <p className="text-sm sm:text-base text-[#7a5e00] leading-relaxed">
                I love working on tech projects and would be excited to
                collaborate — feel free to reach out! Check out my projects too.
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ────────────────────────────── */}
        <div className="flex flex-col gap-3 lg:min-h-0">

          {/* Skills carousel */}
          <div
            className="bento-card bloom skills-panel overflow-hidden
                       h-56 sm:h-64 lg:flex-1 lg:h-auto"
            style={{ animationDelay: "0.8s", padding: "8px" }}
          >
            <SkillsCarousel />
          </div>

          {/* Social links */}
          <div
            className="bento-card bloom flex items-center justify-around
                       py-4 lg:py-0 lg:h-[17%] flex-shrink-0"
            style={{ animationDelay: "1.2s" }}
          >
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-semibold text-sm sm:text-base text-[#7a5e00] hover:text-[#4a3500] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}