'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-cyan-500/20 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-neon-text mb-2">Aksara Dev Studio</h3>
            <p className="text-gray-400">
              Premium software solutions and IT consulting services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors block"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>

            <div className="space-y-3 text-gray-400">
              
              <a
                href="https://wa.me/6285725531089"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
              >
                <FaWhatsapp size={18} />
                <span>+62 857 2553 1089</span>
              </a>

              <a
                href="mailto:pm@aksaradev.com"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
              >
                <MdEmail size={18} />
                <span>pm@aksaradev.com</span>
              </a>

            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>&copy; {currentYear} Aksara Dev Studio. All rights reserved.</p>
          <p>Designed & Built with ✨</p>
        </motion.div>
      </div>
    </footer>
  )
}
