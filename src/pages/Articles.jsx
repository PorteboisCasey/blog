import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { blogCreationArticle } from '../content/articles/blog-creation';
import { useLanguage } from '../context/LanguageContext';

const Articles = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const article = blogCreationArticle[language];

  return (
    <div className="min-h-screen bg-white dark:bg-club-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => navigate('/articles/blog-creation')}
        >
          <article className="border border-club-concrete dark:border-club-dark p-8 rounded-lg hover:border-club-neon transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-mono text-club-smoke dark:text-club-text/60">{article.date}</span>
              <span className="px-3 py-1 text-xs font-mono tracking-wider bg-club-dark text-club-text rounded-full">
                {article.tag}
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-club-black dark:text-club-text mb-4 hover:text-club-neon transition-colors duration-300">
              {article.title}
            </h2>
            <p className="text-base text-club-smoke dark:text-club-text/70 font-light leading-relaxed">
              {article.content}
            </p>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
