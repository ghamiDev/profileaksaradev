"use client";

import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { label: t.about.stats.projects, value: "150+" },
    { label: t.about.stats.clients, value: "80+" },
    { label: t.about.stats.experience, value: "10+" },
    { label: t.about.stats.team, value: "25+" },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-cyan-400 font-semibold">
                {t.about.badge}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold mb-6 gradient-neon-text"
            >
              {t.about.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg mb-8 leading-relaxed"
            >
              {t.about.description}
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {t.about.highlights.map((item: string) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex gap-3 items-center"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl border-cyan-500/30">
              <div className="space-y-6">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ x: 10 }}
                    className="border-l-2 border-purple-500 pl-4"
                  >
                    <p className="text-cyan-400 font-bold text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
