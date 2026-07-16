"use client";

import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Globe, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const { t } = useLanguage();
  const router = useRouter();

  const handleStartProject = () => {
    router.push("/#contact");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    { icon: Smartphone, label: t.hero.features[0].label },
    { icon: Globe, label: t.hero.features[1].label },
    { icon: Cpu, label: t.hero.features[2].label },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div className="glass px-6 py-3 rounded-full border-cyan-500/30">
            <span className="text-cyan-400 font-semibold">{t.hero.badge}</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 gradient-neon-text"
        >
          {t.hero.title}
          <br />
          {t.hero.titleNext}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartProject}
            className="px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 glow-intense hover:shadow-2xl transition-shadow"
          >
            {t.hero.cta} <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/#services")}
            className="px-8 py-4 glass rounded-lg font-semibold text-cyan-400 border border-cyan-500/50 hover:border-cyan-400"
          >
            {t.hero.learnMore}
          </motion.button>
        </motion.div>

        {/* Platform Feature Pills */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-xl border-purple-500/20 hover:border-purple-500/50 transition-colors"
              >
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <p className="text-gray-300">{feature.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
