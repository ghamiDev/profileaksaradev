'use client'

import { motion } from 'framer-motion'
import { Smartphone, Zap, Lock, Brain } from 'lucide-react'

const features = [
  { icon: Brain, title: 'AI Integration', desc: 'Built-in ML capabilities' },
  { icon: Lock, title: 'Security First', desc: 'Enterprise-grade encryption' },
  { icon: Zap, title: 'Performance', desc: 'Lightning fast & responsive' },
]

export const MobilePlatformDemo = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-xl border border-cyan-500/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="text-cyan-400" size={24} />
          <h3 className="text-2xl font-bold text-white">Mobile App Platform</h3>
        </div>
        <p className="text-gray-400 mb-8">Cross-platform mobile development with AI integration</p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Phone Mockup */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-96 glass rounded-3xl border border-cyan-500/50 p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-3xl flex flex-col items-center justify-center">
                <Brain className="text-cyan-400 mb-4" size={32} />
                <p className="text-sm text-cyan-400 font-semibold text-center">AI-Powered</p>
                <p className="text-xs text-gray-400 mt-2 text-center">Mobile Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass p-6 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass p-6 rounded-xl border border-cyan-500/20"
      >
        <h4 className="text-lg font-semibold text-white mb-6">AI-Powered Capabilities</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {['Natural Language Processing', 'Computer Vision', 'Predictive Analytics'].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-gray-300">{cap}</span>
              </motion.div>
            ))}
          </div>
          <div className="space-y-3">
            {['Real-time Recommendations', 'Anomaly Detection', 'User Behavior Analysis'].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (i + 3) * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-gray-300">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
