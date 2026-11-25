export function Stats() {
  return (
    <div className="pad-stats bg-[var(--soft)] py-12 px-6">
      <div className="stats max-w-[1200px] mx-auto flex flex-wrap gap-8">
        <div className="flex-[1_1_200px]">
          <div className="stat-number font-space font-bold text-[44px] leading-[1.1] text-[var(--primary)]">
            150+
          </div>
          <div className="text-[var(--muted)] text-[15px]">proyek selesai</div>
        </div>
        <div className="flex-[1_1_200px]">
          <div className="stat-number font-space font-bold text-[44px] leading-[1.1] text-[var(--primary)]">
            80+
          </div>
          <div className="text-[var(--muted)] text-[15px]">klien global</div>
        </div>
        <div className="flex-[1_1_200px]">
          <div className="stat-number font-space font-bold text-[44px] leading-[1.1] text-[var(--primary)]">
            10+
          </div>
          <div className="text-[var(--muted)] text-[15px]">tahun pengalaman</div>
        </div>
        <div className="flex-[1_1_200px]">
          <div className="stat-number font-space font-bold text-[44px] leading-[1.1] text-[var(--primary)]">
            25+
          </div>
          <div className="text-[var(--muted)] text-[15px]">anggota tim</div>
        </div>
      </div>
    </div>
  );
}
