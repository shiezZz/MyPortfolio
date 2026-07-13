import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  Code2,
  Smartphone,
  Database,
  Wrench,
  MapPin,
  Sparkles,
} from "lucide-react";


const PROFILE = {
  name: "Kurt Lawrence J. Tolentino",
  firstName: "Kurt",
  role: "Full-Stack Developer / Mobile Developer",
  location: "Philippines",
  email: "kurtlawrence.tolentino@email.com",
  github: "https://github.com/shiezZz",
  linkedin: "https://www.linkedin.com/in/kurt-tolentino-717275347/",
  resumeUrl: "./resume.pdf",
};

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SKILL_GROUPS = [
  {
    label: "Languages",
    icon: Code2,
    items: ["Python", "Java", "JavaScript", "TypeScript", "Dart"],
  },
  {
    label: "Web",
    icon: Smartphone,
    items: ["HTML", "CSS", "React"],
  },
  {
    label: "Data & Backend",
    icon: Database,
    items: ["MySQL", "Firebase", "NEON"],
  },
  {
    label: "Tools & Platforms",
    icon: Wrench,
    items: ["GitHub", "MCP", "Claude", "Android Studio"],
  },
];

const PROJECTS = [
  {
    title: "CSCQC Attendance Mobile App",
    description:
      "A mobile attendance app that uses biometric authentication and QR code scanning, with live camera capture to verify time-in and time-out — built to replace manual attendance logging.",
    tags: ["Mobile", "Biometrics", "QR Code", "Firebase"],
    githubUrl: "https://github.com/shiezZz/Faculty_Attendance_App.git",
    liveUrl: "",
  },
  {
    title: "StaycationHavenPH",
    description:
      "A partnership module for a staycation booking platform that lets individual unit owners list their own properties, so guests can browse and book stays directly on the site.",
    tags: ["Web", "Booking System", "NEON", "Full-Stack"],
    githubUrl: "https://github.com/StaycationWebsite/Staycation.git",
    liveUrl: "https://www.staycationhavenph.com/",
  },
  {
    title: "Flipbook — Panitikan Project",
    description:
      "An interactive flipbook that brings Philippine mythical creatures to life, built to make learning Filipino folklore more engaging for students.",
    tags: ["Web", "Interactive UI", "Education"],
    githubUrl: "https://github.com/shiezZz/Panitikan",
    liveUrl: "#",
  },
];

const QUICK_FACTS = [
  { icon: MapPin, label: "Based in", value: PROFILE.location },
  { icon: Code2, label: "Focus", value: "Web & mobile development" },
  { icon: Sparkles, label: "Currently exploring", value: "AI-assisted development" },
];

