import resumePDF from '../assets/Nithish_Sagar_Dharmappa_Resume.pdf'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="section-heading inline-block">
            <span className="code-text">&lt;/About&gt;</span>
          </h2>
          <p className="text-gray-400 mt-2 text-lg">Who I Am & What I Do</p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate <span className="text-indigo-400 font-semibold">Full Stack Developer</span> with experience in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences coupled with robust server-side solutions.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              I'm driven by a love for clean code, innovative problem-solving, and continuous learning. Whether it's crafting beautiful interfaces with React or building scalable APIs with Node.js, I bring dedication and expertise to every project.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="pt-6">
              <a
                href={resumePDF}
                download="Nithish_Sagar_Dharmappa_Resume.pdf"
                className="btn-primary inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg p-6 text-center hover:border-indigo-500/60 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">50+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg p-6 text-center hover:border-indigo-500/60 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">3+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg p-6 text-center hover:border-indigo-500/60 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">20+</div>
              <p className="text-gray-400">Tech Stack</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg p-6 text-center hover:border-indigo-500/60 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100%</div>
              <p className="text-gray-400">Dedicated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
