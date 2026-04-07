'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, CheckCircle, ArrowRight } from 'lucide-react'

const migrationSteps = [
  { step: 1, name: 'Assessment', status: 'completed', time: '2 days' },
  { step: 2, name: 'Planning', status: 'completed', time: '3 days' },
  { step: 3, name: 'Migration', status: 'in-progress', time: '5 days' },
  { step: 4, name: 'Testing', status: 'pending', time: '2 days' },
  { step: 5, name: 'Deployment', status: 'pending', time: '1 day' },
]

export const CloudMigrationDemo = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-xl border border-cyan-500/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Cloud className="text-cyan-400" size={24} />
          <h3 className="text-2xl font-bold text-white">Cloud Migration Suite</h3>
        </div>
        <p className="text-gray-400 mb-8">Seamless migration to cloud infrastructure with zero downtime</p>

        <div className="space-y-4">
          {migrationSteps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-6 rounded-lg border ${
                item.status === 'completed'
                  ? 'border-cyan-500/50 bg-cyan-500/5'
                  : item.status === 'in-progress'
                    ? 'border-purple-500/50 bg-purple-500/5'
                    : 'border-gray-600/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      item.status === 'completed'
                        ? 'bg-cyan-500/30 text-cyan-400'
                        : item.status === 'in-progress'
                          ? 'bg-purple-500/30 text-purple-400'
                          : 'bg-gray-600/30 text-gray-400'
                    }`}
                  >
                    {item.status === 'completed' ? <CheckCircle size={20} /> : item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.time} estimated</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'completed'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : item.status === 'in-progress'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-gray-600/20 text-gray-400'
                  }`}
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass p-6 rounded-xl border border-cyan-500/20"
      >
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Database size={20} /> Infrastructure Benefits
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: '99.99%', desc: 'Uptime SLA' },
            { label: '40%', desc: 'Cost Reduction' },
            { label: '24/7', desc: 'Support' },
            { label: '0ms', desc: 'Downtime' },
          ].map((benefit, i) => (
            <div key={i} className="glass p-4 rounded-lg border border-purple-500/30">
              <p className="text-2xl font-bold text-cyan-400 mb-1">{benefit.label}</p>
              <p className="text-sm text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
