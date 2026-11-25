import Link from "next/link";

export function Services() {
  const services = [
    {
      badge: "WEB",
      title: "Aplikasi Web",
      desc: "Dashboard, portal pelanggan, hingga sistem manajemen yang bisa diakses dari browser mana pun.",
    },
    {
      badge: "MOBILE",
      title: "Aplikasi Mobile",
      desc: "Android dan iOS dari satu basis kode atau native, sesuai kebutuhan performa dan anggaran.",
    },
    {
      badge: "PWA",
      title: "Progressive Web App",
      desc: "Aplikasi yang bisa dipasang di layar ponsel tanpa toko aplikasi, ringan dan tetap berjalan saat sinyal lemah.",
    },
    {
      badge: "SISTEM",
      title: "Sistem Internal",
      desc: "Gantikan spreadsheet dan kertas dengan sistem yang menyatukan stok, transaksi, dan laporan.",
    },
    {
      badge: "ORDER",
      title: "Ordering & E-commerce",
      desc: "Katalog, keranjang, pembayaran, dan pelacakan pesanan untuk toko maupun usaha kuliner.",
    },
    {
      badge: "API",
      title: "Integrasi & API",
      desc: "Hubungkan aplikasi dengan sistem akuntansi, payment gateway, WhatsApp, dan layanan pihak ketiga.",
    },
    {
      badge: "UI/UX",
      title: "UI/UX Design",
      desc: "Riset pengguna, wireframe, dan prototipe interaktif yang divalidasi sebelum kode ditulis.",
    },
    {
      badge: "CARE",
      title: "Maintenance & Support",
      desc: "Pemantauan, perbaikan bug, pembaruan keamanan, dan pengembangan fitur setelah rilis.",
    },
  ];

  return (
    <div
      id="layanan"
      className="pad-section py-24 px-6 bg-white border-y border-[var(--line)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono-code text-[13px] tracking-[0.08em] uppercase text-[var(--primary)] font-medium mb-4">
          Produk &amp; Layanan
        </p>
        <h2 className="font-space text-[clamp(30px,4vw,44px)] leading-[1.15] font-bold tracking-[-0.02em] mb-4 max-w-[760px]">
          Delapan layanan. Pilih yang Anda butuhkan, tambah saat bisnis tumbuh.
        </h2>
        <p className="subhead-text mb-section text-[18px] text-[var(--muted)] mb-12 max-w-[680px]">
          Mulai dari satu aplikasi sederhana, lalu kembangkan bertahap. Setiap
          layanan bisa diambil terpisah atau digabung dalam satu proyek.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {services.map((svc) => (
            <div
              key={svc.badge}
              className="pad-card bg-[#F7F7F4] border border-[var(--line)] rounded-[16px] p-7"
            >
              <div className="inline-block py-[3px] px-[10px] rounded-[6px] bg-[var(--primary)] text-white font-mono-code text-[12px] font-medium tracking-[0.06em] mb-4">
                {svc.badge}
              </div>
              <h3 className="font-space text-[21px] leading-[1.25] mb-[10px]">
                {svc.title}
              </h3>
              <p className="m-0 text-[var(--muted)] text-[15px]">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Band */}
        <div className="cta-band mt-8 flex flex-wrap items-center justify-between gap-5 bg-[var(--soft)] rounded-[16px] p-7 md:p-8">
          <div className="flex-[1_1_320px]">
            <h3 className="font-space text-[22px] mb-[6px]">
              Belum yakin aplikasi apa yang tepat?
            </h3>
            <p className="m-0 text-[var(--muted)]">
              Ceritakan masalah bisnis Anda, kami bantu rumuskan solusi dan
              perkiraan lingkupnya.
            </p>
          </div>
          <Link
            href="#kontak"
            className="inline-flex items-center min-h-[48px] px-6 rounded-[10px] bg-[var(--primary)] !text-white hover:!text-white font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            Konsultasi gratis
          </Link>
        </div>
      </div>
    </div>
  );
}
