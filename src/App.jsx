import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  BrainCircuit,
  Code2,
  Database,
  FileText,
  GraduationCap,
  Lightbulb,
  Menu,
  Moon,
  Rocket,
  Sun,
  Terminal,
  X,
} from "lucide-react";

const navItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Vision", href: "#vision" },
];

const skills = [
  "NEXT.JS",
  "PYTHON",
  "FastAPI",
  "API DEVELOPMENT",
  "REACT.JS",
  "JavaScript",
  "MongoDB",
];

const projectLinks = [
  {
    id: "atl-innovation",
    title: "ATL Innovation",
    url: "https://atlinnovationchuru.com/",
    category: "Innovation Platform",
    description:
      "A modern platform showcasing startup and innovation-driven initiatives in the region.",
    icon: BrainCircuit,
  },
  {
    id: "3r",
    title: "3R",
    url: "https://www.3rinnovationchuru.com/",
    category: "Sustainability",
    description:
      "A clean, purpose-led digital presence focused on impact-driven initiatives and growth.",
    icon: Rocket,
  },
  {
    id: "salasar-tourist-portal",
    title: "Salasar Tourist Portal",
    url: "https://www.salasarbalajichuru.com/",
    category: "Tourism Portal",
    description:
      "An informative tourism experience designed to help visitors explore destinations with ease.",
    icon: Database,
  },
  {
    id: "digihap",
    title: "Digital Heat Action Portal (DigiHAP)",
    url: "https://www.digihapchuru.com/",
    category: "Public Service",
    description:
      "A civic technology portal focused on heat-risk awareness and public information delivery.",
    icon: FileText,
  },
  {
    id: "sports-portal",
    title: "Sports Portal",
    url: "https://www.ekpanchayatekkhelchuru.in/",
    category: "Sports Platform",
    description:
      "A community-driven sports portal built to support local participation and engagement.",
    icon: BriefcaseBusiness,
  },
  {
    id: "rero-surfaces",
    title: "ReRo Surfaces",
    url: "https://rerosurfaces.com/",
    category: "Business Website",
    description:
      "A polished brand site for a surfaces and materials business with a premium digital feel.",
    icon: Sun,
  },
  {
    id: "gajbala",
    title: "Gajbala",
    url: "https://www.gajbala.com/",
    category: "Brand Presence",
    description:
      "A refined web experience built to strengthen brand visibility and trust online.",
    icon: Code2,
  },
];

const journeyCards = [
  {
    number: "01",
    title: "WHERE IT ALL BEGAN",
    icon: GraduationCap,
    paragraphs: [
      "My coding journey began during Class 12 through Code Churu, a coding initiative launched by the district administration in collaboration with CodeYogi. Through this program, I got my first opportunity to explore programming and understand how technology can be used to build real-world solutions.",
      "I started learning web development and programming, gradually developing an interest in building websites, applications, and software products. Since then, I have continued exploring different technologies, working on practical projects, and strengthening my programming skills. I believe in learning by building and turning ideas into meaningful digital solutions.",
    ],
  },
  {
    number: "02",
    title: "FROM LEARNING TO BUILDING",
    icon: Terminal,
    paragraphs: [
      "After getting introduced to coding through Code Churu, I continued my learning journey by exploring various programming languages, frameworks, and development tools.",
      "I started working with technologies like Python, JavaScript, React, and Next.js to understand software development and build interactive web applications. Along the way, I also explored backend development, APIs, and database technologies, gradually developing an understanding of how complete software applications work. My focus has always been on improving my skills through hands-on learning and practical implementation.",
    ],
  },
];

const infoCards = [
  {
    title: "ABOUT ME",
    icon: FileText,
    text: "I'm Mayank Sharma from Churu, Rajasthan. I have completed my Class 12 education in the Arts stream and I'm currently pursuing a Bachelor of Science (BS) in Data Science and Applications from the Indian Institute of Technology Madras (IIT Madras).",
  },
  {
    title: "MY INTEREST & PASSION",
    icon: Lightbulb,
    text: "I have a strong interest in technology, programming, and software development. I enjoy learning new technologies, solving problems through code, and building practical projects.",
  },
  {
    title: "MY SKILLS",
    icon: Code2,
    skillTags: skills,
  },
];

