export function TechStack() {
  return (
    <div id="teknologi" className="pad-section py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono-code text-[13px] tracking-[0.08em] uppercase text-[var(--primary)] font-medium mb-4">
          Teknologi
        </p>
        <h2 className="font-space text-[clamp(30px,4vw,44px)] leading-[1.15] font-bold tracking-[-0.02em] mb-4 max-w-[760px]">
          Teknologi modern, dipilih sesuai kebutuhan, bukan tren.
        </h2>
        <p className="subhead-text mb-section text-[18px] text-[var(--muted)] mb-12 max-w-[680px]">
          Kami memilih stack yang paling cocok untuk skala, anggaran, dan tim
          Anda, dengan arsitektur terbuka agar mudah dikembangkan atau
          dipindahtangankan.
        </p>

        <div className="flex flex-wrap gap-8">
          {/* Tech Categories Left Column */}
          <div className="flex-[1_1_440px] min-w-0 flex flex-col gap-4">
            {/* Frontend */}
            <div className="bg-white border border-[var(--line)] rounded-[16px] py-[22px] px-6">
              <div className="font-space font-bold text-[17px] mb-3">
                Frontend
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  React
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Next.js
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Vue
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white border border-[var(--line)] rounded-[16px] py-[22px] px-6">
              <div className="font-space font-bold text-[17px] mb-3">
                Backend
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Node.js
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Laravel
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Go
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Python
                </span>
              </div>
            </div>

            {/* Mobile */}
            <div className="bg-white border border-[var(--line)] rounded-[16px] py-[22px] px-6">
              <div className="font-space font-bold text-[17px] mb-3">
                Mobile
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Flutter
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  React Native
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Kotlin
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Swift
                </span>
              </div>
            </div>

            {/* Data & Cloud */}
            <div className="bg-white border border-[var(--line)] rounded-[16px] py-[22px] px-6">
              <div className="font-space font-bold text-[17px] mb-3">
                Data &amp; Cloud
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  PostgreSQL
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  MySQL
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Redis
                </span>
                <span className="py-[5px] px-3 rounded-lg bg-[var(--soft)] text-[var(--primary)] font-mono-code text-[13px] font-medium">
                  Docker
                </span>
              </div>
            </div>
          </div>

          {/* Code Window Right Column */}
          <div className="flex-[1_1_440px] min-w-0">
            <div className="bg-[var(--ink)] rounded-[16px] overflow-hidden">
              <div className="flex flex-wrap items-center gap-[10px] py-[14px] px-5 border-b border-[rgba(255,255,255,0.12)]">
                <span className="py-[2px] px-[10px] rounded-[6px] bg-[#9FB0FF] text-[var(--ink)] font-mono-code text-[12px] font-medium">
                  POST
                </span>
                <span className="font-mono-code text-[13px] text-[#E7E9F8]">
                  /api/v1/orders
                </span>
              </div>
              <pre className="m-0 p-5 overflow-x-auto font-mono-code text-[13px] leading-[1.7] text-[#E7E9F8]">
{`{
  "order_id": "ORD-2026-0128",
  "customer": "Contoh Pelanggan",
  "items": [
    { "sku": "PRD-001", "qty": 2 },
    { "sku": "PRD-014", "qty": 1 }
  ],
  "payment": "qris",
  "status": "menunggu_pembayaran"
}`}
              </pre>
            </div>
            <p className="mt-4 mb-0 text-[var(--muted)] text-[15px]">
              API terdokumentasi dan siap dihubungkan ke sistem akuntansi,
              payment gateway, WhatsApp, atau aplikasi lain milik Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
