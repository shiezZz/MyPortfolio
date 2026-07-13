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

// ---------------------------------------------------------------------------
// CONTENT — edit the values below to update the site. No other code changes
// should be needed for day-to-day updates (new project, new link, etc).
// ---------------------------------------------------------------------------

const PROFILE = {
  name: "Kurt Lawrence J. Tolentino",
  firstName: "Kurt",
  role: "Full-Stack Developer / Mobile Developer",
  location: "Philippines",
  email: "kurtlawrence.tolentino@email.com", // TODO: replace with real email
  github: "https://github.com/shiezZz", // TODO: replace
  linkedin: "https://www.linkedin.com/in/kurt-tolentino-717275347/", // TODO: replace
  resumeUrl: "./resume.pdf", // TODO: replace with a real hosted PDF link
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

  // Themed class fragments, computed once per render.
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
      ? "bg-slate-800 text-slate-300 border-slate-700"
      : "bg-slate-100 text-slate-600 border-slate-200",
    cardHover: isDark ? "hover:border-blue-500/60" : "hover:border-blue-400",
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`${c.bg} ${c.text} min-h-screen font-sans transition-colors duration-300`}>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-blue-600 focus:text-white"
      >
        Skip to main content
      </a>

      {/* ------------------------------------------------------------ HEADER */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md ${c.headerBg}`}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo("home")}
              className="font-mono text-sm sm:text-base font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label="Go to home section"
            >
              <span className="text-blue-500">~/</span>kurt-tolentino
            </button>

            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Primary"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-2 text-sm rounded-md font-mono transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${c.mutedStrong} hover:text-blue-500`}
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

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            className={`md:hidden border-t ${c.border} ${c.bgAlt} px-5 py-3 flex flex-col gap-1`}
            aria-label="Mobile primary"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-2 py-2.5 rounded-md font-mono text-sm ${c.mutedStrong} hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        {/* ------------------------------------------------------------ HERO */}
        <section
          id="home"
          className="relative overflow-hidden px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28"
        >
          {/* subtle dot-grid backdrop, decorative only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(${isDark ? "#3b82f6" : "#2563eb"} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

  
          <div className="relative max-w-6xl mx-auto grid md:grid-cols-[3fr_2fr] gap-12 items-center">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-2">
              <img
                src="./prof-port.png"
                alt="Portrait of Kurt Lawrence J. Tolentino"
                className="hidden sm:block w-32 md:w-60 h-auto object-contain shrink-0"
              />
              <div>
                <p className="font-mono text-sm text-blue-500 mb-4">
                  Hi, my name is
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
                  {PROFILE.name}
                </h1>
              <p className={`text-lg sm:text-xl ${c.mutedStrong} mb-2`}>
                {PROFILE.role}
              </p>
              <p className={`${c.muted} mb-8 max-w-md leading-relaxed`}>
                I build web and mobile apps that solve real, everyday problems —
                from attendance systems to booking platforms. Friendly by
                nature, thorough by habit.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
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
              </div>
            </div>

            {/* Signature element: terminal window */}
            <div
              className={`rounded-xl border ${c.border} ${c.surface} shadow-xl overflow-hidden max-w-sm md:mx-0 mx-auto`}
              role="img"
              aria-label="Terminal window showing a simulated command line introduction of Kurt as a Full-Stack and Mobile Developer, currently open to new opportunities"
            >
              <div
                className={`flex items-center gap-1.5 px-4 py-3 border-b ${c.border}`}
              >
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className={`ml-3 font-mono text-xs ${c.muted}`}>
                  kurt@portfolio: ~
                </span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p className={c.muted}>
                  <span className="text-blue-500">kurt@portfolio</span>:~$ whoami
                </p>
                <p className="mb-3">{PROFILE.name}</p>

                <p className={c.muted}>
                  <span className="text-blue-500">kurt@portfolio</span>:~$ cat role.txt
                </p>
                <p className="mb-3">{PROFILE.role}</p>

                <p className={c.muted}>
                  <span className="text-blue-500">kurt@portfolio</span>:~$ cat status.txt
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  Open to new opportunities
                </p>
                <p className={`${c.muted} mt-2`}>
                  <span className="text-blue-500">kurt@portfolio</span>:~${" "}
                  <span className="inline-block w-2 h-4 bg-blue-500 align-middle motion-safe:animate-pulse motion-reduce:animate-none" />
                </p>
              </div>
            </div>
          
          </div>
        </section>

        {/* ------------------------------------------------------------ ABOUT */}
        <section
          id="about"
          className={`px-5 sm:px-8 py-16 sm:py-20 border-t ${c.border}`}
        >
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-sm text-blue-500 mb-2">01. About</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              A bit about me
            </h2>
            

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

              <div className="space-y-4">
                <div className={`flex items-start gap-3 p-4 rounded-lg border ${c.border} ${c.surface}`}>
                  <MapPin size={18} className="text-blue-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium">Based in</p>
                    <p className={`text-sm ${c.muted}`}>{PROFILE.location}</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 p-4 rounded-lg border ${c.border} ${c.surface}`}>
                  <Code2 size={18} className="text-blue-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium">Focus</p>
                    <p className={`text-sm ${c.muted}`}>Web & mobile development</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 p-4 rounded-lg border ${c.border} ${c.surface}`}>
                  <Sparkles size={18} className="text-blue-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium">Currently exploring</p>
                    <p className={`text-sm ${c.muted}`}>AI-assisted development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ SKILLS */}
        <section
          id="skills"
          className={`px-5 sm:px-8 py-16 sm:py-20 border-t ${c.border} ${c.bgAlt}`}
        >
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-sm text-blue-500 mb-2">02. Skills</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">
              Tools I work with
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {SKILL_GROUPS.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.label}
                    className={`p-5 rounded-lg border ${c.border} ${c.surface}`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Icon size={18} className="text-blue-500" aria-hidden="true" />
                      <h3 className="font-mono text-sm font-semibold">
                        {group.label}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-2" aria-label={`${group.label} skills`}>
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className={`px-3 py-1 rounded-full border text-xs font-mono ${c.tag}`}
                        >
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
        <section
          id="projects"
          className={`px-5 sm:px-8 py-16 sm:py-20 border-t ${c.border}`}
        >
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-sm text-blue-500 mb-2">03. Projects</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">
              Things I've built
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className={`flex flex-col p-5 rounded-lg border ${c.border} ${c.surface} transition-colors ${c.cardHover}`}
                >
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className={`text-sm ${c.muted} leading-relaxed mb-4 flex-1`}>
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 mb-4" aria-label={`Technologies used in ${project.title}`}>
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono border ${c.tag}`}
                      >
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
        <section
          id="contact"
          className={`px-5 sm:px-8 py-16 sm:py-24 border-t ${c.border} ${c.bgAlt}`}
        >
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-sm text-blue-500 mb-2">04. Contact</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Let's build something together
            </h2>
            <p className={`${c.muted} mb-10`}>
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
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
        <div className={`max-w-5xl mx-auto text-center text-xs font-mono ${c.muted}`}>
          © 2026 {PROFILE.name} — Built with React & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
