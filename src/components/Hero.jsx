import NithishImg from '../assets/Nithish.jpg'

const JelloLetters = ({ text }) => {
  return (
    <div className="flex gap-1 flex-wrap">
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            animation: `jello-vertical 0.9s ${index * 50}ms infinite`,
            display: 'inline-block',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-slate-950 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div id="hello-friend" className="text-indigo-400 font-light">
            <JelloLetters text="Hello, Friend!" />
          </div>

          <div id="name" className="mb-4">
            <JelloLetters text="I'm Nithish Sagar" />
          </div>

          <div id="work" className="text-indigo-300 mb-6">
            <JelloLetters text="Full Stack Developer" />
          </div>

          <p id="info-para" className="text-gray-400 max-w-lg">
            I craft beautiful, responsive web experiences with React, Node.js, and modern web technologies. Passionate about solving problems and building innovative digital solutions.
          </p>

          <div className="flex gap-4 pt-4 justify-center md:justify-start flex-wrap">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Work
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative z-20">
          <img
            src={NithishImg}
            alt="Nithish Sagar"
            className="w-full max-w-2xl h-auto rounded-lg shadow-2xl border-2 border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300 hover:shadow-indigo-500/30"
          />
        </div>
      </div>
    </section>
  )
}
