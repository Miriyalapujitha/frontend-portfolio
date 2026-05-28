"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Mock Interview Platform",

    description:
      "An AI-powered mock interview platform designed to help students prepare for technical and HR interviews through AI-generated questions, analytics, and role-based dashboards.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "JWT",
      "Tailwind CSS",
    ],

    features: [
      "AI-generated interview questions",
      "JWT authentication",
      "Role-based access",
      "Performance analytics",
      "Responsive dashboard",
    ],

    github: "https://github.com/Miriyalapujitha",
    live: "#",
  },

  {
    title: "Krishna Catering Services Website",

    description:
      "A responsive full-stack catering services website developed for showcasing catering services, menu details, and customer inquiry management with a modern UI.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Tailwind CSS",
    ],

    features: [
      "Responsive full-stack website",
      "Dynamic menu system",
      "Customer inquiry handling",
      "REST API integration",
      "Modern UI/UX",
    ],

    github: "https://github.com/Miriyalapujitha",
    live: "https://krishnacateringservices.in",
  },

  {
    title: "Criminal Face Detection System",

    description:
      "An AI-based facial recognition system developed for criminal and missing person identification using computer vision and image processing techniques.",

    tech: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Image Processing",
    ],

    features: [
      "Face detection system",
      "Facial feature extraction",
      "Image matching",
      "Real-time processing",
      "AI-powered recognition",
    ],

    github: "https://github.com/Miriyalapujitha",
    live: "#",
  },

  {
    title: "Mouse Control via Eye Tracking",

    description:
      "An accessibility-focused computer vision project that enables users to control mouse movement using real-time eye tracking technology.",

    tech: [
      "Python",
      "Computer Vision",
      "OpenCV",
      "Eye Tracking",
    ],

    features: [
      "Real-time eye tracking",
      "Mouse cursor control",
      "Accessibility support",
      "Computer vision integration",
      "Hands-free interaction",
    ],

    github: "https://github.com/Miriyalapujitha",
    live: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">

      <div className="container mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my projects in Full Stack Development,
            Artificial Intelligence, and Computer Vision.
          </p>

        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl p-8 lg:p-10 group hover:glow-border transition-all duration-300"
            >

              {/* TITLE */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:gradient-text transition-all">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* FEATURES */}
              <div className="mb-6">

                <h4 className="text-sm font-semibold text-primary mb-3">
                  Key Features
                </h4>

                <ul className="grid md:grid-cols-2 gap-3">

                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >

                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />

                      {feature}

                    </li>
                  ))}

                </ul>

              </div>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-8">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium glass rounded-full"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">

                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <Github className="mr-2 h-4 w-4" />

                    Code

                  </a>

                </Button>

                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  asChild
                >

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <ExternalLink className="mr-2 h-4 w-4" />

                    Live Demo

                  </a>

                </Button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}