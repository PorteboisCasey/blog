import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { articles } from '../content/articles';
import { useEffect } from 'react';

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles[slug];

  useEffect(() => {
    if (!article) {
      navigate('/articles');
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-club-black pt-20"
    >
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-mono text-club-smoke dark:text-club-text/60">
              {article.date}
            </span>
            <div className="flex gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono tracking-wider bg-club-dark text-club-text rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-club-black dark:text-club-text mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-club-smoke dark:text-club-text/70 font-light">
            {article.excerpt}
          </p>
        </header>
        
        <div className="prose dark:prose-invert prose-lg max-w-none">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
};

export default ArticlePage;
