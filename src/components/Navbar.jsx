import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#about" className="text-xl font-bold tracking-tight">
            Ahmed<span className="text-blue-600">Adwy</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium text-sm">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative hover:text-blue-600 transition
                  after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
                  after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-6 animate-fade-down flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
