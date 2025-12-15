import React from "react";
import profile from "../assets/mm.jpg";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div className="animate-fade-right">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-blue-600">Ahmed Adwy</span> 👋
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            I'm Ahmed, a Junior Frontend Developer from Egypt 🇪🇬 and a Computer & Information Sciences graduate.
            I build responsive, modern, and user-friendly web interfaces using HTML, CSS, JavaScript, and React.
            I enjoy turning UI/UX designs into clean, efficient code and continuously improving my frontend skills
            through real-world projects.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 animate-fade-up animate-delay-200">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium
              transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600
              rounded-lg font-medium text-gray-700 dark:text-gray-200
              transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center animate-fade-left animate-delay-200">
          <div className="relative">
            <img
              src={profile}
              alt="Ahmed Adwy"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
            />

            {/* subtle ring */}
            <div className="absolute inset-0 rounded-full ring-4 ring-blue-600/10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
