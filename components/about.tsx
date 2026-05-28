"use client"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Trophy } from "lucide-react"

const timeline = [
  {
    year: "2026",
    title: "Gemini Hackathon Participant",
    description: "Participated in Gemini Hackathon 2026 and explored AI-powered solutions.",
    type: "achievement",
  },
  {
    year: "2026",
    title: "Built Krishna Catering Services Website",
    description: "Developed a full-stack catering services platform using MERN stack.",
    type: "work",
  },
  {
    year: "2024",
    title: "Web Development Intern",
    description: "Completed Web Development Internship at Prodigy InfoTech.",
    type: "work",
  },
  {
    year: "2024",
    title: "Started MERN Stack Development",
    description: "Built responsive full-stack applications using React, Node.js, Express, and MongoDB.",
    type: "education",
  },
  {
    year: "2023",
    title: "Started B.Tech in CSE",
    description: "Pursuing B.Tech in Computer Science Engineering \nwith specialization in Artificial Intelligence at \nParul Institute of Engineering & Technology",
    type: "education",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Who I Am
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                I&apos;m Miriyala Pujitha, a Computer Science Engineering (AI) student and MERN Stack Developer passionate about building intelligent digital solutions using modern web technologies and Artificial Intelligence.
                about building scalable web applications and AI-powered systems.
                I enjoy transforming innovative ideas into real-world digital solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                My expertise includes React.js, Node.js, Express.js, MongoDB,
                and modern frontend technologies. I also have strong foundations
                in Data Structures & Algorithms, OOP, DBMS, and REST APIs.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing B.Tech in Computer Science Engineering at
                Parul Institute of Engineering & Technology with a CGPA of 7.97,
                I continuously explore Artificial Intelligence, modern web technologies,
                and full-stack development to build intelligent and impactful digital solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">

              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  100+
                </div>
                <div className="text-sm text-muted-foreground">
                  LeetCode Problems
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  2+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Coding
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Certifications
                </div>
              </div>

            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              My <span className="gradient-text">Journey</span>
            </h3>

            <div className="relative">

              {/* Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-indigo-500" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16 pb-8 last:pb-0"
                >

                  {/* Dot */}
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">

                    {item.type === "work" ? (
                      <Briefcase className="w-2.5 h-2.5 text-primary" />
                    ) : item.type === "achievement" ? (
                      <Trophy className="w-2.5 h-2.5 text-primary" />
                    ) : (
                      <GraduationCap className="w-2.5 h-2.5 text-primary" />
                    )}

                  </div>

                  <div className="glass-card p-4 rounded-xl hover:glow-border transition-all duration-300">
                    <span className="text-xs font-mono text-primary">
                      {item.year}
                    </span>

                    <h4 className="font-semibold mt-1">
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}