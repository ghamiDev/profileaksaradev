"use client";

import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { useState } from "react";
import { AIAnalyticsDemo } from "./demos/ai-analytics-demo";
import { CloudMigrationDemo } from "./demos/cloud-migration-demo";
import { ECommerceDemo } from "./demos/ecommerce-demo";
import { MobilePlatformDemo } from "./demos/mobile-platform-demo";

const demoComponents = [
  { id: "analytics", component: AIAnalyticsDemo },
  { id: "ecommerce", component: ECommerceDemo },
  { id: "cloud", component: CloudMigrationDemo },
  { id: "mobile", component: MobilePlatformDemo },
];

export const DemosSection = () => {
  const [activeDemo, setActiveDemo] = useState("analytics");
  const { t } = useLanguage();

  const demoConfig = demoComponents.find((d) => d.id === activeDemo);
  const ActiveComponent = demoConfig?.component;

  return (
    <section id="demos" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {t.demos.badge}
          </motion.span>
          <h2 className="text-5xl font-bold mb-4 gradient-neon-text mt-2">
            {t.demos.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.demos.subtitle}
          </p>
        </motion.div>

        {/* Demo Tabs */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {t.demos.tabs.map(
            (tab: { title: string; desc: string }, i: number) => (
              <motion.button
                key={demoComponents[i].id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveDemo(demoComponents[i].id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-xl border transition-all ${
                  activeDemo === demoComponents[i].id
                    ? "glass border-cyan-500/50 bg-cyan-500/10"
                    : "glass border-purple-500/20 hover:border-purple-400/50"
                }`}
              >
                <h3 className="font-semibold text-white mb-2 text-sm">
                  {tab.title}
                </h3>
                <p className="text-xs text-gray-400">{tab.desc}</p>
              </motion.button>
            ),
          )}
        </div>

        {/* Active Demo Component */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {ActiveComponent && <ActiveComponent />}
        </motion.div>

        {/* CTA with Live Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl border border-cyan-500/20 text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.demos.ctaTitle}
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            {t.demos.ctaSubtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="https://wa.me/6285725531089"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold glow-intense hover:shadow-2xl transition-shadow"
            >
              {t.demos.ctaButton}
            </motion.a>
            <motion.button
              onClick={() =>
                window.open("https://wa.me/6285725531089", "_blank")
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
            >
              {t.demos.goLive}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
