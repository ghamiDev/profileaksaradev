import Link from "next/link";

export function Navbar() {
  return (
    <div className="nav-header-bar sticky top-0 z-20 bg-[rgba(247,247,244,0.94)] backdrop-blur-md border-b border-[var(--line)]">
      <div className="nav-header-inner max-w-[1200px] mx-auto py-[14px] px-6 flex flex-wrap items-center justify-between gap-y-3 gap-x-6">
        <Link
          href="#top"
          className="brand flex items-center gap-[10px] no-underline text-[var(--ink)]"
        >
          <div className="w-9 h-9 rounded-[9px] bg-[var(--primary)] text-white flex items-center justify-center font-space font-bold text-xl">
            A
          </div>
          <div className="font-space font-bold text-xl tracking-[0.02em]">
            AKSARA DEV
          </div>
        </Link>

        <nav
          className="nav-links flex flex-wrap gap-y-2 gap-x-[22px] text-[15px]"
          aria-label="Menu utama"
        >
          <Link href="#layanan" className="no-underline text-[var(--muted)] hover:text-[var(--ink)]">
            Layanan
          </Link>
          <Link href="#proses" className="no-underline text-[var(--muted)] hover:text-[var(--ink)]">
            Proses
          </Link>
          <Link href="#teknologi" className="no-underline text-[var(--muted)] hover:text-[var(--ink)]">
            Teknologi
          </Link>
          <Link href="#industri" className="no-underline text-[var(--muted)] hover:text-[var(--ink)]">
            Industri
          </Link>
          <Link href="#portofolio" className="no-underline text-[var(--muted)] hover:text-[var(--ink)]">
            Portofolio
          </Link>
        </nav>

        <div className="nav-cta flex flex-wrap gap-[10px]">
          <Link
            href="#layanan"
            className="hide-m inline-flex items-center min-h-[44px] px-[18px] rounded-[10px] border-[1.5px] border-[var(--primary)] text-[var(--primary)] font-semibold text-[15px] no-underline hover:bg-[var(--soft)]"
          >
            Lihat Layanan
          </Link>
          <Link
            href="#kontak"
            className="inline-flex items-center min-h-[44px] px-[18px] rounded-[10px] bg-[var(--primary)] !text-white hover:!text-white font-semibold text-[15px] no-underline hover:opacity-90 transition-opacity"
          >
            Konsultasi<span className="hide-xs">&nbsp;Gratis</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
