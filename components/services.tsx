"use client";

import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { Cloud, Code, Shield, Zap } from "lucide-react";

const serviceIcons = [Code, Cloud, Shield, Zap];

export const Services = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const colors = [
    "from-cyan-500/20 to-cyan-600/5",
    "from-purple-500/20 to-purple-600/5",
    "from-cyan-500/20 to-purple-500/10",
    "from-purple-500/20 to-cyan-600/5",
  ];

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
            {t.services.badge}
          </motion.span>
          <h2 className="text-5xl font-bold mb-4 gradient-neon-text mt-2">
            {t.services.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {t.services.items.map(
            (service: { title: string; description: string }, i: number) => {
              const Icon = serviceIcons[i];
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: "var(--glow-intense)" }}
                  className={`glass p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all bg-linear-to-br ${colors[i]}`}
                >
                  <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            },
          )}
        </motion.div>
      </div>
    </section>
  );
};
