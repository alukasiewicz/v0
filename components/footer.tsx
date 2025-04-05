import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:hello@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">&copy; {currentYear} John Doe. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">Crafted with ❤️ using Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

