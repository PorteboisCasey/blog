import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code2, Rocket, Brain } from 'lucide-react';

const Home = () => {
  const projects = [
    {
      title: 'Portfolio Tech Blog',
      description: 'Blog moderne développé avec React, TailwindCSS et Framer Motion',
      icon: <Code2 className="h-8 w-8 mb-4 text-blue-400" />,
      tags: ['React', 'TailwindCSS', 'Framer Motion']
    },
    {
      title: 'Projet 2',
      description: 'Description de votre deuxième projet impressionnant',
      icon: <Rocket className="h-8 w-8 mb-4 text-purple-400" />,
      tags: ['Next.js', 'TypeScript', 'Node.js']
    },
    {
      title: 'Projet 3',
      description: 'Description de votre troisième projet innovant',
      icon: <Brain className="h-8 w-8 mb-4 text-green-400" />,
      tags: ['Python', 'FastAPI', 'Docker']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text animate-float">
              Passionné par la Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Développeur créatif explorant les dernières technologies web et partageant mes découvertes à travers des projets concrets.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="card-hover bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            >
              {project.icon}
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href="#"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                Voir plus <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-6 mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            href="https://github.com/votre-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-8 w-8" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            href="https://linkedin.com/in/votre-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-8 w-8" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
