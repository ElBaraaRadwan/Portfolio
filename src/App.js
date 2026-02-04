import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code,
  Cloud,
  TestTube,
  Briefcase,
  Menu,
  X,
  Layers,
  Settings,
  CheckCircle,
  Boxes,
  Workflow,
  Package,
} from "lucide-react";
import "./animations.css";

// Navbar component
function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-light-about/95 dark:bg-dark-about/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div
            className={`flex items-center transition-all duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="#home"
              className="text-xl font-bold text-light-text-heading dark:text-dark-text-heading hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors duration-300"
            >
              <span className="text-light-accent-primary dark:text-dark-accent-primary">
                {"<"}
              </span>
              El-Baraa Samir
              <span className="text-light-accent-primary dark:text-dark-accent-primary">
                {" />"}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-light-accent-primary dark:text-dark-accent-primary"
                    : "text-light-text-body dark:text-dark-text-body hover:text-light-accent-primary dark:hover:text-dark-accent-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-light-accent-primary dark:bg-dark-accent-primary transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-light-text-heading dark:text-dark-text-heading hover:bg-light-accent-primary/10 dark:hover:bg-dark-accent-primary/10 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 text-light-accent-primary dark:text-dark-accent-primary"
                      : "text-light-text-body dark:text-dark-text-body hover:bg-light-accent-primary/5 dark:hover:bg-dark-accent-primary/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Theme toggle component
function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-accent-primary/20 dark:bg-dark-accent-primary/20 hover:bg-light-accent-primary/30 dark:hover:bg-dark-accent-primary/30 text-light-text-heading dark:text-dark-text-heading shadow-lg transition-all duration-300 hover:shadow-light-accent-primary/20 dark:hover:shadow-dark-accent-primary/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-light-accent-primary dark:focus:ring-dark-accent-primary focus:ring-offset-2"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}

// Section toggle component
function SectionToggle({ activeSection, onSectionChange }) {
  const sections = [
    { id: "skills", label: "Tech Stack" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="flex justify-center mb-16">
      <div className="bg-light-about dark:bg-dark-about rounded-lg shadow-lg p-1 inline-flex gap-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-light-accent-primary dark:focus:ring-dark-accent-primary focus:ring-offset-2 relative ${
              activeSection === section.id
                ? "bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary text-white shadow-md"
                : "text-light-text-body dark:text-dark-text-body hover:text-light-text-heading dark:hover:text-dark-text-heading hover:bg-light-accent-primary/10 dark:hover:bg-dark-accent-primary/10"
            }`}
            role="tab"
          >
            {section.label}
            {activeSection === section.id && (
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-white animate-border-slide" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// Helper to check for reduced motion preference
const prefersReducedMotion = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Skills section component with new category structure
function SkillsSection({ isVisible, getAnimationClass }) {
  const motionClass = prefersReducedMotion()
    ? ""
    : "transition-all duration-500 ease-out";

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
      textColor: "text-yellow-800 dark:text-yellow-200",
      iconBg: "bg-yellow-600",
      skills: ["TypeScript", "JavaScript (ES6+)", "SQL"],
    },
    {
      title: "Testing",
      icon: <TestTube size={24} />,
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/20",
      textColor: "text-pink-800 dark:text-pink-200",
      iconBg: "bg-pink-600",
      skills: [
        "Jest (Unit, Integration, E2E)",
        "TDD",
        "Postman",
        "OpenAPI/Swagger",
      ],
    },
    {
      title: "Back-End",
      icon: <Server size={24} />,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
      textColor: "text-green-800 dark:text-green-200",
      iconBg: "bg-green-600",
      skills: ["NodeJS", "ExpressJS", "NestJS"],
    },
    {
      title: "ORMs",
      icon: <Layers size={24} />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      textColor: "text-purple-800 dark:text-purple-200",
      iconBg: "bg-purple-600",
      skills: ["Prisma", "TypeORM", "Mongoose"],
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      textColor: "text-blue-800 dark:text-blue-200",
      iconBg: "bg-blue-600",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis (Caching/Messaging)"],
    },
    {
      title: "Infrastructure",
      icon: <Cloud size={24} />,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
      textColor: "text-orange-800 dark:text-orange-200",
      iconBg: "bg-orange-600",
      skills: [
        "AWS (S3, EC2, Lambda)",
        "Docker",
        "Kubernetes",
        "CI/CD (GitHub Actions)",
        "Nginx",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-8 about-bg relative overflow-hidden ${motionClass} ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-light-accent-primary/5 dark:from-dark-accent-primary/5 to-transparent opacity-70"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 ${getAnimationClass(
            "skills",
            "animate-fade-in",
          )}`}
        >
          <h2 className="text-4xl font-bold mb-4 text-light-text-heading dark:text-dark-text-heading">
            <span className="text-light-accent-primary dark:text-dark-accent-primary">
              {"<"}
            </span>{" "}
            Tech Stack{" "}
            <span className="text-light-accent-primary dark:text-dark-accent-primary">
              {"/>"}
            </span>
          </h2>
          <div className="h-1 w-24 bg-light-accent-primary dark:bg-dark-accent-primary mx-auto rounded-full"></div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${getAnimationClass("skills", "animate-fade-in-up")}`}
              style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="bg-light-about dark:bg-dark-about rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-light-accent-primary dark:border-dark-accent-primary">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg shadow-md flex items-center justify-center text-white`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-light-text-heading dark:text-dark-text-heading">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${category.bgColor} ${category.textColor} px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:scale-102 hover:shadow-md`}
                    >
                      <CheckCircle size={16} className="flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience section component (OLD ROADMAP STYLE)
