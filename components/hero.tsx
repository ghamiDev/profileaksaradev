'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Database, Zap } from 'lucide-react'

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="glass px-6 py-3 rounded-full border-cyan-500/30">
            <span className="text-cyan-400 font-semibold">Welcome to the Future</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 gradient-neon-text"
        >
          Innovative Tech
          <br />
          Solutions
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Crafting cutting-edge software and IT consulting services for modern enterprises
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 glow-intense hover:shadow-2xl transition-shadow"
          >
            Get Started <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-lg font-semibold text-cyan-400 border border-cyan-500/50 hover:border-cyan-400"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
        >
          {[
            { icon: Code2, label: 'Full Stack Dev' },
            { icon: Database, label: 'Cloud Solutions' },
            { icon: Zap, label: 'Performance' },
          ].map((feature) => (
            <motion.div
              key={feature.label}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-xl border-purple-500/20 hover:border-purple-500/50 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-gray-300">{feature.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
