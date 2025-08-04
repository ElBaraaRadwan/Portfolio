import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code,
  Globe,
  Container,
  GitBranch,
  Cloud,
  Settings,
  TestTube,
  Palette,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center p-8">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">El-Baraa Radwan</h1>
          <p className="text-2xl text-gray-300 mb-2">Back-End Node Developer</p>
          <p className="text-lg text-gray-400">NestJS | ExpressJS</p>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/ElBaraaRadwan"
            target="_blank"
            className="hover:text-gray-400"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/elbaraa-radwan/"
            target="_blank"
            className="hover:text-gray-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:elbaraa.s.radwan@gmail.com"
            className="hover:text-gray-400"
          >
            <Mail size={24} />
          </a>
        </div>
      </section>
      {/* About */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m El-Baraa Radwan, a passionate Back-End Web Developer with a strong
          foundation in Node.js, NestJS, and ExpressJS. I specialize in building
          secure, scalable, and maintainable server-side applications and APIs.
          My technical toolkit includes PostgreSQL, MongoDB, Prisma, TypeORM,
          and Redis, along with deep experience in Dockerized environments and
          integration of tools like Cloudinary, FFmpeg, and RabbitMQ. I place a
          strong emphasis on code quality, testing (with Jest and Pactum), and
          clean architecture. Whether freelancing or collaborating on team
          projects, I enjoy solving real-world problems through efficient
          backend systems, clean code practices, and continuous learning. My
          goal is to always deliver back-end solutions that are robust,
          testable, and production-ready.
        </p>
      </section>
      {/* Skills */}
      <section className="bg-white p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">🛠️ Tech Stack</h2>

        {/* Languages */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            🧠 Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-yellow-600 rounded text-white text-xs font-bold flex items-center justify-center">
                JS
              </div>
              JavaScript
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">
                TS
              </div>
              TypeScript
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            ⚙️ Backend
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Server size={20} className="text-green-600" />
              Node.js
            </div>
            <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-red-600 rounded text-white text-xs font-bold flex items-center justify-center">
                N
              </div>
              NestJS
            </div>
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Code size={20} className="text-gray-600" />
              Express.js
            </div>
            <div className="bg-pink-100 text-pink-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.784 2.642l4.706 2.686c.417.238.544.772.284 1.195l-4.706 7.648c-.24.39-.748.512-1.138.274l-4.706-2.686c-.417-.238-.544-.772-.284-1.195l4.706-7.648c.24-.39.748-.512 1.138-.274z" />
                <path d="M9.216 21.358l-4.706-2.686c-.417-.238-.544-.772-.284-1.195l4.706-7.648c.24-.39.748-.512 1.138-.274l4.706 2.686c.417.238.544.772.284 1.195l-4.706 7.648c-.24.39-.748.512-1.138.274z" />
              </svg>
              GraphQL
            </div>
            <div className="bg-orange-100 text-orange-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-orange-600 rounded text-white text-xs font-bold flex items-center justify-center">
                R
              </div>
              RabbitMQ
            </div>
          </div>
        </div>

        {/* Databases & ORMs */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            🛢️ Databases & ORMs
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Database size={20} className="text-blue-600" />
              PostgreSQL
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Database size={20} className="text-blue-600" />
              MySQL
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Database size={20} className="text-green-600" />
              MongoDB
            </div>
            <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-red-600 rounded text-white text-xs font-bold flex items-center justify-center">
                R
              </div>
              Redis
            </div>
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-600 rounded text-white text-xs font-bold flex items-center justify-center">
                P
              </div>
              Prisma
            </div>
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-600 rounded text-white text-xs font-bold flex items-center justify-center">
                T
              </div>
              TypeORM
            </div>
          </div>
        </div>

        {/* Testing */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            🧪 Testing
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <TestTube size={20} className="text-red-600" />
              Jest
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                P
              </div>
              Pactum
            </div>
          </div>
        </div>

        {/* DevOps & Deployment */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            🐳 DevOps & Deployment
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Container size={20} className="text-blue-600" />
              Docker
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .485.606zm.847-4.287l-.007.01-2.413-.999a5.171 5.171 0 0 1 2.597-2.075l.437 2.578-.005.004a.44.44 0 0 1-.609.482zm2.085 2.914l-.01-.007.999-2.413a5.171 5.171 0 0 1 2.075 2.597l-2.578.437-.004-.005a.44.44 0 0 1-.482-.609zm-.847 4.287l.007-.01 2.413.999a5.171 5.171 0 0 1-2.597 2.075l-.437-2.578.005-.004a.44.44 0 0 1 .609-.482zm-4.424-9.694l.2.01L8.06.586a8.312 8.312 0 0 1 4.18 0l-.005 2.995-.01-.2a.708.708 0 0 1-.95 0z" />
              </svg>
              Kubernetes
            </div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            🔧 Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-orange-100 text-orange-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Settings size={20} className="text-orange-600" />
              Postman
            </div>
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <GitBranch size={20} className="text-gray-600" />
              Git
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-yellow-600 rounded text-white text-xs font-bold flex items-center justify-center">
                F
              </div>
              Firebase
            </div>
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Cloud size={20} className="text-gray-600" />
              AWS S3
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">
                C
              </div>
              Cloudinary
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-purple-600 rounded text-white text-xs font-bold flex items-center justify-center">
                FF
              </div>
              FFmpeg
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            🎨 Frontend (Basic Knowledge)
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-orange-100 text-orange-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Globe size={20} className="text-orange-600" />
              HTML5
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <Palette size={20} className="text-blue-600" />
              CSS3
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.099 2.21-.099zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.387zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.985-1.36-1.56z" />
              </svg>
              React
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-purple-600 rounded text-white text-xs font-bold flex items-center justify-center">
                B
              </div>
              Bootstrap
            </div>
            <div className="bg-cyan-100 text-cyan-800 px-4 py-3 rounded-lg font-medium flex items-center gap-2">
              <div className="w-5 h-5 bg-cyan-600 rounded text-white text-xs font-bold flex items-center justify-center">
                T
              </div>
              Tailwind CSS
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>Smart Basket (Backend):</strong> A Smart Shopping Basket
            System built with NestJS and GraphQL, designed to deliver modern
            e-commerce functionalities including intelligent cart management,
            product browsing, and user-specific operations.{" "}
            <a
              href="https://github.com/ElBaraaRadwan/Smart-Basket"
              className="text-blue-600"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <strong>Movie Reservation System (Backend):</strong> A Movie
            Reservation System built using the NestJS framework. This project
            serves as a scalable backend for managing movie data, showtimes,
            reservations, and user authentication.{" "}
            <a
              href="https://github.com/ElBaraaRadwan/movie-reservation-system"
              className="text-blue-600"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <strong>Trouble Ticketing System (Backend):</strong> rouble Ticket
            System is a website that solve your problem in a form of TICKETS
            that you fill it so that can be proccess by Agents, the TICKETS are
            trackable and reuseable with an easy access system.{" "}
            <a
              href="https://github.com/ElBaraaRadwan/Trouble-Ticketing-System-Backend-"
              className="text-blue-600"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
      {/* Experience */}
      <section className="bg-white p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>
              Freelance Back-End Web Developer (Feb 2024 – Present)
            </strong>
            <br />
            Developed secure REST APIs, integrated Docker, Redis, Cloudinary,
            and FFmpeg.
          </li>
          <li>
            <strong>
              Software & Embedded Systems Intern – AITC (May–Jul 2022)
            </strong>
            <br />
            Built face recognition-based school attendance system and home
            automation tools.
          </li>
          <li>
            <strong>Full Stack Intern – Khtwah (Jan–May 2022)</strong>
            <br />
            Built tested APIs, Dockerized systems, and optimized backend
            services.
          </li>
        </ul>
      </section>
      {/* Education */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <p>
          <strong>B.Sc. Computer Science</strong> – Misr University of Science
          and Technology (GPA: 3.4)
        </p>
      </section>
      {/* Contact */}
      <section className="bg-slate-900 text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p>
          Email:{" "}
          <a href="mailto:elbaraa.s.radwan@gmail.com" className="text-blue-400">
            elbaraa.s.radwan@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/elbaraa-radwan/"
            target="_blank"
            className="text-blue-400"
          >
            /in/elbaraa-radwan
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/ElBaraaRadwan"
            target="_blank"
            className="text-blue-400"
          >
            @ElBaraaRadwan
          </a>
        </p>
      </section>
    </div>
  );
}
