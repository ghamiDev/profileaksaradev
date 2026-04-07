'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Star, Zap } from 'lucide-react'

const products = [
  { name: 'Premium Headphones', price: '$299', rating: 4.8, sales: 1203 },
  { name: 'Wireless Charger', price: '$89', rating: 4.6, sales: 2541 },
  { name: 'USB-C Cable', price: '$24', rating: 4.9, sales: 8934 },
]

export const ECommerceDemo = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-xl border border-cyan-500/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <ShoppingCart className="text-cyan-400" size={24} />
          <h3 className="text-2xl font-bold text-white">E-Commerce Solution</h3>
        </div>
        <p className="text-gray-400 mb-8">Complete online store with AI recommendations</p>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all"
            >
              <div className="w-full h-40 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                <ShoppingCart className="text-cyan-400" size={48} opacity={0.3} />
              </div>
              <h4 className="font-semibold text-white mb-2">{product.name}</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-cyan-400">{product.price}</span>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-gray-400">{product.rating}</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">{product.sales.toLocaleString()} sold</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass p-6 rounded-xl border border-cyan-500/20"
      >
        <div className="flex items-center gap-2 mb-4">
          <Zap className="text-cyan-400" size={20} />
          <h4 className="text-lg font-semibold text-white">Platform Statistics</h4>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Total Orders', value: '12,541', color: 'from-cyan-500' },
            { label: 'Revenue', value: '$524K', color: 'from-purple-600' },
            { label: 'Customers', value: '8,293', color: 'from-cyan-400' },
            { label: 'Conversion', value: '3.8%', color: 'from-purple-500' },
          ].map((stat, i) => (
            <div key={i} className="glass p-4 rounded-lg border border-cyan-500/20">
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className={`text-2xl font-bold bg-gradient-to-r ${stat.color} to-transparent bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
