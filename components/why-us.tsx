export function WhyUs() {
  const points = [
    {
      number: "01",
      title: "Spesifikasi yang jelas",
      desc: "Ide diterjemahkan menjadi daftar fitur, alur layar, dan prototipe sebelum pengembangan dimulai.",
    },
    {
      number: "02",
      title: "Progres yang terlihat",
      desc: "Rilis bertahap dengan demo berkala, bukan menunggu berbulan-bulan tanpa kabar.",
    },
    {
      number: "03",
      title: "Lingkup dan biaya terkendali",
      desc: "Setiap perubahan dicatat dan disepakati bersama, jadi tidak ada kejutan di akhir proyek.",
    },
    {
      number: "04",
      title: "Mudah dipakai",
      desc: "Desain dibuat dari alur kerja pengguna nyata dan diuji sebelum diluncurkan.",
    },
    {
      number: "05",
      title: "Dirawat setelah rilis",
      desc: "Pemantauan, perbaikan, dan pengembangan fitur lanjutan tetap berjalan setelah aplikasi live.",
    },
  ];

  return (
    <div className="pad-section py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono-code text-[13px] tracking-[0.08em] uppercase text-[var(--primary)] font-medium mb-4">
          Kenapa AKSARA DEV
        </p>
        <h2 className="font-space text-[clamp(30px,4vw,44px)] leading-[1.15] font-bold tracking-[-0.02em] mb-4 max-w-[760px]">
          Lima masalah umum pembuatan aplikasi, kami tangani sejak hari pertama.
        </h2>
        <p className="subhead-text mb-section text-[18px] text-[var(--muted)] mb-12 max-w-[680px]">
          Ide yang tidak jelas, progres yang tidak terlihat, biaya yang
          membengkak. Cara kerja kami dirancang supaya Anda selalu tahu apa yang
          sedang dibangun dan kapan selesai.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {points.map((pt) => (
            <div
              key={pt.number}
              className="pad-card bg-white border border-[var(--line)] rounded-[16px] p-7"
            >
              <div className="font-mono-code text-[14px] font-medium text-[var(--accent)] mb-[14px]">
                {pt.number}
              </div>
              <h3 className="font-space text-[21px] leading-[1.25] mb-[10px]">
                {pt.title}
              </h3>
              <p className="m-0 text-[var(--muted)] text-[15px]">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