const goals = [
  "Build impactful software products that solve real-world challenges.",
  "Deepen my knowledge in data science, AI, and modern web development.",
  "Create practical solutions that combine technology with meaningful user value.",
  "Grow into an entrepreneur who builds products with innovation and purpose.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function ProjectCard({ project, index, prefersReducedMotion }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <div className="group flex h-full flex-col rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--theme-accent)] focus-within:border-[var(--theme-accent)]">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-secondary)] text-[var(--theme-accent)]">
            <Icon size={20} />
          </div>
          <span className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-secondary)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--theme-secondary-text)]">
            {project.category}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-bold tracking-[-0.04em] text-[var(--theme-text)]">
          {project.title}
        </h3>

        <p className="mb-5 flex-1 text-sm leading-7 text-[var(--theme-secondary-text)]">
          {project.description}
        </p>

        <div className="mt-auto">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} website`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-secondary)] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--theme-text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)]"
          >
            Visit Website
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  const prefersReducedMotion = useReducedMotion();
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("ms-theme");
    return stored || "dark";
  });
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToSection = (sectionId, event) => {
    if (event) event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerHeight = document.querySelector("header")?.offsetHeight ?? 72;
    const top =
      section.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("ms-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection((current) =>
            current !== visible.target.id ? visible.target.id : current,
          );
        }
      },
      {
        root: null,
        threshold: [0.15, 0.3, 0.6],
        rootMargin: "-10% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (event, href) => {
    const targetId = href.replace("#", "");
    scrollToSection(targetId, event);
  };

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const navBackground =
    theme === "dark" ? "rgba(16,24,32,0.78)" : "rgba(245,243,238,0.8)";

  return (
    <div className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] transition-colors duration-300">
      <header
        className="sticky top-0 z-50 border-b border-[var(--theme-border)] backdrop-blur-md"
        style={{ background: navBackground }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#introduction"
            onClick={(event) => handleNavClick(event, "#introduction")}
            className="group inline-flex items-center gap-2 text-lg font-extrabold tracking-[-0.06em] text-[var(--theme-text)] transition-transform duration-300 hover:-translate-y-0.5"
            aria-label="Go to introduction"
          >
            <span>MS</span>
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--theme-accent)] shadow-[0_0_14px_rgba(213,185,140,0.45)] transition-transform duration-300 group-hover:scale-125" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-[var(--theme-text)]"
                    : "text-[var(--theme-secondary-text)] hover:text-[var(--theme-text)]"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[var(--theme-accent)]" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setTheme((prev) => (prev === "dark" ? "light" : "dark"))
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--theme-accent)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] md:hidden"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-[var(--theme-border)] bg-[var(--theme-secondary)] px-4 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "bg-[var(--theme-card)] text-[var(--theme-text)]"
                      : "text-[var(--theme-secondary-text)] hover:bg-[var(--theme-card)] hover:text-[var(--theme-text)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <motion.section
          id="introduction"
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          variants={sectionReveal}
          className="scroll-mt-[6rem] py-8 md:py-14"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--theme-secondary-text)]">
                PERSONAL PORTFOLIO
              </p>

              <div className="space-y-3">
                <h1 className="text-4xl font-extrabold tracking-[-0.06em] text-[var(--theme-text)] sm:text-5xl xl:text-[4rem]">
                  Mayank Sharma
                </h1>
                <p className="text-base font-medium uppercase tracking-[0.18em] text-[var(--theme-accent)] sm:text-lg">
                  Technology Enthusiast | Software Development | Data Science
                </p>
              </div>

              <p className="max-w-xl text-base leading-7 text-[var(--theme-secondary-text)] sm:text-lg">
                I'm Mayank Sharma from Churu, Rajasthan. I have completed my
                Class 12 education in the Arts stream and I'm currently pursuing
                a Bachelor of Science (BS) in Data Science and Applications from
                the Indian Institute of Technology Madras (IIT Madras).
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#projects"
                  onClick={(event) => handleNavClick(event, "#projects")}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--theme-accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--theme-button-text)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore My Work <ArrowUpRight size={16} />
                </a>
                <a
                  href="#journey"
                  onClick={(event) => handleNavClick(event, "#journey")}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--theme-text)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  My Journey
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 18, scale: 0.98 }
              }
              animate={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 1, y: 0, scale: 1 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto w-full max-w-lg"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <img
                  src="/image.png"
                  alt="Mayank Sharma"
                  className="h-[520px] w-full rounded-[1.25rem] object-cover object-center"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {infoCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={prefersReducedMotion ? false : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                className="rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 shadow-[0_8px_20px_rgba(15,23,42,0.03)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-secondary)] text-[var(--theme-accent)]">
                  <card.icon size={18} />
                </div>

                <h2 className="mb-3 text-lg font-semibold uppercase tracking-[0.08em] text-[var(--theme-text)]">
                  {card.title}
                </h2>

                {card.skillTags ? (
                  <div className="flex flex-wrap gap-2">
                    {card.skillTags.map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => {
                          const introSkillsSection =
                            document.getElementById("introduction");
                          if (introSkillsSection) {
                            introSkillsSection.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }}
                        className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-secondary)] px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--theme-text)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-7 text-[var(--theme-secondary-text)]">
                    {card.text}
                  </p>
                )}
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="journey"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="scroll-mt-[6rem] py-16 md:py-20"
        >
          <div className="mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--theme-secondary-text)]">
              MY CODING JOURNEY
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl md:grid md:grid-cols-[1fr_3.5rem_1fr] md:gap-y-8">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--theme-border)] md:block" />

            {journeyCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={prefersReducedMotion ? false : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative ${
                  index % 2 === 0
                    ? "md:col-start-1 md:row-start-1 md:pr-8"
                    : "md:col-start-3 md:row-start-1 md:pl-8"
                }`}
              >
                <div className="h-full w-full rounded-[1.6rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-secondary)] text-[var(--theme-accent)]">
                        {index === 0 ? (
                          <GraduationCap size={18} />
                        ) : (
                          <Terminal size={18} />
                        )}
                      </div>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--theme-secondary-text)]">
                        {card.number}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--theme-secondary-text)]">
                      Milestone
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-bold uppercase tracking-[0.08em] text-[var(--theme-text)]">
                    {card.title}
                  </h3>

                  <div className="space-y-4 text-base leading-7 text-[var(--theme-secondary-text)]">
                    {card.paragraphs.map((paragraph, itemIndex) => (
                      <p key={`${card.title}-${itemIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}

            <div className="hidden md:flex md:col-start-2 md:row-start-1 md:items-center md:justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-secondary)] text-sm font-bold text-[var(--theme-accent)] shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                02
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <motion.article
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              className="mx-auto max-w-5xl rounded-[1.6rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-secondary)] text-[var(--theme-accent)]">
                    <Code2 size={18} />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--theme-secondary-text)]">
                    TOOLKIT
                  </span>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--theme-secondary-text)]">
                  Explore My Toolkit
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => {
                      const introSection =
                        document.getElementById("introduction");
                      if (introSection) {
                        introSection.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-secondary)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--theme-text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
                  >
                    {skill}
                  </button>
                ))}
              </div>

              <p className="text-base leading-7 text-[var(--theme-secondary-text)]">
                I continue to build with tools that support practical
                development, data-driven thinking, and product-focused problem
                solving.
              </p>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionReveal}
          className="scroll-mt-[6rem] py-16 md:py-20"
        >
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--theme-secondary-text)]">
              PROJECTS AND PRACTICAL EXPERIENCE
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <motion.a
              href="https://www.vultusgo.in/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              className="group block rounded-[1.8rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-200 hover:border-[var(--theme-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)]"
              aria-label="Open Vultus Go website"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-secondary)] text-[var(--theme-accent)]">
                  <BrainCircuit size={20} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--theme-secondary-text)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <h3 className="mb-3 text-2xl font-bold tracking-[-0.06em] text-[var(--theme-text)]">
                VULTUS GO
              </h3>
              <p className="text-base leading-7 text-[var(--theme-secondary-text)]">
                We have now started Vultus Go, a technology startup focused on
                developing and innovating face-recognition-based technologies.
              </p>
            </motion.a>

            <motion.a
              href="https://dev.vultusgo.in/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              className="group block rounded-[1.8rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-200 hover:border-[var(--theme-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)]"
              aria-label="Open RJ TechForce website"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-secondary)] text-[var(--theme-accent)]">
                  <BriefcaseBusiness size={20} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--theme-secondary-text)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <h3 className="mb-3 text-2xl font-bold tracking-[-0.06em] text-[var(--theme-text)]">
                RJ TECHFORCE
              </h3>
              <p className="text-base leading-7 text-[var(--theme-secondary-text)]">
                After learning coding, we established RJ TechForce, a web
                development agency where we build websites and applications for
                different needs.
              </p>
            </motion.a>
          </div>

          <div className="mt-12">
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--theme-secondary-text)]">
                MY PROJECTS
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projectLinks.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="vision"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionReveal}
          className="scroll-mt-[6rem] py-16 md:py-20"
        >
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--theme-secondary-text)]">
              FUTURE VISION & GOALS
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.95fr]">
            <motion.article
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              className="rounded-[1.8rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-accent)]">
                <Lightbulb size={18} />
              </div>
              <h3 className="mb-3 text-xl font-bold uppercase tracking-[0.08em] text-[var(--theme-text)]">
                MY VISION
              </h3>
              <p className="max-w-2xl text-base leading-7 text-[var(--theme-secondary-text)]">
                My vision is to become a skilled technology professional who can
                build innovative products and solve real-world problems through
                technology. I want to combine software development, data
                science, and artificial intelligence to create solutions that
                make a meaningful impact.
              </p>
            </motion.article>

            <motion.article
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              className="rounded-[1.8rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-accent)]">
                <Rocket size={18} />
              </div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-[0.08em] text-[var(--theme-text)]">
                MY FUTURE GOALS
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {goals.map((goal, index) => (
                  <div
                    key={goal}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-secondary)] p-3 text-sm leading-6 text-[var(--theme-secondary-text)] transition-colors duration-200 hover:border-[var(--theme-accent)]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--theme-number-bg)] text-[9px] font-bold text-[var(--theme-number)]">
                      {index + 1}
                    </span>
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>

          <motion.article
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            className="mt-5 rounded-[1.8rem] border border-[var(--theme-border)] bg-[linear-gradient(135deg,var(--theme-card),var(--theme-secondary))] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-accent)]">
              <Database size={18} />
            </div>
            <h3 className="mb-3 text-xl font-bold uppercase tracking-[0.08em] text-[var(--theme-text)]">
              MY LONG-TERM AMBITION
            </h3>
            <p className="max-w-4xl text-base leading-7 text-[var(--theme-secondary-text)]">
              My long-term ambition is to build successful technology-driven
              companies that create innovative products and solve meaningful
              real-world problems. I aspire to become an entrepreneur who
              combines technical knowledge, creativity, and innovation to make a
              positive impact.
            </p>
          </motion.article>
        </motion.section>
      </main>

      <footer className="border-t border-[var(--theme-border)] bg-[var(--theme-secondary)] py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm text-[var(--theme-secondary-text)] sm:px-6 lg:px-8">
          <p>© {currentYear} Mayank Sharma</p>
          <a
            href="#introduction"
            onClick={(event) => handleNavClick(event, "#introduction")}
            className="inline-flex items-center gap-2 text-[var(--theme-text)] hover:text-[var(--theme-accent)]"
          >
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] shadow-[0_8px_22px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--theme-accent)] ${
          showBackToTop
            ? "opacity-100 visible"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}

export default App;
