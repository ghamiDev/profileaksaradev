'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export const FloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/6285725531089"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg glow-intense hover:scale-110 transition-transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <MessageCircle size={24} />
    </motion.a>
  )
}