// ---------------------------------------------------------------------------

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [menuOpen]);

  const c = {
    bg: isDark ? "bg-slate-950" : "bg-slate-50",
    bgAlt: isDark ? "bg-slate-900" : "bg-white",
    surface: isDark ? "bg-slate-900" : "bg-white",
    border: isDark ? "border-slate-800" : "border-slate-200",
    text: isDark ? "text-slate-100" : "text-slate-900",
    muted: isDark ? "text-slate-400" : "text-slate-500",
    mutedStrong: isDark ? "text-slate-300" : "text-slate-600",
    headerBg: isDark
      ? "bg-slate-950/80 border-slate-800"
      : "bg-slate-50/80 border-slate-200",
    tag: isDark
      ? "bg-blue-500/10 text-blue-300"
      : "bg-blue-50 text-blue-700",
    chipBg: isDark
      ? "bg-slate-900 border-slate-700 text-slate-200"
      : "bg-white border-slate-200 text-slate-700",
    cardHover: isDark ? "hover:border-blue-500/60" : "hover:border-blue-400",
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const SectionEyebrow = ({ label }) => (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-8 h-px bg-blue-500" aria-hidden="true" />
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500">
        {label}
      </p>
    </div>
  );

  return (
    <div className={`${c.bg} ${c.text} min-h-screen font-sans transition-colors duration-300`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-blue-600 focus:text-white"
      >
        Skip to main content
      </a>

      {/* ------------------------------------------------------------ HEADER */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-md ${c.headerBg}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label="Go to home section"
            >
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                KT
              </span>
              <span className="text-sm font-semibold tracking-tight hidden sm:inline">
                Kurt Tolentino
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-2 text-sm rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${c.mutedStrong} hover:text-blue-500`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={`p-2 rounded-md border ${c.border} ${c.mutedStrong} hover:text-blue-500 hover:border-blue-500/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
              >
                {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`md:hidden p-2 rounded-md border ${c.border} ${c.mutedStrong} focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <nav
            className={`md:hidden border-t ${c.border} ${c.bgAlt} px-5 py-3 flex flex-col gap-1`}
            aria-label="Mobile primary"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-2 py-2.5 rounded-md text-sm font-medium ${c.mutedStrong} hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        {/* ------------------------------------------------------------ HERO */}
        <section id="home" className="relative overflow-hidden px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `radial-gradient(${isDark ? "#3b82f6" : "#2563eb"} 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-[6fr_5fr] gap-16 items-center">
            {/* Left: intro */}
            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-500 mb-4">
                {PROFILE.role}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5">
                Hi, I'm {PROFILE.firstName} — nice to meet you.
              </h1>
              <p className={`${c.muted} mb-8 max-w-md leading-relaxed`}>
                I build web and mobile apps that solve real, everyday problems —
                from attendance systems to booking platforms. Friendly by
                nature, thorough by habit.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                >
                  View my work
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className={`px-5 py-2.5 rounded-md border text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${c.border} ${c.text} hover:border-blue-500/60`}
                >
                  Get in touch
                </button>
              </div>

              <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm ${c.muted}`}>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-blue-500" aria-hidden="true" />
                  {PROFILE.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Code2 size={14} className="text-blue-500" aria-hidden="true" />
                  Web & Mobile
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
                  Open to work
                </span>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div
                aria-hidden="true"
                className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-25 bg-blue-500"
              />
              <div className="relative">
                <img
                  src="./prof-port.png"
                  alt="Portrait of Kurt Lawrence J. Tolentino"
                  className="relative w-56 sm:w-72 md:w-80 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ ABOUT */}
        <section id="about" className={`px-5 sm:px-8 py-16 sm:py-20 border-t ${c.border}`}>
          <div className="max-w-5xl mx-auto">
            <SectionEyebrow label="About" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">A bit about me</h2>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <p className={`${c.mutedStrong} leading-relaxed mb-4`}>
                  I'm a full-stack and mobile developer who enjoys turning
                  everyday problems into simple, working software — from
                  biometric attendance systems to booking platforms and
                  interactive learning tools. I like clean code, clear UI,
                  and figuring out how the pieces fit together, whether
                  that's a database schema or a QR scanner.
                </p>
                <p className={`${c.mutedStrong} leading-relaxed`}>
                  When I'm not building something, I'm usually learning a
                  new tool or exploring how AI can fit into the developer
                  workflow — including things like MCP and working
                  alongside Claude.
                </p>
              </div>

              <div className="space-y-5">
                {QUICK_FACTS.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex items-start gap-3 border-l-2 border-blue-500/30 pl-4">
                      <Icon size={16} className="text-blue-500 mt-1 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium">{fact.label}</p>
                        <p className={`text-sm ${c.muted}`}>{fact.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ SKILLS */}
        <section id="skills" className={`px-5 sm:px-8 py-16 sm:py-20 border-t ${c.border} ${c.bgAlt}`}>
          <div className="max-w-5xl mx-auto">
            <SectionEyebrow label="Skills" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">Tools I work with</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {SKILL_GROUPS.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.label} className={`p-5 rounded-lg border ${c.border} ${c.surface}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <Icon size={17} className="text-blue-500" aria-hidden="true" />
                      <h3 className="text-sm font-semibold">{group.label}</h3>
                    </div>
                    <ul className="flex flex-wrap gap-2" aria-label={`${group.label} skills`}>
                      {group.items.map((item) => (
                        <li key={item} className={`px-3 py-1 rounded-full text-xs font-medium ${c.tag}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ PROJECTS */}
        <section id="projects" className={`px-5 sm:px-8 py-16 sm:py-20 border-t ${c.border}`}>
          <div className="max-w-5xl mx-auto">
            <SectionEyebrow label="Projects" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">Things I've built</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className={`flex flex-col p-5 rounded-lg border ${c.border} ${c.surface} transition-colors ${c.cardHover}`}
                >
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className={`text-sm ${c.muted} leading-relaxed mb-4 flex-1`}>{project.description}</p>

                  <ul className="flex flex-wrap gap-1.5 mb-4" aria-label={`Technologies used in ${project.title}`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${c.tag}`}>
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-4 pt-3 border-t ${c.border}`}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      <Github size={16} aria-hidden="true" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                        Live demo
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ CONTACT */}
        <section id="contact" className={`px-5 sm:px-8 py-16 sm:py-24 border-t ${c.border} ${c.bgAlt}`}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center">
              <SectionEyebrow label="Contact" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's build something together</h2>
            <p className={`${c.muted} mb-10`}>
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Mail size={16} aria-hidden="true" />
                Say hello
              </a>
              <a
                href={PROFILE.resumeUrl}
                download
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md border text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${c.border} ${c.text} hover:border-blue-500/60`}
              >
                <Download size={16} aria-hidden="true" />
                Download resume
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kurt's GitHub profile"
                className={`p-3 rounded-full border ${c.border} ${c.mutedStrong} hover:text-blue-500 hover:border-blue-500/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kurt's LinkedIn profile"
                className={`p-3 rounded-full border ${c.border} ${c.mutedStrong} hover:text-blue-500 hover:border-blue-500/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email Kurt"
                className={`p-3 rounded-full border ${c.border} ${c.mutedStrong} hover:text-blue-500 hover:border-blue-500/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------ FOOTER */}
      <footer className={`px-5 sm:px-8 py-8 border-t ${c.border}`}>
        <div className={`max-w-5xl mx-auto text-center text-xs ${c.muted}`}>
          © 2026 {PROFILE.name} — Built with React & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
