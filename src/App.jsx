import React, { useState, useEffect } from "react";
import photo from "./photo.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "portfolio",
        "testimonials",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Creating responsive, fast, and scalable web applications using modern technologies.",
      color: "from-emerald-400 to-cyan-400",
    },
    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description:
        "Designing beautiful, intuitive interfaces that provide exceptional user experiences.",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Apps",
      description:
        "Building cross-platform mobile applications with native performance.",
      color: "from-violet-400 to-purple-400",
    },
    {
      icon: "fas fa-database",
      title: "Backend Systems",
      description:
        "Developing robust server-side solutions and database architectures.",
      color: "from-orange-400 to-red-400",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Solutions",
      description:
        "Implementing scalable cloud infrastructure and deployment strategies.",
      color: "from-blue-400 to-indigo-400",
    },
    {
      icon: "fas fa-bolt",
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and exceptional performance.",
      color: "from-yellow-400 to-orange-400",
    },
  ];

  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description:
        "A comprehensive financial dashboard with real-time analytics, transaction tracking, and investment portfolio management.",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Chart.js", "Node.js"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Social Media Platform",
      category: "Full Stack",
      description:
        "A modern social networking platform with real-time messaging, content sharing, and community features.",
      image:
        "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "PostgreSQL", "Socket.io", "AWS"],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "E-Learning Platform",
      category: "Educational",
      description:
        "An interactive learning management system with video streaming, progress tracking, and certification.",
      image:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Firebase", "Stripe", "WebRTC"],
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Healthcare App",
      category: "Mobile",
      description:
        "A telemedicine application connecting patients with healthcare providers through secure video consultations.",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "MongoDB", "WebRTC", "HIPAA"],
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Exceptional work! The website exceeded our expectations and significantly improved our user engagement.",
        avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      content:
        "Professional, creative, and delivered on time. The mobile app has received outstanding user feedback.",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
        rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, DesignStudio",
      content:
        "Incredible attention to detail and user experience. Our conversion rates improved by 40% after the redesign.",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#070d1a] text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070d1a]/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">
              shahd khaled
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  "home",
                  "about",
                  "services",
                  "portfolio",
                  "testimonials",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === item
                        ? "text-emerald-400 bg-emerald-400/10"
                        : "text-gray-300 hover:text-emerald-400 hover:bg-white/5"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-emerald-400 p-2"
              >
                {isMenuOpen ? (
                  <i className="fas fa-times text-xl"></i>
                ) : (
                  <i className="fas fa-bars text-xl"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0b1220] border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "home",
                "about",
                "services",
                "portfolio",
                "testimonials",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 rounded-md w-full text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-[#070d1a] text-white"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500 rounded-full blur-[130px] opacity-10"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-blue-600 rounded-full blur-[130px] opacity-15"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-10"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-emerald-400/30 text-emerald-300 text-sm mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                Available for new projects
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Shahd Khaled
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Front-End Developer
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                I create clean, responsive and interactive websites
                using modern web technologies.
              </p>

              <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8 mx-auto lg:mx-0"></div>

              <div className="flex justify-center lg:justify-start mb-10">
                <a
                  href="/CV.pdf"
                  download
                  className="px-8 py-4 border border-emerald-400 text-white rounded-full font-semibold hover:bg-emerald-400 hover:text-[#070d1a] transition-all duration-300 flex items-center"
                >
                  <i className="fas fa-download mr-2"></i>
                  Download CV
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pb-12">
                <div className="w-20 h-20 bg-white/5 border border-gray-800 rounded-xl flex flex-col items-center justify-center hover:border-emerald-400/50 transition-all duration-300">
                  <i className="fab fa-html5 text-orange-500 text-2xl mb-2"></i>
                  <span className="text-gray-300 text-xm">HTML</span>
                </div>

                <div className="w-20 h-20 bg-white/5 border border-gray-800 rounded-xl flex flex-col items-center justify-center hover:border-emerald-400/50 transition-all duration-300">
                  <i className="fab fa-css3-alt text-blue-500 text-2xl mb-2"></i>
                  <span className="text-gray-300 text-xm">CSS</span>
                </div>

                <div className="w-20 h-20 bg-white/5 border border-gray-800 rounded-xl flex flex-col items-center justify-center hover:border-emerald-400/50 transition-all duration-300">
                  <i className="fab fa-js text-yellow-400 text-2xl mb-2"></i>
                  <span className="text-gray-300 text-xm">JavaScript</span>
                </div>

                <div className="w-20 h-20 bg-white/5 border border-gray-800 rounded-xl flex flex-col items-center justify-center hover:border-emerald-400/50 transition-all duration-300">
                  <i className="fas fa-wind text-cyan-400 text-2xl mb-2"></i>
                  <span className="text-gray-300 text-xm">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Right Side - Code Window */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>

              <div className="relative bg-[#0b1220] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  </div>

                  <span className="text-gray-400 text-sm">portfolio.js</span>
                  <i className="fas fa-copy text-gray-500"></i>
                </div>

                <div className="p-6 font-mono text-sm md:text-base leading-8">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-white">= {"{"}</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-cyan-400">name:</span>{" "}
                    <span className="text-green-400">"Shahd Khaled"</span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-cyan-400">role:</span>{" "}
                    <span className="text-green-400">"Front-End Developer"</span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-cyan-400">skills:</span>{" "}
                    <span className="text-white">[</span>
                  </div>

                  <div className="pl-12 text-green-400">"HTML",</div>
                  <div className="pl-12 text-green-400">"CSS",</div>
                  <div className="pl-12 text-green-400">"JavaScript",</div>
                  <div className="pl-12 text-green-400">"Tailwind CSS"</div>

                  <div className="pl-6 text-white">],</div>

                  <div className="pl-6">
                    <span className="text-cyan-400">available:</span>{" "}
                    <span className="text-purple-400">true</span>
                  </div>

                  <div className="text-white">{"}"}</div>
                </div>
              </div>

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-32 bg-emerald-400/10 blur-3xl"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-[#0a1120]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/70 to-cyan-500/70 rounded-3xl transform rotate-3"></div>
              <img
                src={photo}
                alt="Profile"
                className="relative rounded-3xl shadow-2xl w-full"
              />

            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-6 text-white">
                  About{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    Me
                  </span>
                </h2>

                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  I'm a passionate full-stack developer and designer with a love
                  for creating digital experiences that make a difference. With
                  over 5 years in the industry, I've had the privilege of
                  working with startups and established companies to bring their
                  visions to life.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  My approach combines technical expertise with creative
                  problem-solving, ensuring every project not only functions
                  flawlessly but also delivers an exceptional user experience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-emerald-950/50 to-cyan-950/50 border border-emerald-900/40 rounded-2xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-950/50 to-indigo-950/50 border border-blue-900/40 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    30+
                  </div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
              </div>

             {/* Technologies */}
<div className="mt-10">

  <h3 className="text-2xl font-bold text-white mb-6">
    Technologies I Work With
  </h3>

  <div className="grid sm:grid-cols-2 gap-4">

    {/* React */}
    <div className="bg-white/5 border border-gray-800 rounded-2xl p-5 hover:border-cyan-400/50 transition-all duration-300">
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
          <i className="fab fa-react text-cyan-400 text-2xl"></i>
        </div>

        <h4 className="text-lg font-semibold text-white">
          React
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="tech-tag">HTML</span>
        <span className="tech-tag">CSS</span>
        <span className="tech-tag">JavaScript</span>
        <span className="tech-tag">Tailwind CSS</span>
      </div>

    </div>


    {/* JavaScript */}
    <div className="bg-white/5 border border-gray-800 rounded-2xl p-5 hover:border-yellow-400/50 transition-all duration-300">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center">
          <i className="fab fa-js text-yellow-400 text-2xl"></i>
        </div>

        <h4 className="text-lg font-semibold text-white">
          JavaScript
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="tech-tag">HTML</span>
        <span className="tech-tag">CSS</span>
        <span className="tech-tag">DOM</span>
        <span className="tech-tag">APIs</span>
      </div>

    </div>


    {/* Node.js */}
    <div className="bg-white/5 border border-gray-800 rounded-2xl p-5 hover:border-green-400/50 transition-all duration-300">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-green-400/10 flex items-center justify-center">
          <i className="fab fa-node-js text-green-400 text-2xl"></i>
        </div>

        <h4 className="text-lg font-semibold text-white">
          Node.js
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="tech-tag">JavaScript</span>
        <span className="tech-tag">Express.js</span>
        <span className="tech-tag">REST API</span>
        <span className="tech-tag">MongoDB</span>
      </div>

    </div>


    {/* Tailwind CSS */}
    <div className="bg-white/5 border border-gray-800 rounded-2xl p-5 hover:border-cyan-400/50 transition-all duration-300">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
          <i className="fas fa-wind text-cyan-400 text-2xl"></i>
        </div>

        <h4 className="text-lg font-semibold text-white">
          Tailwind CSS
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="tech-tag">HTML</span>
        <span className="tech-tag">CSS</span>
        <span className="tech-tag">Responsive Design</span>
        <span className="tech-tag">Flexbox</span>
        <span className="tech-tag">Grid</span>
      </div>

    </div>


    {/* Git & GitHub */}
    <div className="bg-white/5 border border-gray-800 rounded-2xl p-5 hover:border-purple-400/50 transition-all duration-300">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center">
          <i className="fab fa-github text-purple-400 text-2xl"></i>
        </div>

        <h4 className="text-lg font-semibold text-white">
          Git & GitHub
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="tech-tag">Git</span>
        <span className="tech-tag">GitHub</span>
        <span className="tech-tag">Repositories</span>
        <span className="tech-tag">Version Control</span>
      </div>

    </div>


    {/* HTML & CSS */}
    <div className="bg-white/5 border border-gray-800 rounded-2xl p-5 hover:border-orange-400/50 transition-all duration-300">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center">
          <i className="fab fa-html5 text-orange-400 text-2xl"></i>
        </div>

        <h4 className="text-lg font-semibold text-white">
          HTML & CSS
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="tech-tag">Semantic HTML</span>
        <span className="tech-tag">CSS3</span>
        <span className="tech-tag">Flexbox</span>
        <span className="tech-tag">Grid</span>
        <span className="tech-tag">Responsive Design</span>
      </div>

    </div>

  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-[#070d1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              My{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I offer a comprehensive range of services to help bring your
              digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#0b1220] rounded-3xl p-8 shadow-lg hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-emerald-400 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                  Learn More
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* Portfolio Section */}
<section id="portfolio" className="py-24 px-4 bg-[#070d1a]">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold mb-6 text-white">
        Featured{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Work
        </span>
      </h2>

      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        A showcase of my recent projects and creative solutions
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Travel Website */}
      <div className="group relative bg-[#111a2b] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-800">

        <div className="relative overflow-hidden">

          <img
            src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Travel Website"
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">

            <div className="flex space-x-4">

              <a
                href="https://github.com/shahdk22/Travel-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>

              <a
                href="https://github.com/shahdk22/Travel-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <i className="fab fa-github"></i>
              </a>

            </div>

          </div>

        </div>

        <div className="p-8">

          <div className="flex items-center justify-between mb-4">

            <span className="px-3 py-1 bg-emerald-400/10 text-emerald-300 rounded-full text-sm font-medium">
              Web Application
            </span>

            <i className="fas fa-plane text-gray-500 group-hover:text-emerald-400 transition-colors duration-300"></i>

          </div>

          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
            Travel Website
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            A responsive travel website for exploring destinations and travel
            packages with a modern and interactive user experience.
          </p>

          <div className="flex flex-wrap gap-2">

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              HTML
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              CSS
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              JavaScript
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              Tailwind CSS
            </span>

          </div>

        </div>

      </div>


      {/* Coffee Shop */}
      <div className="group relative bg-[#111a2b] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-800">

        <div className="relative overflow-hidden">

          <img
            src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Coffee Shop"
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-amber-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">

            <div className="flex space-x-4">

              <a
                href="https://github.com/shahdk22/Coffee-Shope"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>

              <a
                href="https://github.com/shahdk22/Coffee-Shope"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <i className="fab fa-github"></i>
              </a>

            </div>

          </div>

        </div>

        <div className="p-8">

          <div className="flex items-center justify-between mb-4">

            <span className="px-3 py-1 bg-orange-400/10 text-orange-300 rounded-full text-sm font-medium">
              Web Application
            </span>

            <i className="fas fa-coffee text-gray-500 group-hover:text-orange-400 transition-colors duration-300"></i>

          </div>

          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300">
            Coffee Shop
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            A modern and responsive coffee shop website with an attractive
            interface and interactive user experience.
          </p>

          <div className="flex flex-wrap gap-2">

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              HTML
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              CSS
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              JavaScript
            </span>

          </div>

        </div>

      </div>


      {/* E-Learning Platform */}
      <div className="group relative bg-[#111a2b] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-800">

        <div className="relative overflow-hidden">

          <img
            src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="E-Learning Platform"
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />

        </div>

        <div className="p-8">

          <div className="flex items-center justify-between mb-4">

            <span className="px-3 py-1 bg-violet-400/10 text-violet-300 rounded-full text-sm font-medium">
              Educational
            </span>

            <i className="fas fa-play text-gray-500"></i>

          </div>

          <h3 className="text-2xl font-bold mb-3 text-white">
            E-Learning Platform
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            An interactive learning management system with video streaming,
            progress tracking, and certification.
          </p>

          <div className="flex flex-wrap gap-2">

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              Vue.js
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              Firebase
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              Stripe
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              WebRTC
            </span>

          </div>

        </div>

      </div>


      {/* Healthcare App */}
      <div className="group relative bg-[#111a2b] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-800">

        <div className="relative overflow-hidden">

          <img
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Healthcare App"
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />

        </div>

        <div className="p-8">

          <div className="flex items-center justify-between mb-4">

            <span className="px-3 py-1 bg-blue-400/10 text-blue-300 rounded-full text-sm font-medium">
              Mobile
            </span>

            <i className="fas fa-play text-gray-500"></i>

          </div>

          <h3 className="text-2xl font-bold mb-3 text-white">
            Healthcare App
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            A telemedicine application connecting patients with healthcare
            providers through secure video consultations.
          </p>

          <div className="flex flex-wrap gap-2">

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              React Native
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              MongoDB
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              WebRTC
            </span>

            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
              HIPAA
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 px-4 bg-gradient-to-br from-[#070d1a] via-[#0a1222] to-[#0b1026]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Client{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Love
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it - here's what my clients have to
              say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-[#0a1120]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Let's{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your next project to life? I'd love to hear from
              you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Get in Touch
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hello, I'm always excited to connect with
                  fellow creators and innovators.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-400">shahdddd@email.com</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-400">+20 1031225353</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-gray-400">Mansoura</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-100 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-100 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-100 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 text-white placeholder-gray-500 rounded-2xl focus:border-emerald-500 focus:bg-[#0b1220] focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 text-white placeholder-gray-500 rounded-2xl focus:border-emerald-500 focus:bg-[#0b1220] focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 text-white placeholder-gray-500 rounded-2xl focus:border-emerald-500 focus:bg-[#0b1220] focus:outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 text-white placeholder-gray-500 rounded-2xl focus:border-emerald-500 focus:bg-[#0b1220] focus:outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 text-white placeholder-gray-500 rounded-2xl focus:border-emerald-500 focus:bg-[#0b1220] focus:outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Send Message
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050a13] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Shahd khaled
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Shahd khaled. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;