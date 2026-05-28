"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin } from "lucide-react"

const roles = [
  "CSE (AI) Student",
  "MERN Stack Developer",
  "Problem Solver",
  "Full Stack Developer",
  "AI Enthusiast",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-5 leading-tight"
            >
              <span className="gradient-text glow-text">
                Miriyala
              </span>

              <br />

              <span className="text-white">
                Pujitha
              </span>
            </motion.h1>

            {/* ROLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 h-8"
            >
              <span className="text-primary font-semibold">
                {displayText}
              </span>

              <span className="animate-pulse">|</span>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-xl mb-8 mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about building intelligent full-stack applications
              using MERN technologies and Artificial Intelligence.
              Focused on scalable backend systems, modern UI/UX,
              and solving real-world problems through technology.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >

              {/* RESUME */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 glow"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>

              {/* CONTACT */}
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>

            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >

              <a
                href="https://github.com/Miriyalapujitha"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-xl hover:glow transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/miriyala-pujitha-71182131b/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-xl hover:glow transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            <div className="relative">

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 blur-3xl opacity-30 animate-pulse" />

              <div
                className="absolute inset-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-20 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />

              {/* PROFILE IMAGE */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">

                <img
                  src="/profile.png"
                  alt="Miriyala Pujitha"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </motion.div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      ={/* SCROLL INDICATOR */}
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
     >

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>

      </motion.div>
    </section>
  )
}