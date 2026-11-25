export function Portfolio() {
  const projects = [
    {
      title: "Koperasi Desa",
      desc: "Platform digital untuk koperasi desa.",
      tags: ["Next.js", "Firebase", "Tailwind"],
      link: "https://v0-cooperative-digital-platform.vercel.app/",
    },
    {
      title: "Koperasi Merah Putih",
      desc: "Prototipe koperasi dengan fitur login.",
      tags: ["Next.js", "Auth", "Dashboard"],
      link: "https://v0-koperasi-merah-putih-prototype.vercel.app/login",
    },
    {
      title: "Desa Digital",
      desc: "Platform digitalisasi desa.",
      tags: ["React", "API", "CMS"],
      link: "https://desa-digital-bay.vercel.app",
    },
    {
      title: "Admin Panel Desa Digital",
      desc: "Panel admin untuk platform Desa Digital.",
      tags: ["React", "Dashboard", "Auth"],
      link: "https://admi-panel-de-d-it.vercel.app/login",
    },
    {
      title: "POS",
      desc: "Sistem point-of-sale modern.",
      tags: ["React", "QRIS", "Printer"],
      link: "https://aksara-pos-six.vercel.app/",
    },
    {
      title: "Travel & Rental Management",
      desc: "Manajemen perjalanan dan rental kendaraan.",
      tags: ["Next.js", "Booking", "Payment"],
      link: "https://travel-rental.vercel.app/",
    },
    {
      title: "Joglo Heritage Marketplace",
      desc: "Marketplace untuk produk budaya Joglo.",
      tags: ["Next.js", "E-commerce", "Payment"],
      link: "https://v0-joglo-heritage-marketplace.vercel.app/",
    },
    {
      title: "TernakKita",
      desc: "Marketplace dan manajemen peternakan.",
      tags: ["Next.js", "E-commerce", "Dashboard"],
      link: "https://ternakkita.vercel.app/",
    },
    {
      title: "Jepara Furniture",
      desc: "Katalog dan e-commerce furnitur Jepara.",
      tags: ["Next.js", "E-commerce", "Tailwind"],
      link: "https://jepara-furniture-eosin.vercel.app/",
    },
    {
      title: "VilaVinn",
      desc: "Pemesanan vila dan penyewaan liburan.",
      tags: ["Next.js", "Booking", "Payment"],
      link: "https://vilavinn.vercel.app/",
    },
    {
      title: "Jepata Hub",
      desc: "Hub multi-layanan dan komunitas.",
      tags: ["Next.js", "Full-Stack", "Dashboard"],
      link: "https://jepata-hub.vercel.app/",
    },
  ];

  return (
    <div id="portofolio" className="pad-section py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono-code text-[13px] tracking-[0.08em] uppercase text-[var(--primary)] font-medium mb-4">
          Portofolio
        </p>
        <h2 className="font-space text-[clamp(30px,4vw,44px)] leading-[1.15] font-bold tracking-[-0.02em] mb-12 max-w-[760px]">
          Proyek Unggulan
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white border border-[var(--line)] rounded-[16px] p-[26px] flex flex-col gap-3"
            >
              <h3 className="font-space text-[21px] leading-[1.25] m-0">
                {proj.title}
              </h3>
              <p className="m-0 text-[var(--muted)] text-[15px] flex-1">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="py-1 px-[10px] rounded-[6px] bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[12px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-[10px] border-[1.5px] border-[var(--primary)] text-[var(--primary)] font-semibold text-[15px] no-underline hover:bg-[var(--soft)] transition-colors mt-1"
              >
                Buka Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
