import Link from "next/link";

export function Footer() {
  return (
    <footer className="pad-footer py-14 pb-10 px-6 bg-[var(--ink)] text-[#AEB4D6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap gap-10 mb-10">
          <div className="flex-[2_1_280px] min-w-0">
            <div className="flex items-center gap-[10px] mb-[14px]">
              <div className="w-9 h-9 rounded-[9px] bg-white text-[var(--ink)] flex items-center justify-center font-space font-bold text-xl">
                A
              </div>
              <div className="font-space font-bold text-xl text-white tracking-[0.02em]">
                AKSARA DEV
              </div>
            </div>
            <p className="m-0 text-[15px] max-w-[360px]">
              Jasa pembuatan aplikasi web, mobile, dan sistem internal untuk
              bisnis yang ingin bertumbuh secara digital.
            </p>
          </div>

          <div className="flex-[1_1_160px]">
            <div className="text-white font-semibold mb-3">Layanan</div>
            <div className="flex flex-col gap-2 text-[15px]">
              <Link href="#layanan" className="text-[#AEB4D6] no-underline hover:text-white">
                Semua layanan
              </Link>
              <Link href="#proses" className="text-[#AEB4D6] no-underline hover:text-white">
                Proses kerja
              </Link>
              <Link href="#teknologi" className="text-[#AEB4D6] no-underline hover:text-white">
                Teknologi
              </Link>
            </div>
          </div>

          <div className="flex-[1_1_160px]">
            <div className="text-white font-semibold mb-3">Perusahaan</div>
            <div className="flex flex-col gap-2 text-[15px]">
              <Link href="#industri" className="text-[#AEB4D6] no-underline hover:text-white">
                Industri
              </Link>
              <Link href="#portofolio" className="text-[#AEB4D6] no-underline hover:text-white">
                Portofolio
              </Link>
              <Link href="#kontak" className="text-[#AEB4D6] no-underline hover:text-white">
                Kontak
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.14)] pt-6 text-[14px]">
          © 2026 AKSARA DEV. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
