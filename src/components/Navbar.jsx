import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { t } = useTranslation();

  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/articles', label: t('nav.articles') },
    { path: '/about', label: t('nav.about') },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-club-dark/80 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-sm tracking-widest relative overflow-hidden group ${
                  location.pathname === link.path 
                    ? 'text-club-neon' 
                    : scrolled
                      ? 'text-club-black dark:text-club-text hover:text-club-neon'
                      : 'text-club-text hover:text-club-neon'
                }`}
              >
                <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">
                  {link.label}
                </span>
                <span className="absolute top-full left-0 transform group-hover:-translate-y-full transition-transform duration-300">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center hover:text-club-neon ${
              scrolled ? 'text-club-black dark:text-club-text' : 'text-club-text'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white/95 dark:bg-club-dark/95 backdrop-blur-lg"
          >
            <div className="px-4 py-8">
              <div className="flex flex-col space-y-6">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-display text-4xl tracking-tighter ${location.pathname === link.path
                      ? 'text-club-neon'
                      : 'text-club-black dark:text-club-text hover:text-club-neon'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </nav>
  );
};

export default Navbar;
