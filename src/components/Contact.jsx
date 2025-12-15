import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          📬 Get In Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:ahmedadwy200@gmail.com"
            className="px-10 py-3 bg-blue-600 text-white rounded-lg font-medium
            transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1"
          >
            Email Me
          </a>

          <a
            href="https://github.com/ahmedadwy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 border border-gray-300 dark:border-gray-600
            rounded-lg font-medium text-gray-700 dark:text-gray-200
            transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
