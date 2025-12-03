import { skillsData } from '../data/projects';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="section-heading inline-block">
            <span className="code-text">&lt;/Skills&gt;</span>
          </h2>
          <p className="text-gray-400 mt-2 text-lg">Tech Stack & Expertise</p>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-lg font-mono text-indigo-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">→</span> {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg px-4 py-3 text-center hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 cursor-default"
                  >
                    <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
