"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    usaha: "",
    email: "",
    jenis: "Aplikasi web",
    cerita: "",
  });

  const generateWhatsAppUrl = () => {
    const { nama, usaha, email, jenis, cerita } = formData;
    const msg = `Halo AKSARA DEV, saya ${nama}${
      usaha ? ` dari ${usaha}` : ""
    } (${email}). Jenis aplikasi: ${jenis}. ${cerita}`;
    return `https://wa.me/6285725531089?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div id="kontak" className="pad-section py-24 px-6 bg-[var(--primary)] text-white">
      <div className="hero-gap max-w-[1200px] mx-auto flex flex-wrap gap-14">
        {/* Left Info Column */}
        <div className="flex-[1_1_420px] min-w-0">
          <h2 className="font-space text-[clamp(30px,4vw,44px)] leading-[1.15] font-bold tracking-[-0.02em] mb-4 text-white">
            Siap mengubah ide Anda menjadi aplikasi?
          </h2>
          <p className="subhead-text text-[18px] mb-8 text-[#E7E9F8] max-w-[520px]">
            Jadwalkan konsultasi 30 menit. Ceritakan kebutuhan Anda, kami berikan
            gambaran solusi, lingkup, dan langkah berikutnya, tanpa biaya.
          </p>
          <div className="flex flex-col gap-[6px] text-[16px]">
            <div>
              <a
                href="mailto:pm@aksaradev.com"
                className="text-white no-underline hover:underline"
              >
                pm@aksaradev.com
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/6285725531089"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline hover:underline"
              >
                +62 857 2553 1089 (WhatsApp)
              </a>
            </div>
            <div>Jepara, Indonesia</div>
          </div>
        </div>

        {/* Right Form Column */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(generateWhatsAppUrl(), "_blank", "noopener,noreferrer");
          }}
          className="pad-card-lg flex-[1_1_420px] min-w-0 bg-white text-[var(--ink)] rounded-[16px] p-8 flex flex-col gap-4 shadow-xl"
        >
          <div className="font-space font-bold text-[22px]">
            Minta konsultasi
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="f-nama" className="text-[14px] font-medium">
              Nama lengkap
            </label>
            <input
              id="f-nama"
              type="text"
              value={formData.nama}
              onChange={(e) =>
                setFormData({ ...formData, nama: e.target.value })
              }
              className="min-h-[46px] px-[14px] border-[1.5px] border-[var(--line)] rounded-[10px] text-[16px] text-[var(--ink)] focus:outline-none"
              placeholder="Nama Anda"
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="f-usaha" className="text-[14px] font-medium">
              Perusahaan / usaha
            </label>
            <input
              id="f-usaha"
              type="text"
              value={formData.usaha}
              onChange={(e) =>
                setFormData({ ...formData, usaha: e.target.value })
              }
              className="min-h-[46px] px-[14px] border-[1.5px] border-[var(--line)] rounded-[10px] text-[16px] text-[var(--ink)] focus:outline-none"
              placeholder="Nama usaha Anda"
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="f-email" className="text-[14px] font-medium">
              Email kerja
            </label>
            <input
              id="f-email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="min-h-[46px] px-[14px] border-[1.5px] border-[var(--line)] rounded-[10px] text-[16px] text-[var(--ink)] focus:outline-none"
              placeholder="nama@perusahaan.com"
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="f-jenis" className="text-[14px] font-medium">
              Jenis aplikasi
            </label>
            <select
              id="f-jenis"
              value={formData.jenis}
              onChange={(e) =>
                setFormData({ ...formData, jenis: e.target.value })
              }
              className="min-h-[46px] px-3 border-[1.5px] border-[var(--line)] rounded-[10px] text-[16px] text-[var(--ink)] bg-white focus:outline-none"
            >
              <option>Aplikasi web</option>
              <option>Aplikasi mobile (Android / iOS)</option>
              <option>Progressive Web App</option>
              <option>Sistem internal / manajemen</option>
              <option>Ordering / e-commerce</option>
              <option>Belum tahu, perlu konsultasi</option>
            </select>
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="f-cerita" className="text-[14px] font-medium">
              Ceritakan singkat kebutuhan Anda
            </label>
            <textarea
              id="f-cerita"
              rows={3}
              value={formData.cerita}
              onChange={(e) =>
                setFormData({ ...formData, cerita: e.target.value })
              }
              className="py-3 px-[14px] border-[1.5px] border-[var(--line)] rounded-[10px] text-[16px] text-[var(--ink)] resize-y focus:outline-none"
              placeholder="Deskripsi singkat aplikasi yang ingin dibuat..."
            />
          </div>

          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[50px] rounded-[10px] bg-[var(--primary)] !text-white hover:!text-white text-[16px] font-semibold no-underline hover:opacity-90 transition-opacity mt-1"
          >
            Kirim via WhatsApp
          </a>
        </form>
      </div>
    </div>
  );
}
