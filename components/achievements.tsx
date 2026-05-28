"use client"

import { motion } from "framer-motion"
import { Award, Code2, GitBranch, Trophy } from "lucide-react"

const achievements = [
  {
    icon: Code2,
    title: "LeetCode",
    value: "100+",
    label: "Problems Solved",
    color: "from-yellow-500 to-orange-500",
    link: "https://leetcode.com/u/MiriyalaPujitha/",
  },

  {
    icon: GitBranch,
    title: "GitHub",
    value: "10+",
    label: "Repositories",
    color: "from-gray-500 to-gray-400",
    link: "https://github.com/Miriyalapujitha",
  },

  {
    icon: Trophy,
    title: "HackerRank",
    value: "5★",
    label: "Problem Solving",
    color: "from-green-500 to-emerald-500",
    link: "https://www.hackerrank.com/profile/pujithamiriyala1",
  },

  {
    icon: Award,
    title: "Certifications",
    value: "3+",
    label: "Completed",
    color: "from-blue-500 to-cyan-500",
    link: "#",
  },
]

const certifications = [
  "Mastering Python - Infosys Springboard",
  "Gemini Hackathon 2026 Participant",
  "India Tech Summit: Innovate 2026 - Round 2 Qualifier",
]

const codingProfiles = [
  {
    name: "GitHub",
    username: "@Miriyalapujitha",
    link: "https://github.com/Miriyalapujitha",
  },

  {
    name: "LinkedIn",
    username: "Miriyala Pujitha",
    link: "https://www.linkedin.com/in/miriyala-pujitha-71182131b/",
  },

  {
    name: "LeetCode",
    username: "100+ Problems Solved",
    link: "https://leetcode.com/u/MiriyalaPujitha/",
  },

  {
    name: "HackerRank",
    username: "@pujithamiriyala1",
    link: "https://www.hackerrank.com/profile/pujithamiriyala1",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative">

      <div className="container mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Achievements</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />

        </motion.div>

        {/* ACHIEVEMENT CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {achievements.map((achievement, index) => (
            <motion.a
              key={achievement.title}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer hover:glow-border transition-all duration-300"
            >

              <div className="flex flex-col items-center text-center">

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>

                <div className="text-3xl font-bold gradient-text mb-1">
                  {achievement.value}
                </div>

                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>

                <div className="text-xs text-primary mt-2">
                  {achievement.title}
                </div>

              </div>

            </motion.a>
          ))}

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* CERTIFICATIONS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >

            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />

              <span className="gradient-text">
                Certifications & Achievements
              </span>
            </h3>

            <ul className="space-y-4">

              {certifications.map((cert, index) => (
                <motion.li
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >

                  <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />

                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {cert}
                  </span>

                </motion.li>
              ))}

            </ul>

          </motion.div>

          {/* CODING PROFILES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >

            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-primary" />

              <span className="gradient-text">
                Coding Profiles
              </span>
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={profile.name}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-xl hover:glow transition-all"
                >

                  <div className="font-semibold">
                    {profile.name}
                  </div>

                  <div className="text-sm text-primary">
                    {profile.username}
                  </div>

                </motion.a>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}