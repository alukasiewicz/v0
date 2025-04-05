"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with glassmorphism design and smooth animations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and deadlines with drag-and-drop functionality.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["TypeScript", "React", "Redux", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts based on user location.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "OpenWeather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="h-1 w-20 bg-gray-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="overflow-hidden rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 h-full transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800/70 text-gray-300 border border-gray-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center px-4 py-2 rounded-lg bg-white text-gray-900 text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center px-4 py-2 rounded-lg bg-gray-800/70 text-white text-sm font-medium border border-gray-700/50 hover:bg-gray-700/70 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

