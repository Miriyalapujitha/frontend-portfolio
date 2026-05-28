"use client"

import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Globe,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 relative border-t border-border/50">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold gradient-text"
          >
            {"<Pujitha />"}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm text-center"
          >

            <span className="flex items-center gap-2 justify-center">
              Built with
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              by Miriyala Pujitha
            </span>

            <span className="text-xs mt-1 block">
              © {new Date().getFullYear()} All rights reserved
            </span>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >

            {[
              {
                icon: Github,
                href: "https://github.com/Miriyalapujitha",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/miriyala-pujitha",
                label: "LinkedIn",
              },
              {
                icon: Globe,
                href: "https://krishnacateringservices.in",
                label: "Website",
              },
              {
                icon: Mail,
                href: "mailto:pujithamiriyala418@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}

          </motion.div>

        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          Designed & Developed using Next.js, Tailwind CSS, Framer Motion, and modern web technologies.
        </motion.div>

      </div>
    </footer>
  )
}