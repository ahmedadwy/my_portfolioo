import React from "react";

const projects = [
  {
    title: "Leon Template",
    description:
      "Responsive HTML & CSS template with clean layout and modern design principles.",
    tech: "HTML, CSS, JavaScript",
    link: "https://ahmedadwy.github.io/leon_template/",
  },
  {
    title: "Education Website",
    description:
      "Multi-page educational website with structured UI and responsive layout.",
    tech: "HTML, CSS, JavaScript",
    link: "https://ahmedadwy.github.io/education_site/",
  },
  {
    title: "Kasper Template",
    description:
      "Landing page built using HTML, CSS, and JavaScript with focus on UI consistency.",
    tech: "HTML, CSS, JavaScript",
    link: "https://ahmedadwy.github.io/kasper_template/",
  },
  {
    title: "Coming Soon Page",
    description:
      "Simple, minimal coming-soon page optimized for all screen sizes.",
    tech: "HTML, CSS, JavaScript",
    link: "https://ahmedadwy.github.io/coming_soon/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Selected projects showcasing my frontend skills and attention to detail.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-up transition-all duration-300
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-2xl p-7
              hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                <span className="font-medium">Tech:</span> {project.tech}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
              >
                Live Demo →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
