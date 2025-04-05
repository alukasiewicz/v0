"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDownCircle } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Define Particle class first
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    function initParticles() {
      particles = []
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">John Doe</span>
            <span className="text-gray-400 text-2xl md:text-3xl lg:text-4xl font-normal mt-2 block">
              Frontend Developer & Designer
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Crafting elegant digital experiences with clean code and thoughtful design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white font-medium border border-gray-700 hover:bg-gray-700/50 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ArrowDownCircle size={32} />
        </a>
      </div>
    </section>
  )
}

