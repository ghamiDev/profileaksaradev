export function Industries() {
  const industries = [
    {
      title: "UMKM & F&B",
      desc: "Pemesanan online, kasir, stok bahan, dan laporan penjualan untuk usaha kecil hingga menengah.",
    },
    {
      title: "Logistik & Transportasi",
      desc: "Pelacakan pengiriman, manajemen armada, dan dokumen digital yang terhubung.",
    },
    {
      title: "Pendidikan",
      desc: "Portal akademik, absensi, penilaian, dan pembelajaran daring untuk sekolah dan lembaga kursus.",
    },
    {
      title: "Kesehatan",
      desc: "Pendaftaran pasien, jadwal praktik, rekam layanan, dan manajemen obat.",
    },
    {
      title: "Retail & Distribusi",
      desc: "Inventaris multi-gudang, penjualan, dan integrasi dengan marketplace.",
    },
    {
      title: "Startup & Produk Digital",
      desc: "MVP cepat untuk menguji ide, lalu skalakan produknya bersama tim Anda.",
    },
  ];

  return (
    <div
      id="industri"
      className="pad-section py-24 px-6 bg-white border-y border-[var(--line)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono-code text-[13px] tracking-[0.08em] uppercase text-[var(--primary)] font-medium mb-4">
          Industri
        </p>
        <h2 className="font-space text-[clamp(30px,4vw,44px)] leading-[1.15] font-bold tracking-[-0.02em] mb-4 max-w-[760px]">
          Aplikasi untuk cara kerja industri Anda.
        </h2>
        <p className="subhead-text mb-section text-[18px] text-[var(--muted)] mb-12 max-w-[680px]">
          Setiap industri punya alur kerja sendiri. Kami mulai dari memahami
          alur itu, baru menulis kode.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="pad-card bg-[#F7F7F4] border border-[var(--line)] rounded-[16px] p-7"
            >
              <h3 className="font-space text-[21px] leading-[1.25] mb-[10px]">
                {ind.title}
              </h3>
              <p className="m-0 text-[var(--muted)] text-[15px]">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
