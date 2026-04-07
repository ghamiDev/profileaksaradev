'use client'

import { motion } from 'framer-motion'

export const AnimatedBackground = () => {
  const orbs = [
    { delay: 0, size: 400, x: -200, y: -200 },
    { delay: 2, size: 300, x: 200, y: 150 },
    { delay: 4, size: 250, x: -100, y: 300 },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen"
          animate={{
            x: [orb.x, orb.x + 100, orb.x],
            y: [orb.y, orb.y - 100, orb.y],
          }}
          transition={{
            duration: 20,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: orb.size,
            height: orb.size,
            background:
              i === 0
                ? 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)'
                : i === 1
                  ? 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
          }}
        />
      ))}
    </div>
  )
}
