'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const portfolio = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Real-time data visualization and machine learning insights',
    tech: ['React', 'Node.js', 'TensorFlow', 'AWS'],
    image: 'bg-gradient-to-br from-cyan-500/20 to-purple-600/10',
  },
  {
    title: 'E-Commerce Solution',
    description: 'Scalable marketplace with payment integration',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Docker'],
    image: 'bg-gradient-to-br from-purple-500/20 to-cyan-600/10',
  },
  {
    title: 'Cloud Migration Suite',
    description: 'Enterprise infrastructure optimization tool',
    tech: ['Kubernetes', 'Go', 'AWS', 'Terraform'],
    image: 'bg-gradient-to-br from-cyan-500/20 to-blue-600/10',
  },
  {
    title: 'Mobile App Platform',
    description: 'Cross-platform mobile application framework',
    tech: ['React Native', 'Firebase', 'Redux', 'GraphQL'],
    image: 'bg-gradient-to-br from-purple-500/20 to-pink-600/10',
  },
]

export const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="portfolio" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-semibold"
          >
            Portfolio
          </motion.span>
          <h2 className="text-5xl font-bold mb-4 gradient-neon-text mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {portfolio.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all group"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full glass border border-purple-500/30 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github size={18} /> Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={18} /> Live
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
