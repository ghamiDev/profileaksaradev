"use client";

import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const portfolio = [
  {
    title: "Koperasi Desa",
    descriptionEn: "Village cooperative digital platform",
    descriptionId: "Platform digital koperasi desa",
    tech: ["Next.js", "Firebase", "Tailwind"],
    demoUrl: "/embed?url=https://v0-cooperative-digital-platform.vercel.app/",
    slug: "koperasi-desa",
  },
  {
    title: "Koperasi Merah Putih",
    descriptionEn: "Merah Putih cooperative prototype",
    descriptionId: "Prototype koperasi merah putih",
    tech: ["Next.js", "Auth", "Dashboard"],
    demoUrl:
      "/embed?url=https://v0-koperasi-merah-putih-prototype.vercel.app/login",
    slug: "koperasi-merah-putih",
  },
  {
    title: "Desa Digital",
    descriptionEn: "Village digitalization platform",
    descriptionId: "Platform digitalisasi desa",
    tech: ["React", "API", "CMS"],
    demoUrl: "/embed?url=https://desa-digital-bay.vercel.app",
    slug: "desa-digital",
  },
  {
    title: "Admin Panel Desa Digital",
    descriptionEn: "Village digital admin panel",
    descriptionId: "Panel admin desa digital",
    tech: ["React", "Dashboard", "Auth"],
    demoUrl: "/embed?url=https://admi-panel-de-d-it.vercel.app/login",
    slug: "admin-desa-digital",
  },
  {
    title: "POS",
    descriptionEn: "Modern cashier system",
    descriptionId: "Sistem kasir modern",
    tech: ["React", "QRIS", "Printer"],
    demoUrl: "/embed?url=https://aksara-pos-six.vercel.app/",
    slug: "pos",
  },
  {
    title: "Sistem Management Travel & Rental",
    descriptionEn: "Travel & vehicle rental management",
    descriptionId: "Manajemen travel & rental kendaraan",
    tech: ["Next.js", "Booking", "Payment"],
    demoUrl: "/embed?url=https://travel-rental.vercel.app/",
    slug: "travel-rental",
  },
  {
    title: "Marketplace Joglo Heritage",
    descriptionEn: "Marketplace for Joglo heritage products",
    descriptionId: "Platform marketplace untuk produk budaya Joglo",
    tech: ["Next.js", "E-commerce", "Payment"],
    demoUrl: "/embed?url=https://v0-joglo-heritage-marketplace.vercel.app/",
    slug: "marketplace-joglo-heritage",
  },
];

export const Portfolio = () => {
  const router = useRouter();
  const { t, lang } = useLanguage();

  return (
    <section id="portfolio" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold">
            {t.portfolio.badge}
          </span>
          <h2 className="text-5xl font-bold mb-4 gradient-neon-text mt-2">
            {t.portfolio.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => window.open(`/demo/${item.slug}`, "_blank")}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
            >
              {/* Preview */}
              <div className="relative">
                <iframe
                  src={item.demoUrl}
                  className="w-full h-55 border-none pointer-events-none"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold shadow-lg">
                    {t.portfolio.openDemo}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {lang === "en" ? item.descriptionEn : item.descriptionId}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
