'use client'

import { motion } from 'framer-motion'

const technologies = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Jira', 'Linux'] },
]

export const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20">
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
            Tech Stack
          </motion.span>
          <h2 className="text-5xl font-bold mb-4 gradient-neon-text mt-2">
            Technologies I Mastered
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{tech.category}</h3>
              <div className="space-y-2">
                {tech.items.map((item) => (
                  <motion.p
                    key={item}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
