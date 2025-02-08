import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cardVariants } from '../lib/animations';

const ArticleCard = ({ title, excerpt, date, tags }) => (
  <motion.article
    variants={cardVariants}
    whileHover="hover"
    className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
    
    <span className="text-xs font-semibold text-primary dark:text-primary-300">
      {new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </span>
    
    <Link to="/article/1" className="block mt-2">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-primary transition-colors">
        {title}
      </h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        {excerpt}
      </p>
    </Link>
    
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map(tag => (
        <span 
          key={tag}
          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
        >
          #{tag}
        </span>
      ))}
    </div>
  </motion.article>
);

export default ArticleCard;
