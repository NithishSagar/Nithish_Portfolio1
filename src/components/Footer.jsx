import NithishImg from '../assets/Nithish.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-indigo-500/20 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Avatar Image */}
          <div className="rounded-lg overflow-hidden border-2 border-indigo-500/30 hover:border-indigo-500/60 transition-all">
            <img
              src={NithishImg}
              alt="Nithish Sagar"
              className="w-64 h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Quote */}
          <blockquote className="text-center max-w-2xl">
            <p className="text-lg md:text-xl text-gray-300 italic mb-2">
              "Code is poetry. Let's write something beautiful together."
            </p>
            <p className="text-sm text-indigo-400 font-mono">— Nithish Sagar</p>
          </blockquote>

          {/* Social Links */}
          <div className="flex gap-6 items-center justify-center flex-wrap">
            <a
              href="https://github.com/NithishSagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors font-mono text-sm"
            >
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors font-mono text-sm"
            >
              LinkedIn
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors font-mono text-sm"
            >
              Twitter
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="mailto:nithish@example.com"
              className="text-gray-400 hover:text-indigo-400 transition-colors font-mono text-sm"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm font-mono pt-6 border-t border-indigo-500/20 mt-6 w-full">
            <p>© {currentYear} Nithish Sagar. All rights reserved.</p>
            <p className="text-xs text-gray-600 mt-2">Designed & Developed with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
