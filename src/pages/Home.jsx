import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { articles } from '../content/articles';

const Home = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const fullText = language === 'fr' ? '> EXPLORATION DU DIGITAL UNDERGROUND_' : '> EXPLORING THE DIGITAL UNDERGROUND_';
  const article = articles['blog-creation'][language];


  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) index = 0;
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-club-black">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="font-mono text-sm text-club-smoke dark:text-club-text/60 mb-4">
              {text}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display mb-4 text-club-black dark:text-club-text leading-none">
              STUDENT 
              <span className="text-club-neon">LAB</span>
            </h1>

            <p className="text-lg text-club-smoke dark:text-club-text/70 max-w-2xl leading-relaxed font-light mb-6">
              {language === 'fr' ? 
                "Explorer le développement à travers mes expériences d'étudiant et mes projets." :
                "Exploring development through my student experiences and projects."}
            </p>

            <p className="text-sm font-mono text-club-smoke/60 dark:text-club-text/40 tracking-wider">
              {language === 'fr' ? 'EXPLORER LE DÉVELOPPEMENT' : 'EXPLORING DEVELOPMENT'}
            </p>
          </motion.div>

          {article && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-24"
            >
              <div className="max-w-2xl mx-auto">
                <motion.div
                  className="cursor-pointer"
                  onClick={() => navigate('/articles/blog-creation')}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <article className="border border-club-concrete dark:border-club-dark p-8 rounded-lg hover:border-club-neon transition-all duration-300">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm font-mono text-club-smoke dark:text-club-text/60">{article.date}</span>
                      <div className="flex gap-2">
                        {article.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs font-mono tracking-wider bg-club-dark text-club-text rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h2 className="font-display text-2xl text-club-black dark:text-club-text mb-4 hover:text-club-neon transition-colors duration-300">
                      {article.title}
                    </h2>
                    <p className="text-base text-club-smoke dark:text-club-text/70 font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-club-smoke dark:text-club-text/60 hover:text-club-neon transition-colors duration-300 mt-6">
                      <span className="text-xs font-mono mr-2">{language === 'fr' ? 'Lire la suite' : 'Read more'}</span>
                      <ArrowRight size={14} />
                    </div>
                  </article>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
