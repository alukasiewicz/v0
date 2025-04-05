"use client"

import { motion } from "framer-motion"
import { Code, Palette, Globe, Zap } from "lucide-react"
import Image from "next/image"

const skills = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React, Next.js",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Technologies",
    description: "REST APIs, GraphQL, Tailwind CSS",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance Optimization",
    description: "Lighthouse, Web Vitals, Accessibility",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gray-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:ml-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700/20 to-gray-900/20 backdrop-blur-sm border border-gray-700/50 transform rotate-6"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="John Doe"
                  width={500}
                  height={500}
                  className="object-cover h-full w-full rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Hello, I'm John Doe</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate frontend developer and designer with 5 years of experience creating beautiful,
              functional, and user-centered digital experiences. Based in San Francisco, I combine technical expertise
              with creative problem-solving to build modern web applications.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My approach to design and development focuses on creating intuitive interfaces that balance aesthetics
              with functionality. I'm constantly exploring new technologies and techniques to enhance my skills and
              deliver cutting-edge solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-3 text-gray-400">{skill.icon}</div>
                    <h4 className="font-medium text-white">{skill.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

