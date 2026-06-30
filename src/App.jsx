import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AIML from './components/AIML';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import DevOps from './components/DevOps';
import Tools from './components/Tools';
import PathAnimation from './components/PathAnimation';
import Marquee from './components/Marquee';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Text from './components/Text';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Tools');
  const [loading, setLoading] = useState(true);
  const sections = ['Tools', 'AI & ML', 'Frontend', 'Backend', 'DevOps'];

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Loading animation timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.img 
                src="/GK.png" 
                alt="GK Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain select-none pointer-events-none"
                animate={{ 
                  scale: [0.96, 1.04, 0.96],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.6, 
                  ease: "easeInOut" 
                }}
              />
              <motion.span 
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-semibold mt-2"
              >
                Gaurav Katnoria
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-neutral-50 text-gray-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-gray-100 font-sans antialiased overflow-x-hidden selection:bg-neutral-200 dark:selection:bg-neutral-800">
        {/* Navbar */}
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Main Content */}
        <main className="relative">
          <PathAnimation />
          <Hero />
          <About darkMode={darkMode} />
          <Projects />
          <Marquee />
          <div id="skills" className="max-w-5xl mx-auto pt-24 pb-0 px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl font-normal text-gray-900 dark:text-white mb-12">
              ✦ &nbsp; Technical Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed text-base md:text-lg mb-10">
              My technical expertise combines full-stack software development with a growing focus on Artificial Intelligence. I have completed NumPy, Pandas, and Matplotlib and am currently learning Scikit-learn to strengthen my Machine Learning foundation. Alongside building modern web applications, I'm preparing to develop intelligent systems powered by Machine Learning, Large Language Models (LLMs), and Agentic AI.
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
            <div className="flex flex-wrap gap-3 items-center">
              {sections.map((section) => (
                <button
                  key={section}
                  type="button"
                  className={`rounded-full px-4 py-2 border transition ${activeSection === section ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white' : 'bg-white text-gray-900 border-neutral-200 dark:bg-neutral-900 dark:text-gray-200 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/10'}`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="px-6 py-5 md:px-8 rounded-sm overflow-hidden dark:bg-slate-950 dark:bg-gradient-to-r from-gray-900 via-slate-800 to-zinc-900 dark:animate-gradient-x shadow-sm border border-neutral-200 dark:border-neutral-800">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3 relative">
                  {sections.map((section) => {
                    const isVisible = activeSection === section;
                    return (
                      <motion.div
                        key={section}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ 
                          opacity: isVisible ? 1 : 0, 
                          y: isVisible ? 0 : 15,
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{
                          pointerEvents: isVisible ? 'auto' : 'none',
                          position: isVisible ? 'relative' : 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          zIndex: isVisible ? 10 : 0
                        }}
                      >
                        {section === 'AI & ML' && <AIML />}
                        {section === 'Frontend' && <Frontend />}
                        {section === 'Backend' && <Backend />}
                        {section === 'DevOps' && <DevOps />}
                        {section === 'Tools' && <Tools />}
                      </motion.div>
                    );
                  })}
                  <div className="flex items-center gap-4 mt-6 ml-0 w-fit">
                    <button
                      type="button"
                      className="rounded-sm border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-black hover:text-black dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-white dark:hover:text-white h-12 w-12 font-bold"
                      onClick={() => {
                        const currentIndex = sections.indexOf(activeSection);
                        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
                        setActiveSection(sections[prevIndex]);
                      }}
                    >
                      <ChevronLeft size={28} strokeWidth={1} className="m-auto" />
                    </button>
                    <button
                      type="button"
                      className="rounded-sm border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-black hover:text-black dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-white dark:hover:text-white h-12 w-12 font-bold"
                      onClick={() => {
                        const currentIndex = sections.indexOf(activeSection);
                        const nextIndex = (currentIndex + 1) % sections.length;
                        setActiveSection(sections[nextIndex]);
                      }}
                    >
                      <ChevronRight size={28} strokeWidth={1} className="m-auto" />
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 flex justify-center items-end p-0 self-end mt-5 md:mt-0">
                  <img 
                    src="/skills.png" 
                    alt="Skills Illustration" 
                    className="max-w-full h-auto max-h-[26rem] md:max-h-[30rem] object-contain select-none pointer-events-none -translate-y-16 md:-translate-y-24" 
                  />
                </div>
              </div>
            </div>
          </div>
          <Experience />
          <Contact />
        </main>
        <Text />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;