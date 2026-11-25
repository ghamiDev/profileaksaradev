export function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "Memahami tujuan bisnis, pengguna, dan masalah yang ingin diselesaikan melalui sesi diskusi terarah.",
    },
    {
      number: "02",
      title: "Spesifikasi & Desain",
      desc: "Daftar fitur, alur layar, dan prototipe interaktif yang Anda setujui sebelum pengembangan.",
    },
    {
      number: "03",
      title: "Development Bertahap",
      desc: "Pengembangan per sprint dengan demo berkala, sehingga Anda bisa memberi masukan lebih awal.",
    },
    {
      number: "04",
      title: "Quality Assurance",
      desc: "Pengujian fungsi, performa, dan keamanan di berbagai perangkat sebelum aplikasi dirilis.",
    },
    {
      number: "05",
      title: "Peluncuran",
      desc: "Deploy ke server produksi, migrasi data, dan pendampingan saat pertama kali dipakai.",
    },
    {
      number: "06",
      title: "Dukungan Berkelanjutan",
      desc: "Pemantauan, perbaikan, dan pengembangan fitur baru mengikuti kebutuhan bisnis.",
    },
  ];

  return (
    <div id="proses" className="pad-section py-24 px-6 bg-[var(--ink)] text-[#E7E9F8]">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono-code text-[13px] tracking-[0.08em] uppercase text-[#9FB0FF] font-medium mb-4">
          Proses Kerja
        </p>
        <h2 className="font-space text-[clamp(30px,4vw,44px)] leading-[1.15] font-bold tracking-[-0.02em] mb-4 max-w-[760px] text-white">
          Dari ide sampai aplikasi live, enam tahap yang jelas.
        </h2>
        <p className="subhead-text mb-section text-[18px] text-[#AEB4D6] mb-12 max-w-[680px]">
          Setiap tahap punya hasil yang bisa Anda tinjau dan setujui sebelum lanjut ke tahap berikutnya.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {steps.map((st) => (
            <div
              key={st.number}
              className="pad-card bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] rounded-[16px] p-7"
            >
              <div className="font-mono-code text-[14px] font-medium text-[#9FB0FF] mb-3">
                {st.number}
              </div>
              <h3 className="font-space text-[21px] leading-[1.25] mb-[10px] text-white">
                {st.title}
              </h3>
              <p className="m-0 text-[#AEB4D6] text-[15px]">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Handover Deliverables */}
        <div className="pad-card-lg mt-8 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] rounded-[16px] p-8">
          <h3 className="font-space text-[22px] mb-4 text-white">
            Saat proyek diserahterimakan, Anda menerima:
          </h3>
          <div className="flex flex-wrap gap-y-[14px] gap-x-10 text-[#E7E9F8]">
            <div className="flex items-center gap-[10px] flex-[1_1_240px]">
              <span className="w-2 h-2 bg-[#9FB0FF] rounded-[2px] shrink-0" />
              Source code dan repositori
            </div>
            <div className="flex items-center gap-[10px] flex-[1_1_240px]">
              <span className="w-2 h-2 bg-[#9FB0FF] rounded-[2px] shrink-0" />
              Dokumentasi teknis dan panduan pengguna
            </div>
            <div className="flex items-center gap-[10px] flex-[1_1_240px]">
              <span className="w-2 h-2 bg-[#9FB0FF] rounded-[2px] shrink-0" />
              Akses server, domain, dan akun layanan
            </div>
            <div className="flex items-center gap-[10px] flex-[1_1_240px]">
              <span className="w-2 h-2 bg-[#9FB0FF] rounded-[2px] shrink-0" />
              Sesi pelatihan untuk tim Anda
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
