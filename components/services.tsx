'use client'

import { motion } from 'framer-motion'
import { Cloud, Code, Shield, Zap } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Custom web applications built with modern frameworks and best practices',
    color: 'from-cyan-500/20 to-cyan-600/5',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'AWS, Azure, GCP deployment and management for scalable infrastructure',
    color: 'from-purple-500/20 to-purple-600/5',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security implementations and compliance audits',
    color: 'from-cyan-500/20 to-purple-500/10',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your applications and optimize database performance',
    color: 'from-purple-500/20 to-cyan-600/5',
  },
]

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="relative py-20">
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
            Services
          </motion.span>
          <h2 className="text-5xl font-bold mb-4 gradient-neon-text mt-2">
            What I Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive tech solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: 'var(--glow-intense)' }}
              className={`glass p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all bg-gradient-to-br ${service.color}`}
            >
              <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
