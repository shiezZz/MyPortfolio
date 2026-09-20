import React, { useState, useEffect } from "react";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import {
  HeroPlate,
  PhoneScene,
  StayScene,
  BookScene,
  DeskScene,
  GlyphPhone,
  GlyphKey,
  GlyphBook,
  ScribbleArrow,
  Postmark,
} from "./art.jsx";

// CONTENT — edit the values below to update the site. No other code changes
// should be needed for day-to-day updates (new project, new link, etc).

const PROFILE = {
  name: "Kurt Lawrence J. Tolentino",
  firstName: "Kurt",
  role: "Full-Stack Developer / Mobile Developer ",
  location: "Philippines",
  email: "klawrence.tolentino@gmail.com",
  github: "https://github.com/shiezZz",
  linkedin: "https://www.linkedin.com/in/kurt-tolentino-717275347/",
  resumeUrl: "./resume.pdf",
};

const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "path", label: "Path" },
];

// Hero headline: one line per project, each ending in a small drawing.
const HERO_LINES = [
  { text: "Apps that check you in,", Glyph: GlyphPhone },
  { text: "book your stay,", Glyph: GlyphKey },
  { text: "and tell you a story.", Glyph: GlyphBook },
];

const SKILL_GROUPS = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "Dart", "C#"] },
  { label: "Web", items: ["HTML", "CSS", "React", "Django"] },
  { label: "Data and backend", items: ["MySQL", "Firebase", "NEON"] },
  { label: "Tools", items: ["GitHub", "MCP", "Claude", "Android Studio"] },
];

const PROJECTS = [
  {
    title: "CSCQC Attendance Mobile App",
    description:
      "A mobile attendance app that uses biometric authentication and QR code scanning, with live camera capture to verify time-in and time-out. Built to replace manual attendance logging.",
    tags: ["Mobile", "Biometrics", "QR code", "Firebase"],
    githubUrl: "https://github.com/shiezZz/Faculty_Attendance_App.git",
    liveUrl: "",
    Scene: PhoneScene,
  },
  {
    title: "StaycationHavenPH",
    description:
      "A partnership module for a staycation booking platform that lets individual unit owners list their own properties, so guests can browse and book stays directly on the site.",
    tags: ["Web", "Booking system", "NEON", "Full-stack"],
    githubUrl: "https://github.com/StaycationWebsite/Staycation.git",
    liveUrl: "https://www.staycationhavenph.com/",
    Scene: StayScene,
  },
  {
    title: "Flipbook: Panitikan Project",
    description:
      "An interactive flipbook that brings Philippine mythical creatures to life, built to make learning Filipino folklore more engaging for students.",
    tags: ["Web", "Interactive UI", "Education"],
    githubUrl: "https://github.com/shiezZz/Panitikan",
    liveUrl: "",
    Scene: BookScene,
  },
];

const FACTS = [
  { label: "Based in", value: PROFILE.location },
  { label: "Focus", value: "Web and mobile development" },
  { label: "Exploring", value: "AI-assisted development" },
];

const EXPERIENCE = [
  {
    years: "2026",
    title: "Development intern, StaycationHavenPH",
    body: "Joined the team behind an online booking platform for suites, working across the web system and the mobile app and fixing errors in the tasks assigned to me.",
  },
  {
    years: "2025–2026",
    title: "Capstone team leader",
    body: "Led a team of four building an attendance app for CSCQC teachers: time in and out by biometrics or QR code, with two-factor authentication. I built the professors' app and set up Firebase for storage and sign-in.",
  },
  {
    years: "2024–2025",
    title: "President, IT Department",
    body: "Officer for the BS Information Technology department, looking after students from first to fourth year through my junior year. It taught me to trust my peers and see what each of them is good at.",
  },
  {
    years: "2024",
    title: "Student portal assistant, CSCQC",
    body: "Enrolled students into the school portal and added their class schedules. Managing the system taught me how it works and gave me ideas for my own projects.",
  },
];

const CERTS = [
  "AWS Cloud Practitioner Essentials",
  "AWS AI Practitioner Challenge",
  "Generative AI & Machine Learning",
  "Career Boost with Power BI & AI",
  "Power BI Seminar",
  "Data Encryption",
];

// ---------------------------------------------------------------------------

