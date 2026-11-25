import Link from "next/link";

export function Hero() {
  return (
    <div className="pad-hero py-20 md:pt-20 md:pb-24 px-6">
      <div className="hero-gap max-w-[1200px] mx-auto flex flex-wrap items-center gap-14">
        {/* Left Column */}
        <div className="flex-[1_1_480px] min-w-0">
          <p className="font-mono-code text-[13px] tracking-[0.08em] uppercase text-[var(--primary)] font-medium mb-5">
            AKSARA DEV · Jasa Pembuatan Aplikasi
          </p>
          <h1 className="font-space text-[clamp(36px,5.5vw,60px)] leading-[1.08] font-bold tracking-[-0.025em] mb-6">
            Ide Anda, kami tulis menjadi aplikasi yang siap dipakai.
          </h1>
          <p className="subhead-text text-[19px] text-[var(--muted)] mb-8 max-w-[560px]">
            AKSARA DEV merancang dan membangun aplikasi web, mobile, dan sistem
            internal untuk bisnis Anda, dari analisis kebutuhan, desain,
            pengembangan, sampai perawatan setelah rilis.
          </p>

          <div className="hero-cta flex flex-wrap gap-3 mb-9">
            <Link
              href="#kontak"
              className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-[10px] bg-[var(--primary)] !text-white hover:!text-white font-semibold no-underline hover:opacity-90 transition-opacity"
            >
              Konsultasi Gratis
            </Link>
            <Link
              href="#proses"
              className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-[10px] border-[1.5px] border-[var(--primary)] text-[var(--primary)] font-semibold no-underline hover:bg-[var(--soft)]"
            >
              Lihat Cara Kerja
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="py-[6px] px-[14px] rounded-full bg-[var(--soft)] text-[var(--primary)] text-[14px] font-medium">
              Aplikasi Web
            </span>
            <span className="py-[6px] px-[14px] rounded-full bg-[var(--soft)] text-[var(--primary)] text-[14px] font-medium">
              Android &amp; iOS
            </span>
            <span className="py-[6px] px-[14px] rounded-full bg-[var(--soft)] text-[var(--primary)] text-[14px] font-medium">
              Sistem Internal
            </span>
            <span className="py-[6px] px-[14px] rounded-full bg-[var(--soft)] text-[var(--primary)] text-[14px] font-medium">
              API &amp; Integrasi
            </span>
          </div>
        </div>

        {/* Right Column: Hero Visual */}
        <div className="hero-visual flex-[1_1_440px] min-w-0 relative pb-14">
          {/* Browser Window Mockup */}
          <div className="bg-white border border-[var(--line)] rounded-[16px] shadow-[0_24px_60px_rgba(15,21,53,0.12)] overflow-hidden">
            <div className="flex items-center gap-2 py-3 px-4 border-b border-[var(--line)] bg-[#FAFAFC]">
              <span className="w-[10px] h-[10px] rounded-full bg-[#D5D8E6]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#D5D8E6]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#D5D8E6]" />
              <div className="ml-[10px] py-[3px] px-[14px] rounded-full bg-white border border-[var(--line)] font-mono-code text-[12px] text-[var(--muted)]">
                app.contoh-klien.id
              </div>
            </div>

            <div className="p-[22px]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-[18px]">
                <div className="font-space font-bold text-[18px]">
                  Dashboard Pesanan
                </div>
                <div className="text-[12px] text-[var(--muted)]">
                  Contoh tampilan
                </div>
              </div>

              <div className="flex flex-wrap gap-[10px] mb-[18px]">
                <div className="flex-[1_1_90px] bg-[var(--soft)] rounded-[12px] py-3 px-[14px]">
                  <div className="text-[12px] text-[var(--muted)]">Pesanan hari ini</div>
                  <div className="font-space font-bold text-[26px]">128</div>
                </div>
                <div className="flex-[1_1_90px] bg-[var(--soft)] rounded-[12px] py-3 px-[14px]">
                  <div className="text-[12px] text-[var(--muted)]">Menunggu</div>
                  <div className="font-space font-bold text-[26px]">14</div>
                </div>
                <div className="flex-[1_1_90px] bg-[var(--soft)] rounded-[12px] py-3 px-[14px]">
                  <div className="text-[12px] text-[var(--muted)]">Selesai</div>
                  <div className="font-space font-bold text-[26px]">114</div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2 py-[10px] px-[14px] border border-[var(--line)] rounded-[10px] text-[14px]">
                  <span className="font-mono-code text-[13px]">ORD-2026-0128</span>
                  <span className="py-[2px] px-[10px] rounded-full bg-[#E5E9FF] text-[#2B3990] text-[12px] font-semibold">
                    Baru
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 py-[10px] px-[14px] border border-[var(--line)] rounded-[10px] text-[14px]">
                  <span className="font-mono-code text-[13px]">ORD-2026-0127</span>
                  <span className="py-[2px] px-[10px] rounded-full bg-[#FFEFD5] text-[#8A4B00] text-[12px] font-semibold">
                    Diproses
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 py-[10px] px-[14px] border border-[var(--line)] rounded-[10px] text-[14px]">
                  <span className="font-mono-code text-[13px]">ORD-2026-0126</span>
                  <span className="py-[2px] px-[10px] rounded-full bg-[#DDF5E6] text-[#14633A] text-[12px] font-semibold">
                    Selesai
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup Overlay */}
          <div className="phone absolute right-3 bottom-0 w-[150px] bg-[var(--ink)] rounded-[22px] p-2 shadow-[0_18px_40px_rgba(15,21,53,0.28)]">
            <div className="bg-white rounded-[16px] py-[14px] px-3 flex flex-col gap-2">
              <div className="font-space font-bold text-[14px]">Pesanan Saya</div>
              <div className="h-2 rounded bg-[var(--soft)]" />
              <div className="h-2 w-[70%] rounded bg-[var(--soft)]" />
              <div className="mt-1 py-2 rounded-lg bg-[var(--primary)] !text-white text-center text-[12px] font-semibold">
                Lacak Pesanan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
