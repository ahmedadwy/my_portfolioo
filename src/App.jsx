import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  // تطبيق Dark Mode على html
  useEffect(() => {
    const html = document.documentElement;
    if (dark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [dark]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-200 transition-colors duration-500">
      <Navbar/>

      <main className="pt-16">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