export default function Portfolio() {
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" && document.documentElement.dataset.theme === "dark" ? "dark" : "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* storage can be unavailable; the toggle still works for this visit */
    }
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-full focus:bg-ink focus:text-paper"
      >
        Skip to main content
      </a>

      {/* ------------------------------------------------------------ HEADER */}
      <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-ink/10">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-display text-xl tracking-tight"
            aria-label="Go to top of page"
          >
            Kurt Tolentino
          </button>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-[0.95rem] font-medium text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} className="btn btn-line !py-2">
              Say hello
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2.5 rounded-full text-muted hover:text-ink transition-colors"
            >
              {isDark ? <Sun size={19} strokeWidth={1.5} aria-hidden="true" /> : <Moon size={19} strokeWidth={1.5} aria-hidden="true" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-full text-muted hover:text-ink"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={21} strokeWidth={1.5} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-30 bg-paper px-5 pt-10 flex flex-col gap-2"
          aria-label="Mobile primary"
        >
          {[...NAV_LINKS, { id: "contact", label: "Say hello" }].map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left font-display text-[2.6rem] leading-tight tracking-tight py-2 hover:text-accent transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}

      <main id="main">
        {/* ------------------------------------------------------------ HERO */}
        <section id="home" className="px-5 sm:px-10 pt-10 md:pt-14 pb-20 md:pb-28 scroll-mt-16">
          <div className="max-w-[88rem] mx-auto grid md:grid-cols-12 gap-10 md:gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-8">
              <h1 className="t-hero mb-8 md:mb-10">
                {HERO_LINES.map(({ text, Glyph }, i) => (
                  <span key={text} className="line-mask">
                    <span className="line-inner" style={{ "--d": `${0.1 + i * 0.16}s` }}>
                      {text.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="whitespace-nowrap">
                        {text.split(" ").slice(-1)}
                        <Glyph delay={`${0.7 + i * 0.25}s`} />
                      </span>
                    </span>
                  </span>
                ))}
              </h1>

              <p className="text-muted max-w-[34rem] text-lg leading-relaxed mb-9">
                I'm {PROFILE.name.replace(" J.", "")}, a full-stack and mobile developer. I build for the small, everyday
                jobs people rely on.
              </p>

              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollTo("work")} className="btn btn-solid">
                  View my work
                </button>
                <button onClick={() => scrollTo("contact")} className="btn btn-line">
                  Say hello
                </button>
              </div>
            </div>

            {/* Portrait breaks out of the top of its arch */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
              <div
                className="relative w-full fade-in"
                style={{ maxWidth: "26rem", aspectRatio: "420 / 600", "--d": "0.2s" }}
              >
                <div className="absolute inset-0">
                  <HeroPlate />
                </div>
                <img
                  src="./prof-port.png"
                  alt={`Portrait of ${PROFILE.name}`}
                  className="absolute left-1/2 -translate-x-1/2 h-[102%] w-auto max-w-none"
                  style={{ bottom: "1.6%" }}
                />
                <div className="absolute left-[6%] top-full mt-3 flex items-start gap-1 -rotate-3 pointer-events-none">
                  <span className="font-display italic text-xl leading-tight pt-3">open to work</span>
                  <ScribbleArrow className="w-12 h-auto -scale-y-100 -mt-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ WORK */}
        <section id="work" className="px-5 sm:px-10 py-20 md:py-28 scroll-mt-16">
          <div className="max-w-[88rem] mx-auto">
            <h2 className="t-section max-w-3xl">Things I've built</h2>

            <div className="mt-6 md:mt-10">
              {PROJECTS.map((p, i) => {
                const flip = i % 2 === 1;
                return (
                  <article
                    key={p.title}
                    className="group grid md:grid-cols-12 gap-8 md:gap-14 items-center py-12 md:py-20"
                  >
                    <div className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
                      <div className="plate-wrap max-w-md mx-auto md:mx-0">
                        <p.Scene />
                      </div>
                    </div>
                    <div className={`md:col-span-7 ${flip ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}>
                      <h3 className="t-project mb-5">{p.title}</h3>
                      <p className="text-muted max-w-xl mb-6">{p.description}</p>

                      <ul className="flex flex-wrap gap-x-1 text-[0.95rem] mb-7" aria-label={`Technologies used in ${p.title}`}>
                        {p.tags.map((tag, ti) => (
                          <li key={tag}>
                            {tag}
                            {ti < p.tags.length - 1 && <span aria-hidden="true">,&nbsp;</span>}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-medium">
                        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="link-u">
                          View code
                        </a>
                        {p.liveUrl && (
                          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="link-u">
                            Visit live site
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ ABOUT */}
        <section id="about" className="px-5 sm:px-10 py-20 md:py-28 scroll-mt-16">
          <div className="max-w-[88rem] mx-auto">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
              <div className="md:col-span-7">
                <h2 className="t-section mb-10">A bit about me</h2>
                <p className="t-lead mb-8 max-w-[38ch]">
                  I turn everyday problems into simple, working software: biometric attendance, booking platforms, and
                  interactive learning tools.
                </p>
                <p className="text-muted max-w-xl mb-5">
                  I like clean code, clear interfaces, and working out how the pieces fit together, whether that's a
                  database schema or a QR scanner. When I'm not building something, I'm learning a new tool or
                  exploring how AI fits into a developer's workflow, including MCP and working alongside Claude.
                </p>
                <p className="text-muted max-w-xl">Friendly by nature, thorough by habit.</p>
              </div>

              <div className="md:col-span-5">
                <div className="max-w-md md:ml-auto">
                  <DeskScene />
                  <dl className="mt-10 space-y-5">
                    {FACTS.map((f) => (
                      <div key={f.label} className="flex items-baseline justify-between gap-6 border-b border-ink/15 pb-3">
                        <dt className="text-muted text-[0.95rem]">{f.label}</dt>
                        <dd className="font-display text-xl text-right">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Toolbox, set as type */}
            <div className="mt-20 md:mt-28">
              <h3 className="font-display text-[1.9rem] md:text-4xl mb-10">Tools I work with</h3>
              <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
                {SKILL_GROUPS.map((g) => (
                  <div key={g.label}>
                    <h4 className="text-muted text-[0.95rem] mb-2">{g.label}</h4>
                    <ul className="font-display text-[1.6rem] md:text-[1.9rem] leading-[1.25] flex flex-wrap gap-x-1" aria-label={`${g.label} skills`}>
                      {g.items.map((it, n) => (
                        <li key={it}>
                          {it}
                          {n < g.items.length - 1 && <span className="text-muted" aria-hidden="true">,&nbsp;</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ PATH */}
        <section id="path" className="px-5 sm:px-10 py-20 md:py-28 scroll-mt-16">
          <div className="max-w-[88rem] mx-auto">
            <h2 className="t-section max-w-3xl mb-4">Experience and learning</h2>
            <p className="text-muted mb-14 md:mb-20 max-w-xl">
              B.S. Information Technology, College of St. Catherine Quezon City.
            </p>

            <div className="grid lg:grid-cols-12 gap-16">
              <ol className="lg:col-span-8">
                {EXPERIENCE.map((e) => (
                  <li key={e.title} className="grid md:grid-cols-[9rem_1fr] gap-x-10 gap-y-1 pb-12 last:pb-0">
                    <p className="t-num text-2xl md:text-[1.7rem] md:text-right leading-tight pt-1">{e.years}</p>
                    <div className="md:thread md:pl-10 relative md:-ml-[1px]">
                      <span
                        aria-hidden="true"
                        className="hidden md:block absolute -left-[7px] top-3 w-3 h-3 rounded-full bg-paper border-2 border-ink"
                      />
                      <h3 className="font-display text-2xl md:text-[1.7rem] leading-tight mb-2">{e.title}</h3>
                      <p className="text-muted max-w-xl">{e.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="lg:col-span-4">
                <h3 className="text-muted text-[0.95rem] mb-4">Certificates and seminars</h3>
                <ul className="font-display text-[1.35rem] leading-snug space-y-3">
                  {CERTS.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ CONTACT */}
        <section id="contact" className="on-band bg-paper text-ink px-5 sm:px-10 py-24 md:py-32 scroll-mt-16 relative overflow-hidden">
          <div className="max-w-[88rem] mx-auto relative">
            <Postmark className="hidden sm:block absolute right-0 -top-4 md:top-0 w-44 md:w-64 h-auto rotate-[8deg]" />

            <h2 className="t-section max-w-[14ch] mb-8">Let's build something together</h2>
            <p className="text-muted max-w-md mb-12">
              Have a project in mind, or just want to talk shop? I'd like to hear from you.
            </p>

            <a
              href={`mailto:${PROFILE.email}`}
              className="link-u font-display block text-[clamp(1.25rem,5.4vw,3.75rem)] leading-tight tracking-tight break-words mb-12"
            >
              {PROFILE.email}
            </a>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={PROFILE.resumeUrl} download className="btn btn-solid">
                <Download size={17} strokeWidth={1.75} aria-hidden="true" />
                Download résumé
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link-u font-medium">
                GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link-u font-medium">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------ FOOTER */}
      <footer className="px-5 sm:px-10 py-8">
        <div className="max-w-[88rem] mx-auto flex flex-wrap justify-between gap-2 text-sm text-muted">
          <p>© 2026 {PROFILE.name}</p>
          <p>Set in Newsreader and Source Sans 3. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
