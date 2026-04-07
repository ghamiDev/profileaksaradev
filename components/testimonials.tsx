'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Anderson',
    role: 'CEO, TechFlow Inc',
    content: 'Exceptional developer who transformed our entire infrastructure. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mark Johnson',
    role: 'CTO, Digital Ventures',
    content: 'Delivered a complex cloud migration project on time and under budget. Impressive work!',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Product Manager, StartUp Lab',
    content: 'Professional, reliable, and incredibly knowledgeable. A pleasure to work with.',
    rating: 5,
  },
]

export const Testimonials = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
            Testimonials
          </motion.span>
          <h2 className="text-5xl font-bold mb-4 gradient-neon-text mt-2">
            What Clients Say
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, j) => (
                    <Star key={j} size={16} className="fill-purple-400 text-purple-400" />
                  ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-cyan-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
