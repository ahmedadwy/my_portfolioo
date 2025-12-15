import React from "react";

const techs = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-28 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🛠 Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tools and technologies I work with on a daily basis.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="animate-fade-up flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 flex items-center justify-center
              bg-white dark:bg-gray-900
              rounded-2xl shadow-md
              transition-all duration-300
              hover:-translate-y-1 hover:scale-105">
                <img src={tech.icon} alt={tech.name} className="w-9 h-9" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
