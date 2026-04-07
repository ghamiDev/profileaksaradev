'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, Brain } from 'lucide-react'

const data = [
  { month: 'Jan', revenue: 4000, predictions: 3800 },
  { month: 'Feb', revenue: 5000, predictions: 4200 },
  { month: 'Mar', revenue: 4500, predictions: 5100 },
  { month: 'Apr', revenue: 6000, predictions: 5800 },
  { month: 'May', revenue: 7200, predictions: 7100 },
  { month: 'Jun', revenue: 8100, predictions: 8400 },
]

export const AIAnalyticsDemo = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-xl border border-cyan-500/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-cyan-400" size={24} />
          <h3 className="text-2xl font-bold text-white">AI-Powered Analytics</h3>
        </div>
        <p className="text-gray-400 mb-6">Real-time data analysis with predictive AI insights</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-4 rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #00d9ff' }} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#00d9ff" strokeWidth={2} />
                <Line type="monotone" dataKey="predictions" stroke="#a855f7" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="glass p-4 rounded-lg border border-purple-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Accuracy Rate</span>
                <span className="text-cyan-400 font-bold">94.2%</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full" style={{ width: '94.2%' }} />
              </div>
            </div>

            <div className="glass p-4 rounded-lg border border-cyan-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Processing Speed</span>
                <span className="text-cyan-400 font-bold">1.2s</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full" style={{ width: '88%' }} />
              </div>
            </div>

            <div className="glass p-4 rounded-lg border border-purple-500/30">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">AI Confidence</span>
                <span className="text-cyan-400 font-bold flex items-center gap-2">
                  <TrendingUp size={16} /> 89%
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass p-6 rounded-xl border border-cyan-500/20"
      >
        <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Real-time Data Processing',
            'Predictive Analytics Engine',
            'Custom Report Generation',
            'AI-Powered Anomaly Detection',
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
