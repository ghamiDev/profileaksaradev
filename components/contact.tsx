'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

export const Contact = () => {
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
    <section id="contact" className="relative py-20">
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
            Get In Touch
          </motion.span>
          <h2 className="text-5xl font-bold mb-4 gradient-neon-text mt-2">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? I&apos;d love to hear about it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Mail,
              label: 'Email',
              value: 'pm@aksaradev.com',
              href: 'mailto:pm@aksaradev.com',
            },
            {
              icon: Phone,
              label: 'WhatsApp',
              value: '+62 857 2553 1089',
              href: 'https://wa.me/6285725531089',
            },
            {
              icon: MapPin,
              label: 'Location',
              value: 'Jepara, Indonesia',
              href: 'https://maps.google.com/?q=Jepara,+Indonesia',
            },
          ].map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all text-center group"
            >
              <contact.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-gray-400 mb-2">{contact.label}</p>
              <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-2xl border border-cyan-500/20 max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Project Details</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/6285725531089', '_blank')}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold glow-intense hover:shadow-2xl transition-shadow"
            >
              Send via WhatsApp
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            { icon: Linkedin, href: 'https://wa.me/6285725531089' },
            { icon: Github, href: 'https://wa.me/6285725531089' },
            { icon: Twitter, href: 'https://wa.me/6285725531089' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full glass border border-purple-500/30 flex items-center justify-center text-cyan-400 hover:text-purple-400 hover:border-purple-400/50 transition-all"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
