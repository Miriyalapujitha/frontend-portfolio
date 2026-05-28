"use client"

import { motion } from "framer-motion"

const skills = [
  {
    name: "Java",
    icon: "☕",
    color: "from-orange-500 to-red-500",
    level: 90,
  },
  {
    name: "Data Structures & Algorithms",
    icon: "🧠",
    color: "from-green-500 to-emerald-500",
    level: 92,
  },
  {
    name: "React.js",
    icon: "⚛️",
    color: "from-cyan-500 to-blue-500",
    level: 90,
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "from-green-600 to-lime-500",
    level: 85,
  },
  {
    name: "Express.js",
    icon: "🚀",
    color: "from-gray-500 to-gray-300",
    level: 84,
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "from-green-500 to-emerald-400",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: "🟨",
    color: "from-yellow-500 to-amber-500",
    level: 90,
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "from-sky-500 to-cyan-500",
    level: 88,
  },
  {
    name: "Artificial Intelligence",
    icon: "🤖",
    color: "from-purple-500 to-indigo-500",
    level: 80,
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">

      <div className="container mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies, frameworks, and tools I use to build
            scalable full-stack and AI-powered applications.
          </p>

        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer hover:glow-border transition-all duration-300"
            >

              <div className="flex flex-col items-center text-center">

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl mb-4"
                >
                  {skill.icon}
                </motion.div>

                <h3 className="font-semibold mb-3 text-sm md:text-base">
                  {skill.name}
                </h3>

                {/* SKILL BAR */}
                <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />

                </div>

                <span className="text-xs text-muted-foreground mt-2">
                  {skill.level}%
                </span>

              </div>

            </motion.div>
          ))}

        </div>

        {/* EXTRA SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >

          {[
            "MERN Stack",
            "REST APIs",
            "JWT Authentication",
            "Git & GitHub",
            "Next.js",
            "TypeScript",
            "Postman",
            "VS Code",
            "Responsive Design",
            "Problem Solving",
            "MongoDB Atlas",
            "Render",
            "Netlify",
          ].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 glass rounded-full text-sm font-medium hover:glow transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}

        </motion.div>

      </div>
    </section>
  )
}