function ExperienceSection({ isVisible, getAnimationClass }) {
  const motionClass = prefersReducedMotion()
    ? ""
    : "transition-all duration-500 ease-out";

  const experiences = [
    {
      title: "Product & Platform Engineer",
      type: "Contract",
      company: "Remote",
      period: "Feb 2024 – Present",
      icon: <Briefcase size={20} />,
      achievements: [
        "Architected and deployed enterprise-grade web applications with modular, high-performance designs",
        "Designed REST & GraphQL APIs to improve data access efficiency",
        "Built multi-tenant database architectures ensuring scalability and transactional integrity",
        "Led deployment automation using containerized environments and CI/CD pipelines",
        "Implemented secure payment workflows for settlements, commissions, and marketplace-style transactions",
      ],
    },
    {
      title: "Software Engineering & Embedded Systems",
      type: "Training",
      company: "AITC MUST",
      period: "May 2022 – Jul 2022",
      icon: <Settings size={20} />,
      achievements: [
        "Online Attendance System: Automated solution using face recognition and fingerprints, reducing staff processing time by 30%",
        "Home Automation: Developed hardware-software integrated control system for load management (HVAC/Media)",
      ],
    },
    {
      title: "Full Stack (MERN) Internship",
      type: "Internship",
      company: "Khtwah",
      period: "2022",
      icon: <Code size={20} />,
      achievements: [
        "Developed secure RESTful APIs with JWT authentication and session management",
        "Collaborated on containerization strategies using Docker for reliable microservices deployment",
        "Conducted Jest testing achieving 85% code coverage, reducing production bugs",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 px-8 about-bg relative overflow-hidden ${motionClass} ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 hidden"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 ${getAnimationClass(
            "experience",
            "animate-fade-in",
          )}`}
        >
          <h2 className="text-4xl font-bold mb-4 text-light-text-heading dark:text-dark-text-heading">
            <span className="text-light-accent-primary dark:text-dark-accent-primary">
              {"<"}
            </span>{" "}
            Professional Experience{" "}
            <span className="text-light-accent-primary dark:text-dark-accent-primary">
              {"/>"}
            </span>
          </h2>
          <div className="h-1 w-24 bg-light-accent-primary dark:bg-dark-accent-primary mx-auto rounded-full"></div>
        </div>

        {/* Timeline Layout (OLD STYLE) */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-light-accent-primary/30 dark:bg-dark-accent-primary/30 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } ${getAnimationClass("experience", "animate-fade-in-up")}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Content */}
              <div className="w-full md:w-5/12 mb-4 md:mb-0">
                <div className="bg-light-about dark:bg-dark-about p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-light-accent-primary dark:border-dark-accent-primary">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 rounded-lg flex items-center justify-center text-light-accent-primary dark:text-dark-accent-primary">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-light-text-heading dark:text-dark-text-heading">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="text-light-accent-primary dark:text-dark-accent-primary font-semibold">
                          {exp.type}
                        </span>
                        <span className="text-light-text-body dark:text-dark-text-body">
                          •
                        </span>
                        <span className="text-light-text-body dark:text-dark-text-body">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-light-text-body dark:text-dark-text-body mb-3">
                    {exp.period}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-sm text-light-text-body dark:text-dark-text-body flex items-start gap-2"
                      >
                        <CheckCircle
                          size={14}
                          className="text-light-accent-primary dark:text-dark-accent-primary mt-0.5 flex-shrink-0"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline dot (desktop only) */}
              <div className="hidden md:flex w-2/12 justify-center">
                <div className="z-20 flex items-center justify-center w-10 h-10 bg-light-accent-primary dark:bg-dark-accent-primary rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects section component with detailed achievements
function ProjectsSection({ isVisible, getAnimationClass }) {
  const motionClass = prefersReducedMotion()
    ? ""
    : "transition-all duration-500 ease-out";

  const projects = [
    {
      title: "The Kitchen",
      subtitle: "Multi-Branch Logistics Ecosystem",
      color: "from-blue-500 to-purple-600",
      icon: <Workflow size={24} />,
      tags: ["Socket.io", "NestJS", "Real-time", "Multi-tenant"],
      achievements: [
        "Architected a real-time Kitchen Display System (KDS) using Socket.io for instant order syncing, eliminating manual entry errors and reducing food prep delays",
        "Implemented a multi-branch control dashboard, allowing centralized menu and inventory management across 10+ locations",
      ],
    },
    {
      title: "Trouble Ticketing System",
      subtitle: "High-Concurrency State Engine",
      color: "from-green-500 to-teal-600",
      icon: <Settings size={24} />,
      tags: ["NestJS", "PostgreSQL", "State Machine", "Concurrency"],
      achievements: [
        "Developed a state-persistent ticketing backend with optimistic concurrency control, preventing race conditions during simultaneous agent assignments",
        "Engineered an automated SLA escalation engine, prioritizing high-impact issues through real-time priority queues",
      ],
    },
    {
      title: "Movie Reservation System",
      subtitle: "Transactional Seat Management",
      color: "from-orange-500 to-red-600",
      icon: <Package size={24} />,
      tags: ["Transactions", "QR Codes", "NestJS", "Redis"],
      achievements: [
        "Designed an atomic booking pipeline that ensures seat availability and prevents double-booking during high-traffic spikes",
        "Integrated encrypted, time-sensitive QR code generation for secure digital ticketing and fraud prevention",
      ],
    },
    {
      title: "Smart Basket",
      subtitle: "Optimized E-commerce API",
      color: "from-pink-500 to-rose-600",
      icon: <Boxes size={24} />,
      tags: ["Redis", "Indexing", "E-commerce", "Performance"],
      achievements: [
        "Boosted conversion rates by optimizing the 'Add-to-Basket' experience with a distributed session store in Redis, maintaining seamless state across platforms",
        "Managed multi-vendor catalog indexing, improving search response times by 35% through database indexing and multi-layer caching",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-8 about-bg relative overflow-hidden ${motionClass} ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 hidden"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 ${getAnimationClass(
            "projects",
            "animate-fade-in",
          )}`}
        >
          <h2 className="text-4xl font-bold mb-4 text-light-text-heading dark:text-dark-text-heading">
            <span className="text-light-accent-primary dark:text-dark-accent-primary">
              {"<"}
            </span>{" "}
            Featured Projects{" "}
            <span className="text-light-accent-primary dark:text-dark-accent-primary">
              {"/>"}
            </span>
          </h2>
          <div className="h-1 w-24 bg-light-accent-primary dark:bg-dark-accent-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${getAnimationClass(
                "projects",
                "animate-fade-in-up",
              )}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-light-about dark:bg-dark-about rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-350 hover:-translate-y-2 h-full flex flex-col">
                {/* Gradient Header */}
                <div
                  className={`h-3 bg-gradient-to-r ${project.color} group-hover:h-4 transition-all duration-300`}
                ></div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Project Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg shadow-md flex items-center justify-center text-white flex-shrink-0`}
                    >
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-light-text-heading dark:text-dark-text-heading mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-light-accent-primary dark:text-dark-accent-primary font-semibold">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-4 flex-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-sm text-light-text-body dark:text-dark-text-body flex items-start gap-2"
                      >
                        <CheckCircle
                          size={16}
                          className="text-light-accent-primary dark:text-dark-accent-primary mt-0.5 flex-shrink-0"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 text-light-accent-primary dark:text-dark-accent-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("skills");
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to dark mode if no preference is saved
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !prefersReducedMotion()) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 },
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const getAnimationClass = (sectionId, animationClass) => {
    if (prefersReducedMotion()) return "";
    return visibleSections.has(sectionId) ? animationClass : "";
  };

  return (
    <div className="min-h-screen bg-light-hero dark:bg-dark-hero text-light-text-body dark:text-dark-text-body transition-colors duration-400">
      {/* Navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section
        id="home"
        className="hero-bg min-h-screen flex items-center justify-center px-8 relative overflow-hidden pt-16"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-light-accent-secondary/10 dark:bg-dark-accent-secondary/10 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 rounded-full animate-float-fast"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-scale">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-light-text-heading dark:text-dark-text-heading">
              <span className="text-light-accent-primary dark:text-dark-accent-primary">
                {"<"}
              </span>
              El-Baraa Samir
              <span className="text-light-accent-primary dark:text-dark-accent-primary">
                {" />"}
              </span>
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary mx-auto rounded-full mb-8"></div>
          </div>

          <p className="text-xl md:text-2xl mb-4 text-light-text-body dark:text-dark-text-body animate-fade-in-up">
            Backend Developer
          </p>
          <p className="text-lg md:text-xl mb-12 text-light-text-body dark:text-dark-text-body max-w-3xl mx-auto animate-fade-in-delayed">
            Specializing in{" "}
            <span className="font-semibold text-light-accent-primary dark:text-dark-accent-primary">
              Node.js
            </span>
            ,{" "}
            <span className="font-semibold text-light-accent-primary dark:text-dark-accent-primary">
              NestJS
            </span>
            , and scalable microservices architecture
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-64 animate-slide-up">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-semibold animate-pulse-soft"
            >
              Get In Touch
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-light-about dark:bg-dark-about text-light-text-heading dark:text-dark-text-heading rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-semibold border-2 border-light-accent-primary dark:border-dark-accent-primary"
            >
              Learn More
            </a>
          </div>

          {/* Scroll indicator - CENTERED */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-light-text-body dark:text-dark-text-body hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors duration-300"
            >
              <span className="text-sm">Scroll Down</span>
              <div className="w-8 h-12 border-2 border-light-accent-primary dark:border-dark-accent-primary rounded-full flex justify-center p-1 relative">
                <div className="w-1.5 h-3 bg-light-accent-primary dark:bg-dark-accent-primary rounded-full animate-scroll-indicator"></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-bg py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div
              className={`md:w-1/3 ${getAnimationClass(
                "about",
                "animate-slide-in-left",
              )}`}
            >
              <div className="relative">
                <div className="w-full h-full absolute -left-4 -top-4 border-2 border-light-accent-primary dark:border-dark-accent-primary rounded-lg"></div>
                <div className="bg-gradient-to-br from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary p-1 rounded-lg shadow-xl">
                  <div className="bg-light-about dark:bg-dark-about p-8 rounded-md">
                    <Briefcase
                      size={48}
                      className="text-light-accent-primary dark:text-dark-accent-primary mb-4"
                    />
                    <h2 className="text-3xl font-bold mb-2 text-light-text-heading dark:text-dark-text-heading">
                      About Me
                    </h2>
                    <div className="h-1 w-12 bg-light-accent-primary dark:bg-dark-accent-primary mb-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`md:w-2/3 ${getAnimationClass(
                "about",
                "animate-slide-in-right",
              )}`}
            >
              <p className="text-lg leading-relaxed text-light-text-body dark:text-dark-text-body mb-6">
                I'm El-Baraa Samir, an{" "}
                <span className="font-semibold text-light-accent-primary dark:text-dark-accent-primary">
                  Experienced Backend Developer
                </span>{" "}
                in Node.js (NestJS/ExpressJS) development, specializing in
                high-availability systems using the NestJS and Node.js
                ecosystems.
              </p>
              <p className="text-lg leading-relaxed text-light-text-body dark:text-dark-text-body mb-6">
                I'm an expert in architecting scalable microservices and
                optimizing database performance, achieving reduction in API
                response times through advanced Redis caching and PostgreSQL
                query tuning. I deliver full-lifecycle SDLC solutions for
                high-growth Fintech and E-commerce startups.
              </p>
              <p className="text-lg leading-relaxed text-light-text-body dark:text-dark-text-body">
                Skilled in cloud-native infrastructure (AWS/Docker) and various
                databases including PostgreSQL, MongoDB, and Redis. I place a
                strong emphasis on{" "}
                <span className="font-semibold text-light-accent-primary dark:text-dark-accent-primary">
                  code quality
                </span>
                ,{" "}
                <span className="font-semibold text-light-accent-primary dark:text-dark-accent-primary">
                  testing
                </span>{" "}
                (with Jest and Pactum), and{" "}
                <span className="font-semibold text-light-accent-primary dark:text-dark-accent-primary">
                  clean architecture
                </span>
                .
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="/CV/Elbaraa_CV.pdf"
                  download="Elbaraa_CV.pdf"
                  aria-label="Download CV as PDF"
                  className="px-6 py-3 bg-light-about dark:bg-dark-about text-light-text-heading dark:text-dark-text-heading rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 border-2 border-light-accent-primary dark:border-dark-accent-primary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  Contact Me
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Toggle */}
      <div className="about-bg py-8 px-8">
        <div className="max-w-6xl mx-auto">
          <SectionToggle
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </div>
      </div>

      {/* Skills Section */}
      <SkillsSection
        isVisible={activeSection === "skills"}
        getAnimationClass={getAnimationClass}
      />

      {/* Experience Section */}
      <ExperienceSection
        isVisible={activeSection === "experience"}
        getAnimationClass={getAnimationClass}
      />

      {/* Projects Section */}
      <ProjectsSection
        isVisible={activeSection === "projects"}
        getAnimationClass={getAnimationClass}
      />

      {/* Merged Contact & Footer Section */}
      <section id="contact" className="footer-bg py-20 px-8 optimized-scroll">
        <div className="max-w-4xl mx-auto">
          {/* Contact Content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-light-text-heading dark:text-dark-text-heading">
              <span className="text-light-accent-primary dark:text-dark-accent-primary">
                {"<"}
              </span>{" "}
              Get In Touch{" "}
              <span className="text-light-accent-primary dark:text-dark-accent-primary">
                {"/>"}
              </span>
            </h2>
            <div className="h-1 w-24 bg-light-accent-primary dark:bg-dark-accent-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-light-text-body dark:text-dark-text-body mb-8">
              Have a project in mind? Let's build something amazing together
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
              <a
                href="mailto:elbaraa.s.radwan@gmail.com"
                className="bg-light-about dark:bg-dark-about text-light-accent-primary dark:text-dark-accent-primary px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 animate-pulse-soft border-2 border-light-accent-primary dark:border-dark-accent-primary"
              >
                <Mail size={20} />
                E-Mail Me
              </a>
              <a
                href="https://github.com/ElBaraaSamir"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 dark:bg-dark-about text-white dark:text-dark-text-heading px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 border-2 border-transparent dark:border-dark-accent-primary/30"
              >
                <Github size={20} />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/elbaraa-samir/"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Footer Content */}
          <div className="border-t border-light-accent-primary/20 dark:border-dark-accent-primary/20 pt-8">
            <div className="text-center">
              <p className="text-light-text-body dark:text-dark-text-body mb-2">
                © 2024 El-Baraa Samir. All rights reserved.
              </p>
              <p className="text-sm text-light-text-body/70 dark:text-dark-text-body/70">
                Built with React & TailwindCSS • Forest Tech Theme
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
