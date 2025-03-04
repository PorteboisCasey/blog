import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { articles } from '../content/articles';
import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const article = articles[id]?.[language];

  useEffect(() => {
    if (!article) {
      navigate('/articles');
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-club-black">
      <div className="relative w-full bg-club-dark border-b border-club-neon/10 z-[60]">
        <div className="container mx-auto px-4 pt-40 pb-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl text-club-text mb-4 leading-tight break-words px-4 sm:px-8">
              {article.title}
            </h1>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 mb-32"
      >
      <article className="max-w-3xl mx-auto pb-48">
        <div className="prose dark:prose-invert prose-lg max-w-none w-full px-4 sm:px-8 prose-headings:text-club-black dark:prose-headings:text-club-text prose-p:text-club-smoke dark:prose-p:text-club-text/70 prose-strong:text-club-neon prose-a:text-club-neon hover:prose-a:text-club-neon/80 prose-h2:text-3xl prose-h3:text-2xl prose-h2:mt-12 prose-h3:mt-8 prose-p:leading-relaxed prose-p:mb-6 prose-ul:mb-6 prose-li:mb-2 break-words prose-img:rounded-lg prose-img:shadow-xl dark:prose-img:shadow-club-neon/10">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>
      </motion.div>
    </div>
  );
};

export default ArticlePage;
