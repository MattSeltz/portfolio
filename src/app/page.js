"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Briefcase,
  GraduationCap,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
    tools: ["Git", "Docker"],
  };

  const projects = [
    {
      title: "Skill Up",
      description: "Landing page de la startup 'Skill Up'",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
      link: "https://skillup-navy.vercel.app",
    },
    {
      title: "Eleven Prestige",
      description:
        "Landing page de la empresa de alquiler de lujo 'Eleven Prestige'",
      tech: ["React", "MongoDB", "Node.js"],
      link: "https://eleven-pro.vercel.app",
    },
    {
      title: "Ushuaia Extremo",
      description: "E-commerce de la empresa de turismo 'Ushuaia Extremo'",
      tech: ["Express", "PostgreSQL", "GraphQL"],
      link: "https://www.ushuaiaextremoevt.tur.ar",
    },
    {
      title: "Apolión",
      description:
        "Bot de scrap junto a dos E-commerce, un dashboard de administrador, una api y una landing page para la fintech 'Apolión'",
      tech: ["TypeScript", "MongoDB", "NextJS"],
      link: "https://apolion.online",
    },
    {
      title: "Scotia Turismo",
      description:
        "CMS junto a landing page de la empresa de turismo 'Scotia Turismo'",
      tech: ["NextJS", "MongoDB", "TailwindCSS"],
      link: "https://scotiaturismo.tur.ar",
    },
    {
      title: "Visdán Agency",
      description:
        "Landing page de la startup de marketing digital 'Visdán Agency'",
      tech: ["NextJS", "Trello", "Figma"],
      link: "https://visdan-agency.vercel.app",
    },
    {
      title: "Siara Estetica",
      description: "Gestor de turnos para la estetica 'Siara Estetica'",
      tech: ["Express", "MongoDB", "ReactJS"],
      link: "https://github.com/MattSeltz/siara-estetica",
    },
    {
      title: "Fuego Cell Reparaciones",
      description: "Gestor de stock de la empresa 'Fuego Cell Reparaciones'",
      tech: ["Firebase", "ReactJS", "Bootstrap"],
      link: "https://github.com/MattSeltz/fuego-cell",
    },
    {
      title: "Zuma Constructora",
      description: "CRM de la constructora 'Zuma Constructora'",
      tech: ["Express", "MongoDB", "Docker"],
      link: "https://github.com/MattSeltz/zuma",
    },
  ];

  const experience = [
    {
      year: "2023 - Presente",
      title: "Full Stack Developer",
      company: "Autónomo",
      description: `He trabajado de forma independiente desarrollando sitios web y aplicaciones personalizadas para empresas y emprendedores. Mis proyectos incluyen landing pages corporativas, plataformas con autenticación y paneles de administración, e-commerce y herramientas interactivas.
Mi enfoque está en ofrecer soluciones escalables, bien diseñadas y fáciles de mantener, utilizando tecnologías modernas como React, Next.js, Express, MongoDB y TailwindCSS.
Algunos de mis clientes y proyectos más recientes incluyen: Scotia Turismo, Visdan Agency, tiendas locales y startups tecnológicas.`,
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    // Scroll suave a la sección
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Cursor Effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20 blur-3xl transition-all duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              "Inicio",
              "Habilidades",
              "Experiencia",
              "Proyectos",
              "Contacto",
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-purple-500/20">
            <div className="px-6 py-4 space-y-4">
              {[
                "Inicio",
                "Habilidades",
                "Experiencia",
                "Proyectos",
                "Contacto",
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Matías Seltzer
            </h1>
            <div className="text-2xl md:text-3xl text-purple-300 mb-8">
              Full Stack Developer & Creative Coder
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Transformando ideas en experiencias digitales excepcionales.
            Especializado en crear aplicaciones web modernas, escalables y con
            diseño impecable.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="mailto:matiselt@outlook.es"
              target="_blank"
              className="flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all hover:scale-105"
            >
              <Mail size={20} /> Contactar
            </a>
            <a
              href="https://github.com/MattSeltz"
              target="_blank"
              className="flex items-center gap-2 px-8 py-3 border-2 border-purple-500 hover:bg-purple-500/20 rounded-full transition-all hover:scale-105"
            >
              <Github size={20} /> GitHub
            </a>
          </div>

          <ChevronDown className="mx-auto animate-bounce" size={32} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-400 capitalize">
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Code2 size={16} className="text-pink-500" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Experiencia
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l-2 border-purple-500 hover:border-pink-500 transition-colors"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Briefcase size={18} />
                    <span className="text-sm font-semibold">{exp.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-pink-400 mb-3">{exp.company}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                >
                  Ver proyecto <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Contacto
          </h2>

          <form
            action="mailto:tu@email.com?subject=Contacto desde Portfolio"
            method="POST"
            encType="text/plain"
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-purple-400">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-purple-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-purple-400">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                rows="5"
                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Tu mensaje..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/MattSeltz"
              target="_blank"
              className="p-4 bg-slate-800/50 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/matias-seltzer"
              target="_blank"
              className="p-4 bg-slate-800/50 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:matiselt@outlook.es"
              target="_blank"
              className="p-4 bg-slate-800/50 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-purple-500/20 relative z-10">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Matías Seltzer. Desarrollado con Next.js
          y TailwindCSS
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
