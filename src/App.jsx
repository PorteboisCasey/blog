import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticlePage from './pages/ArticlePage';
import About from './pages/About';


const pageTransitionVariants = {
  initial: { 
    opacity: 0,
    filter: 'brightness(2) contrast(2) blur(10px)',
    transform: 'translate(10px, -10px) scale(1.1)'
  },
  animate: { 
    opacity: 1,
    filter: 'brightness(1) contrast(1) blur(0px)',
    transform: 'translate(0, 0) scale(1)'
  },
  exit: { 
    opacity: 0,
    filter: 'brightness(2) contrast(2) blur(10px)',
    transform: 'translate(-10px, 10px) scale(0.9)'
  }
};

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <LanguageProvider>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-club-black text-club-black dark:text-club-text flex flex-col relative">
      <Navbar />
      <main className="pt-20 flex-grow relative overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: 'anticipate'
            }}
            className="relative"
          >
            {/* Glitch overlay */}
            <motion.div
              className="absolute inset-0 bg-club-neon/30 mix-blend-screen"
              animate={{
                opacity: [0, 0.1, 0],
                x: [-10, 10, -10, 0],
                y: [5, -5, 5, 0]
              }}
              transition={{
                duration: 0.3,
                times: [0, 0.2, 0.8, 1]
              }}
            />
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticlePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
        <ThemeToggle />
        <LanguageToggle />
        <Footer />
      </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;