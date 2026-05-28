"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Globe,
} from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
  const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/contact`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }),
  })

  const data = await response.json()

  if (data.success) {
    alert("Message sent successfully!")

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  } else {
    alert("Failed to send message")
  }
} catch (error) {
  console.log(error)
  alert("Something went wrong")
}
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interested in collaborating, internships, or innovative AI-powered
            projects? Let&apos;s connect and build something impactful together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="glass-card p-8 rounded-2xl">

              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Let&apos;s Connect
              </h3>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                I&apos;m currently open to internships, collaborations,
                and exciting opportunities in Full Stack Development,
                Artificial Intelligence, and software engineering.
                Feel free to reach out anytime.
              </p>

              <div className="space-y-4">

                {/* Email */}
                <motion.a
                  href="mailto:pujithamiriyala418@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:glow transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">
                      pujithamiriyala418@gmail.com
                    </div>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">
                      Hyderabad, India
                    </div>
                  </div>
                </motion.div>

                {/* Website */}
                <motion.a
                  href="https://krishnacateringservices.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:glow transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="font-medium">Website</div>
                    <div className="text-sm text-muted-foreground">
                      krishnacateringservices.in
                    </div>
                  </div>
                </motion.a>

              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">

              <h3 className="text-xl font-semibold mb-6">
                Connect on Social
              </h3>

              <div className="flex gap-4">

                {[
                  {
                    icon: Github,
                    href: "https://github.com/Miriyalapujitha",
                    color: "hover:text-gray-300",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/miriyala-pujitha-71182131b/",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Mail,
                    href: "mailto:pujithamiriyala418@gmail.com",
                    color: "hover:text-red-400",
                  },
                ].map(({ icon: Icon, href, color }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground ${color} transition-colors`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <form
            onSubmit={handleSubmit}
             suppressHydrationWarning
              className="glass-card p-8 rounded-2xl space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Name
                  </label>

                  <Input
                    placeholder="Your name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="bg-secondary/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Email
                  </label>

                  <Input
                    type="email"
                    autoComplete="off"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="bg-secondary/50 border-primary/20 focus:border-primary"
                  />
                </div>

              </div>

              <div className="space-y-2">

                <label className="text-sm font-medium">
                  Subject
                </label>

                <Input
                  placeholder="Project / Internship / Collaboration"
                  autoComplete="off"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  className="bg-secondary/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">

                <label className="text-sm font-medium">
                  Message
                </label>

                <Textarea
                  placeholder="Write your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="bg-secondary/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 glow"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}