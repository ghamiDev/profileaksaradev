'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export const About = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-cyan-400 font-semibold">About Me</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold mb-6 gradient-neon-text"
            >
              Expert in Modern Tech Stack
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg mb-8 leading-relaxed"
            >
              With 10+ years of experience in software development and IT consulting, I help
              businesses transform their digital infrastructure. Specializing in cloud solutions,
              full-stack development, and enterprise architecture.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                'Full-Stack Web Development',
                'Cloud Architecture & DevOps',
                'Scalable Solutions',
                'Technical Consulting',
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex gap-3 items-center"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl border-cyan-500/30">
              <div className="space-y-6">
                {[
                  { label: 'Projects Completed', value: '150+' },
                  { label: 'Clients Worldwide', value: '80+' },
                  { label: 'Years Experience', value: '10+' },
                  { label: 'Team Size', value: '25+' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ x: 10 }}
                    className="border-l-2 border-purple-500 pl-4"
                  >
                    <p className="text-cyan-400 font-bold text-2xl">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
