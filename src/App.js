import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code,
  Container,
  GitBranch,
  Cloud,
  TestTube,
  ChevronDown,
  ExternalLink,
  Briefcase,
  GraduationCap,
  MapPin,
} from "lucide-react";
import "./animations.css";

export default function Portfolio() {
  const [visibleSections, setVisibleSections] = useState({});

  // Function to check if an element is in viewport
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []); // Animation classes based on visibility
  const getAnimationClass = (sectionId, baseClass = "animate-fade-in") => {
    return visibleSections[sectionId] ? baseClass : "opacity-0";
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 text-gray-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        }}
      >
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particle-float-${(i % 3) + 1} ${
                  Math.random() * 10 + 10
                }s infinite`,
              }}
            />
          ))}
        </div>

        <div className="text-center px-6 z-10">
          <div
            className={`mb-8 ${getAnimationClass("hero", "animate-fade-in")}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h1 className="text-6xl font-bold mb-4 text-white tracking-tight">
              El-Baraa Radwan
            </h1>
            <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-2xl text-blue-200 mb-2 font-light">
              Back-End Node Developer
            </p>
            <p className="text-lg text-blue-300 inline-flex items-center">
              <span className="px-3 py-1 rounded-full bg-blue-900/30 backdrop-blur-sm mr-2">
                NestJS
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-900/30 backdrop-blur-sm">
                ExpressJS
              </span>
            </p>
          </div>

          <div
            className={`flex gap-6 mt-8 justify-center ${getAnimationClass(
              "hero",
              "animate-slide-up"
            )}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <a
              href="https://github.com/ElBaraaRadwan"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800/80 hover:bg-slate-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/elbaraa-radwan/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600/90 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:elbaraa.s.radwan@gmail.com"
              className="bg-red-600/90 hover:bg-red-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-red-500/20 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div
            className={`mt-16 animate-bounce ${getAnimationClass(
              "hero",
              "animate-fade-in-delayed"
            )}`}
            style={{ transitionDelay: "1s" }}
          >
            <a
              href="#about"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              <ChevronDown size={32} />
            </a>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div
              className={`md:w-1/3 ${getAnimationClass(
                "about",
                "animate-slide-in-left"
              )}`}
            >
              <div className="relative">
                <div className="w-full h-full absolute -left-4 -top-4 border-2 border-blue-500 rounded-lg"></div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-1 rounded-lg shadow-xl">
                  <div className="bg-white p-8 rounded-md">
                    <Briefcase size={48} className="text-blue-600 mb-4" />
                    <h2 className="text-3xl font-bold mb-2 text-slate-800">
                      About Me
                    </h2>
                    <div className="h-1 w-12 bg-blue-500 mb-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`md:w-2/3 ${getAnimationClass(
                "about",
                "animate-slide-in-right"
              )}`}
            >
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                I'm El-Baraa Radwan, a passionate{" "}
                <span className="font-semibold text-blue-700">
                  Back-End Web Developer
                </span>{" "}
                with a strong foundation in Node.js, NestJS, and ExpressJS. I specialize in
                building secure, scalable, and maintainable server-side applications and APIs.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                My technical toolkit includes PostgreSQL, MongoDB, Prisma, TypeORM, and Redis,
                along with deep experience in Dockerized environments and integration of tools like
                Cloudinary, FFmpeg, and RabbitMQ. I place a strong emphasis on{" "}
                <span className="font-semibold text-blue-700">code quality</span>,{" "}
                <span className="font-semibold text-blue-700">testing</span> (with Jest and Pactum),
                and <span className="font-semibold text-blue-700">clean architecture</span>.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Whether freelancing or collaborating on team projects, I enjoy solving real-world problems
                through efficient backend systems, clean code practices, and continuous learning.
                My goal is to always deliver back-end solutions that are robust, testable, and production-ready.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 hover:gap-3"
                >
                  View Projects <ExternalLink size={16} />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg shadow-md hover:bg-slate-300 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section
        id="skills"
        className="py-20 px-8 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className={`text-center mb-16 ${getAnimationClass(
              "skills",
              "animate-fade-in"
            )}`}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              <span className="text-blue-600">{"<"}</span> Tech Stack{" "}
              <span className="text-blue-600">{"/>"}</span>
            </h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Languages */}
          <div
            className={`mb-16 ${getAnimationClass(
              "skills",
              "animate-slide-up"
            )}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-slate-700 text-center flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg flex items-center justify-center text-white">
                <Code size={20} />
              </div>
              Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4 stagger-animation">
              <div className="bg-yellow-100 text-yellow-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 bg-yellow-600 rounded-lg text-white text-xs font-bold flex items-center justify-center">
                  JS
                </div>
                JavaScript
              </div>
              <div className="bg-blue-100 text-blue-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 bg-blue-600 rounded-lg text-white text-xs font-bold flex items-center justify-center">
                  TS
                </div>
                TypeScript
              </div>
            </div>
          </div>

          {/* Backend */}
          <div
            className={`mb-16 ${getAnimationClass(
              "skills",
              "animate-slide-up"
            )}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-slate-700 text-center flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg flex items-center justify-center text-white">
                <Server size={20} />
              </div>
              Backend
            </h3>
            <div className="flex flex-wrap justify-center gap-4 stagger-animation">
              <div className="bg-green-100 text-green-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Server size={24} className="text-green-600" />
                Node.js
              </div>
              <div className="bg-red-100 text-red-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 bg-red-600 rounded-lg text-white text-xs font-bold flex items-center justify-center">
                  N
                </div>
                NestJS
              </div>
              <div className="bg-gray-100 text-gray-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Code size={24} className="text-gray-600" />
                Express.js
              </div>
              <div className="bg-pink-100 text-pink-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.784 2.642l4.706 2.686c.417.238.544.772.284 1.195l-4.706 7.648c-.24.39-.748.512-1.138.274l-4.706-2.686c-.417-.238-.544-.772-.284-1.195l4.706-7.648c.24-.39.748-.512 1.138-.274z" />
                  <path d="M9.216 21.358l-4.706-2.686c-.417-.238-.544-.772-.284-1.195l4.706-7.648c.24-.39.748-.512 1.138-.274l4.706 2.686c.417.238.544.772.284 1.195l-4.706 7.648c-.24.39-.748.512-1.138.274z" />
                </svg>
                GraphQL
              </div>
              <div className="bg-orange-100 text-orange-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 bg-orange-600 rounded-lg text-white text-xs font-bold flex items-center justify-center">
                  R
                </div>
                RabbitMQ
              </div>
            </div>
          </div>

          {/* Databases & ORMs */}
          <div
            className={`mb-16 ${getAnimationClass(
              "skills",
              "animate-slide-up"
            )}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-slate-700 text-center flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white">
                <Database size={20} />
              </div>
              Databases & ORMs
            </h3>
            <div className="flex flex-wrap justify-center gap-4 stagger-animation">
              <div className="bg-blue-100 text-blue-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Database size={24} className="text-blue-600" />
                PostgreSQL
              </div>
              <div className="bg-blue-100 text-blue-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Database size={24} className="text-blue-600" />
                MySQL
              </div>
              <div className="bg-green-100 text-green-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Database size={24} className="text-green-600" />
                MongoDB
              </div>
              <div className="bg-red-100 text-red-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 bg-red-600 rounded-lg text-white text-xs font-bold flex items-center justify-center">
                  R
                </div>
                Redis
              </div>
              <div className="bg-gray-100 text-gray-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 bg-gray-600 rounded-lg text-white text-xs font-bold flex items-center justify-center">
                  P
                </div>
                Prisma
              </div>
              <div className="bg-gray-100 text-gray-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 bg-gray-600 rounded-lg text-white text-xs font-bold flex items-center justify-center">
                  T
                </div>
                TypeORM
              </div>
            </div>
          </div>

          {/* Other Skills (Only showing a few categories for brevity, but you can expand as needed) */}
          <div
            className={`${getAnimationClass("skills", "animate-slide-up")}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-slate-700 text-center flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center text-white">
                <Container size={20} />
              </div>
              DevOps & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4 stagger-animation">
              <div className="bg-blue-100 text-blue-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Container size={24} className="text-blue-600" />
                Docker
              </div>
              <div className="bg-blue-100 text-blue-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .485.606zm.847-4.287l-.007.01-2.413-.999a5.171 5.171 0 0 1 2.597-2.075l.437 2.578-.005.004a.44.44 0 0 1-.609.482zm2.085 2.914l-.01-.007.999-2.413a5.171 5.171 0 0 1 2.075 2.597l-2.578.437-.004-.005a.44.44 0 0 1-.482-.609zm-.847 4.287l.007-.01 2.413.999a5.171 5.171 0 0 1-2.597 2.075l-.437-2.578.005-.004a.44.44 0 0 1 .609-.482zm-4.424-9.694l.2.01L8.06.586a8.312 8.312 0 0 1 4.18 0l-.005 2.995-.01-.2a.708.708 0 0 1-.95 0z" />
                </svg>
                Kubernetes
              </div>
              <div className="bg-red-100 text-red-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <TestTube size={24} className="text-red-600" />
                Jest
              </div>
              <div className="bg-gray-100 text-gray-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <GitBranch size={24} className="text-gray-600" />
                Git
              </div>
              <div className="bg-gray-100 text-gray-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Cloud size={24} className="text-gray-600" />
                AWS S3
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 ${getAnimationClass(
              "projects",
              "animate-fade-in"
            )}`}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              <span className="text-blue-600">{"{"}</span> Projects{" "}
              <span className="text-blue-600">{"}"}</span>
            </h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${getAnimationClass(
                "projects",
                "animate-slide-up"
              )}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800">
                    Smart Basket
                  </h3>
                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Backend
                  </div>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  A Smart Shopping Basket System built with NestJS and GraphQL,
                  designed to deliver modern e-commerce functionalities
                  including intelligent cart management, product browsing, and
                  user-specific operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    NestJS
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    GraphQL
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    Prisma
                  </span>
                </div>
                <a
                  href="https://github.com/ElBaraaRadwan/Smart-Basket"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium gap-1"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${getAnimationClass(
                "projects",
                "animate-slide-up"
              )}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="h-3 bg-gradient-to-r from-indigo-500 to-indigo-700"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800">
                    Movie Reservation System
                  </h3>
                  <div className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    Backend
                  </div>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  A Movie Reservation System built using the NestJS framework.
                  This project serves as a scalable backend for managing movie
                  data, showtimes, reservations, and user authentication.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    NestJS
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    JWT Auth
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    TypeORM
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    REST API
                  </span>
                </div>
                <a
                  href="https://github.com/ElBaraaRadwan/movie-reservation-system"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium gap-1"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${getAnimationClass(
                "projects",
                "animate-slide-up"
              )}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-700"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800">
                    Trouble Ticketing System
                  </h3>
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Backend
                  </div>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Trouble Ticket System is a solution that processes user
                  problems in the form of tickets, which are handled by agents.
                  The system provides tracking, reusability, and easy access to
                  ticket status.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    Express
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    JWT
                  </span>
                </div>
                <a
                  href="https://github.com/ElBaraaRadwan/Trouble-Ticketing-System-Backend-"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors font-medium gap-1"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`text-center mt-12 ${getAnimationClass(
              "projects",
              "animate-fade-in"
            )}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <a
              href="https://github.com/ElBaraaRadwan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg shadow-md hover:bg-slate-700 transition-all duration-300 gap-2"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section
        id="experience"
        className="py-20 px-8 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div
            className={`text-center mb-16 ${getAnimationClass(
              "experience",
              "animate-fade-in"
            )}`}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800 flex items-center justify-center gap-3">
              <Briefcase className="text-blue-600" size={28} />
              Experience
            </h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div
              className={`flex flex-col md:flex-row gap-6 ${getAnimationClass(
                "experience",
                "animate-slide-in-left"
              )}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="md:w-1/3 flex justify-end">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block font-medium text-sm">
                  Feb 2024 – Present
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Freelance Back-End Web Developer
                </h3>
                <ul className="text-slate-600 space-y-2 list-disc pl-5">
                  <li>Developed secure REST APIs with NestJS and Express</li>
                  <li>Integrated Docker for containerization and deployment</li>
                  <li>
                    Implemented Redis for caching and performance optimization
                  </li>
                  <li>Set up Cloudinary and FFmpeg for media processing</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div
              className={`flex flex-col md:flex-row gap-6 ${getAnimationClass(
                "experience",
                "animate-slide-in-left"
              )}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="md:w-1/3 flex justify-end">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block font-medium text-sm">
                  May – Jul 2022
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Software & Embedded Systems Intern
                </h3>
                <p className="text-slate-500 mb-2 italic">AITC</p>
                <ul className="text-slate-600 space-y-2 list-disc pl-5">
                  <li>Built face recognition-based school attendance system</li>
                  <li>Developed IoT home automation tools and interfaces</li>
                  <li>Collaborated with cross-functional teams</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div
              className={`flex flex-col md:flex-row gap-6 ${getAnimationClass(
                "experience",
                "animate-slide-in-left"
              )}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="md:w-1/3 flex justify-end">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block font-medium text-sm">
                  Jan – May 2022
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Full Stack Intern
                </h3>
                <p className="text-slate-500 mb-2 italic">Khtwah</p>
                <ul className="text-slate-600 space-y-2 list-disc pl-5">
                  <li>Built and tested REST APIs with Node.js and Express</li>
                  <li>Dockerized applications for consistent deployment</li>
                  <li>Optimized backend services for performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education */}
      <section id="education" className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 ${getAnimationClass(
              "education",
              "animate-fade-in"
            )}`}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800 flex items-center justify-center gap-3">
              <GraduationCap className="text-blue-600" size={28} />
              Education
            </h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div
            className={`flex flex-col md:flex-row gap-6 ${getAnimationClass(
              "education",
              "animate-slide-in-right"
            )}`}
          >
            <div className="md:w-1/3 flex justify-end">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block font-medium text-sm">
                2018 – 2022
              </div>
            </div>
            <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                B.Sc. Computer Science
              </h3>
              <p className="text-slate-500 mb-2 italic flex items-center gap-2">
                <MapPin size={16} />
                Misr University of Science and Technology
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-8 bg-gradient-to-br from-slate-800 to-slate-900 text-white"
      >
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 ${getAnimationClass(
              "contact",
              "animate-fade-in"
            )}`}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, questions, or just to
              say hello! I'm always open to discussing new projects or
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div
              className={`bg-slate-700/60 backdrop-blur-sm p-8 rounded-xl text-center ${getAnimationClass(
                "contact",
                "animate-slide-up"
              )}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-200">Email</h3>
              <a
                href="mailto:elbaraa.s.radwan@gmail.com"
                className="text-white hover:text-blue-300 transition-colors break-all"
              >
                elbaraa.s.radwan@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div
              className={`bg-slate-700/60 backdrop-blur-sm p-8 rounded-xl text-center ${getAnimationClass(
                "contact",
                "animate-slide-up"
              )}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Linkedin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-200">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/elbaraa-radwan/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                /in/elbaraa-radwan
              </a>
            </div>

            {/* GitHub */}
            <div
              className={`bg-slate-700/60 backdrop-blur-sm p-8 rounded-xl text-center ${getAnimationClass(
                "contact",
                "animate-slide-up"
              )}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Github size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-200">GitHub</h3>
              <a
                href="https://github.com/ElBaraaRadwan"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                @ElBaraaRadwan
              </a>
            </div>
          </div>

          <div
            className={`mt-16 text-center ${getAnimationClass(
              "contact",
              "animate-fade-in"
            )}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <p className="text-blue-200 mb-4">
              Let's build something amazing together.
            </p>
            <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-8">
          <p>
            © {new Date().getFullYear()} El-Baraa Radwan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
