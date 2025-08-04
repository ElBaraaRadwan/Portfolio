import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center p-8">
        <img src="/profile.jpg" alt="El-Baraa Radwan" className="w-40 h-40 rounded-full mb-4 shadow-lg border-4 border-white" />
        <h1 className="text-4xl font-bold">El-Baraa Radwan</h1>
        <p className="text-lg mt-2">Back-End Node Developer (NestJS | ExpressJS)</p>
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/ElBaraaRadwan" target="_blank" className="hover:text-gray-400"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/elbaraa-radwan/" target="_blank" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
          <a href="mailto:elbaraa.s.radwan@gmail.com" className="hover:text-gray-400"><FaEnvelope size={24} /></a>
        </div>
      </section>

      {/* About */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a highly motivated and results-oriented Back-End Web Developer with experience building scalable applications using NestJS, ExpressJS, TypeORM/Prisma, PostgreSQL, Docker, and more. I specialize in clean code, efficient API design, and comprehensive testing with Jest and Pactum.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
          <li>Node.js, ExpressJS, NestJS</li>
          <li>PostgreSQL, MySQL, MongoDB</li>
          <li>Prisma & TypeORM</li>
          <li>Docker, Redis, FFmpeg, Cloudinary</li>
          <li>Unit & E2E Testing with Jest/Pactum</li>
          <li>React (basic), Bootstrap, Tailwind CSS</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li><strong>Movie Reservation System (Backend):</strong> Secure ticket booking system with auth and testing. <a href="https://github.com/ElBaraaRadwan/movie-reservation-system" className="text-blue-600" target="_blank">GitHub</a></li>
          <li><strong>Online Store (Web App):</strong> Full e-commerce platform with product/order management.</li>
          <li><strong>The Kitchen (Web & Mobile App):</strong> Recipe management and cooking assistant app.</li>
          <li><strong>Trouble Ticketing System (Backend):</strong> Ticket lifecycle and support system.</li>
          <li><strong>Meetup (React/NextJS):</strong> Event collaboration platform.</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="bg-white p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Freelance Back-End Web Developer (Feb 2024 – Present)</strong><br />
            Developed secure REST APIs, integrated Docker, Redis, Cloudinary, and FFmpeg.
          </li>
          <li>
            <strong>Software & Embedded Systems Intern – AITC (May–Jul 2022)</strong><br />
            Built face recognition-based school attendance system and home automation tools.
          </li>
          <li>
            <strong>Full Stack Intern – Khtwah (Jan–May 2022)</strong><br />
            Built tested APIs, Dockerized systems, and optimized backend services.
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <p><strong>B.Sc. Computer Science</strong> – Misr University of Science and Technology (GPA: 3.4)</p>
      </section>

      {/* Contact */}
      <section className="bg-slate-900 text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p>Email: <a href="mailto:elbaraa.s.radwan@gmail.com" className="text-blue-400">elbaraa.s.radwan@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/elbaraa-radwan/" target="_blank" className="text-blue-400">/in/elbaraa-radwan</a></p>
        <p>GitHub: <a href="https://github.com/ElBaraaRadwan" target="_blank" className="text-blue-400">@ElBaraaRadwan</a></p>
      </section>
    </div>
  );
}
