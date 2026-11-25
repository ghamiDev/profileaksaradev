"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    nama: "",
    usaha: "",
    email: "",
    jenis: "Aplikasi web",
    cerita: "",
  });

  const getWaLink = () => {
    const { nama, usaha, email, jenis, cerita } = formData;
    const msg =
      "Halo AKSARA DEV, saya " +
      nama +
      (usaha ? " dari " + usaha : "") +
      " (" +
      email +
      "). Jenis aplikasi: " +
      jenis +
      ". " +
      cerita;
    return "https://wa.me/6285725531089?text=" + encodeURIComponent(msg);
  };

  return (
    <div
      id="top"
      style={{
        ["--primary" as string]: "#2B3990",
        ["--ink" as string]: "#0F1535",
        ["--muted" as string]: "#4A5170",
        ["--line" as string]: "#DADDEB",
        ["--soft" as string]: "#EEF0FA",
        ["--accent" as string]: "#C2410C",
        width: "100%",
        background: "#F7F7F4",
        color: "var(--ink)",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "16px",
        lineHeight: "1.6",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(247,247,244,0.94)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px 24px",
          }}
        >
          <a
            className="brand"
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "var(--ink)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "9px",
                background: "var(--primary)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              A
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "0.02em",
              }}
            >
              AKSARA DEV
            </div>
          </a>
          <nav
            className="nav-links"
            aria-label="Menu utama"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 22px",
              fontSize: "15px",
            }}
          >
            <a href="#layanan" style={{ textDecoration: "none", color: "var(--muted)" }}>
              Layanan
            </a>
            <a href="#proses" style={{ textDecoration: "none", color: "var(--muted)" }}>
              Proses
            </a>
            <a href="#teknologi" style={{ textDecoration: "none", color: "var(--muted)" }}>
              Teknologi
            </a>
            <a href="#industri" style={{ textDecoration: "none", color: "var(--muted)" }}>
              Industri
            </a>
            <a href="#portofolio" style={{ textDecoration: "none", color: "var(--muted)" }}>
              Portofolio
            </a>
          </nav>
          <div className="nav-cta" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <a
              className="hide-m"
              href="#layanan"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "44px",
                padding: "0 18px",
                borderRadius: "10px",
                border: "1.5px solid var(--primary)",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Lihat Layanan
            </a>
            <a
              href="#kontak"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "44px",
                padding: "0 18px",
                borderRadius: "10px",
                background: "var(--primary)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Konsultasi<span className="hide-xs">&nbsp;Gratis</span>
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: "80px 24px 96px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "56px",
          }}
        >
          <div style={{ flex: "1 1 480px", minWidth: 0 }}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--primary)",
                fontWeight: 500,
                margin: "0 0 20px",
              }}
            >
              AKSARA DEV · Jasa Pembuatan Aplikasi
            </p>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 5.5vw, 60px)",
                lineHeight: 1.08,
                fontWeight: 700,
                letterSpacing: "-0.025em",
                margin: "0 0 24px",
              }}
            >
              Ide Anda, kami tulis menjadi aplikasi yang siap dipakai.
            </h1>
            <p
              style={{
                fontSize: "19px",
                color: "var(--muted)",
                margin: "0 0 32px",
                maxWidth: "560px",
              }}
            >
              AKSARA DEV merancang dan membangun aplikasi web, mobile, dan sistem internal
              untuk bisnis Anda, dari analisis kebutuhan, desain, pengembangan, sampai
              perawatan setelah rilis.
            </p>
            <div
              className="hero-cta"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "36px",
              }}
            >
              <a
                href="#kontak"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 28px",
                  borderRadius: "10px",
                  background: "var(--primary)",
                  color: "#fff",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Konsultasi Gratis
              </a>
              <a
                href="#proses"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 28px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Lihat Cara Kerja
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "var(--soft)",
                  color: "var(--primary)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Aplikasi Web
              </span>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "var(--soft)",
                  color: "var(--primary)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Android &amp; iOS
              </span>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "var(--soft)",
                  color: "var(--primary)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Sistem Internal
              </span>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "var(--soft)",
                  color: "var(--primary)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                API &amp; Integrasi
              </span>
            </div>
          </div>

          {/* hero mockup */}
          <div
            className="hero-visual"
            style={{
              flex: "1 1 440px",
              minWidth: 0,
              position: "relative",
              padding: "0 0 56px",
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                boxShadow: "0 24px 60px rgba(15,21,53,0.12)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--line)",
                  background: "#FAFAFC",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#D5D8E6",
                  }}
                />
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#D5D8E6",
                  }}
                />
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#D5D8E6",
                  }}
                />
                <div
                  style={{
                    marginLeft: "10px",
                    padding: "3px 14px",
                    borderRadius: "999px",
                    background: "#fff",
                    border: "1px solid var(--line)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: "var(--muted)",
                  }}
                >
                  app.contoh-klien.id
                </div>
              </div>
              <div style={{ padding: "22px" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    Dashboard Pesanan
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--muted)" }}>
                    Contoh tampilan
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 90px",
                      background: "var(--soft)",
                      borderRadius: "12px",
                      padding: "12px 14px",
                    }}
                  >
                    <div style={{ fontSize: "12px", color: "var(--muted)" }}>
                      Pesanan hari ini
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "26px",
                      }}
                    >
                      128
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "1 1 90px",
                      background: "var(--soft)",
                      borderRadius: "12px",
                      padding: "12px 14px",
                    }}
                  >
                    <div style={{ fontSize: "12px", color: "var(--muted)" }}>
                      Menunggu
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "26px",
                      }}
                    >
                      14
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "1 1 90px",
                      background: "var(--soft)",
                      borderRadius: "12px",
                      padding: "12px 14px",
                    }}
                  >
                    <div style={{ fontSize: "12px", color: "var(--muted)" }}>
                      Selesai
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "26px",
                      }}
                    >
                      114
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      padding: "10px 14px",
                      border: "1px solid var(--line)",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "13px",
                      }}
                    >
                      ORD-2026-0128
                    </span>
                    <span
                      style={{
                        padding: "2px 10px",
                        borderRadius: "999px",
                        background: "#E5E9FF",
                        color: "#2B3990",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      Baru
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      padding: "10px 14px",
                      border: "1px solid var(--line)",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "13px",
                      }}
                    >
                      ORD-2026-0127
                    </span>
                    <span
                      style={{
                        padding: "2px 10px",
                        borderRadius: "999px",
                        background: "#FFEFD5",
                        color: "#8A4B00",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      Diproses
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      padding: "10px 14px",
                      border: "1px solid var(--line)",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "13px",
                      }}
                    >
                      ORD-2026-0126
                    </span>
                    <span
                      style={{
                        padding: "2px 10px",
                        borderRadius: "999px",
                        background: "#DDF5E6",
                        color: "#14633A",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      Selesai
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* phone overlay */}
            <div
              className="phone"
              style={{
                position: "absolute",
                right: "12px",
                bottom: 0,
                width: "150px",
                background: "var(--ink)",
                borderRadius: "22px",
                padding: "8px",
                boxShadow: "0 18px 40px rgba(15,21,53,0.28)",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "14px 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  Pesanan Saya
                </div>
                <div
                  style={{
                    height: "8px",
                    borderRadius: "4px",
                    background: "var(--soft)",
                  }}
                />
                <div
                  style={{
                    height: "8px",
                    width: "70%",
                    borderRadius: "4px",
                    background: "var(--soft)",
                  }}
                />
                <div
                  style={{
                    marginTop: "4px",
                    padding: "8px 0",
                    borderRadius: "8px",
                    background: "var(--primary)",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Lacak Pesanan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ background: "var(--soft)", padding: "48px 24px" }}>
        <div
          className="stats"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <div style={{ flex: "1 1 200px" }}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: 1.1,
                color: "var(--primary)",
              }}
            >
              150+
            </div>
            <div style={{ color: "var(--muted)", fontSize: "15px" }}>proyek selesai</div>
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: 1.1,
                color: "var(--primary)",
              }}
            >
              80+
            </div>
            <div style={{ color: "var(--muted)", fontSize: "15px" }}>klien global</div>
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: 1.1,
                color: "var(--primary)",
              }}
            >
              10+
            </div>
            <div style={{ color: "var(--muted)", fontSize: "15px" }}>tahun pengalaman</div>
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: 1.1,
                color: "var(--primary)",
              }}
            >
              25+
            </div>
            <div style={{ color: "var(--muted)", fontSize: "15px" }}>anggota tim</div>
          </div>
        </div>
      </div>

      {/* KENAPA */}
      <div style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--primary)",
              fontWeight: 500,
              margin: "0 0 16px",
            }}
          >
            Kenapa AKSARA DEV
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
              maxWidth: "760px",
            }}
          >
            Lima masalah umum pembuatan aplikasi, kami tangani sejak hari pertama.
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "var(--muted)",
              margin: "0 0 48px",
              maxWidth: "680px",
            }}
          >
            Ide yang tidak jelas, progres yang tidak terlihat, biaya yang membengkak.
            Cara kerja kami dirancang supaya Anda selalu tahu apa yang sedang dibangun
            dan kapan selesai.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  marginBottom: "14px",
                }}
              >
                01
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Spesifikasi yang jelas
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Ide diterjemahkan menjadi daftar fitur, alur layar, dan prototipe
                sebelum pengembangan dimulai.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  marginBottom: "14px",
                }}
              >
                02
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Progres yang terlihat
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Rilis bertahap dengan demo berkala, bukan menunggu berbulan-bulan tanpa
                kabar.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  marginBottom: "14px",
                }}
              >
                03
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Lingkup dan biaya terkendali
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Setiap perubahan dicatat dan disepakati bersama, jadi tidak ada
                kejutan di akhir proyek.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  marginBottom: "14px",
                }}
              >
                04
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Mudah dipakai
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Desain dibuat dari alur kerja pengguna nyata dan diuji sebelum
                diluncurkan.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  marginBottom: "14px",
                }}
              >
                05
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Dirawat setelah rilis
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Pemantauan, perbaikan, dan pengembangan fitur lanjutan tetap berjalan
                setelah aplikasi live.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LAYANAN */}
      <div
        id="layanan"
        style={{
          padding: "96px 24px",
          background: "#fff",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--primary)",
              fontWeight: 500,
              margin: "0 0 16px",
            }}
          >
            Produk &amp; Layanan
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
              maxWidth: "760px",
            }}
          >
            Delapan layanan. Pilih yang Anda butuhkan, tambah saat bisnis tumbuh.
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "var(--muted)",
              margin: "0 0 48px",
              maxWidth: "680px",
            }}
          >
            Mulai dari satu aplikasi sederhana, lalu kembangkan bertahap. Setiap
            layanan bisa diambil terpisah atau digabung dalam satu proyek.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                WEB
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Aplikasi Web
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Dashboard, portal pelanggan, hingga sistem manajemen yang bisa
                diakses dari browser mana pun.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                MOBILE
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Aplikasi Mobile
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Android dan iOS dari satu basis kode atau native, sesuai kebutuhan
                performa dan anggaran.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                PWA
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Progressive Web App
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Aplikasi yang bisa dipasang di layar ponsel tanpa toko aplikasi,
                ringan dan tetap berjalan saat sinyal lemah.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                SISTEM
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Sistem Internal
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Gantikan spreadsheet dan kertas dengan sistem yang menyatukan stok,
                transaksi, dan laporan.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                ORDER
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Ordering &amp; E-commerce
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Katalog, keranjang, pembayaran, dan pelacakan pesanan untuk toko
                maupun usaha kuliner.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                API
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Integrasi &amp; API
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Hubungkan aplikasi dengan sistem akuntansi, payment gateway, WhatsApp,
                dan layanan pihak ketiga.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                UI/UX
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                UI/UX Design
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Riset pengguna, wireframe, dan prototipe interaktif yang divalidasi
                sebelum kode ditulis.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                CARE
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Maintenance &amp; Support
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Pemantauan, perbaikan bug, pembaruan keamanan, dan pengembangan
                fitur setelah rilis.
              </p>
            </div>
          </div>

          <div
            className="cta-band"
            style={{
              marginTop: "32px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              background: "var(--soft)",
              borderRadius: "16px",
              padding: "28px 32px",
            }}
          >
            <div style={{ flex: "1 1 320px" }}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "22px",
                  margin: "0 0 6px",
                }}
              >
                Belum yakin aplikasi apa yang tepat?
              </h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>
                Ceritakan masalah bisnis Anda, kami bantu rumuskan solusi dan
                perkiraan lingkupnya.
              </p>
            </div>
            <a
              href="#kontak"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "48px",
                padding: "0 24px",
                borderRadius: "10px",
                background: "var(--primary)",
                color: "#fff",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Konsultasi gratis
            </a>
          </div>
        </div>
      </div>

      {/* PROSES */}
      <div
        id="proses"
        style={{
          padding: "96px 24px",
          background: "var(--ink)",
          color: "#E7E9F8",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#9FB0FF",
              fontWeight: 500,
              margin: "0 0 16px",
            }}
          >
            Proses Kerja
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
              maxWidth: "760px",
              color: "#fff",
            }}
          >
            Dari ide sampai aplikasi live, enam tahap yang jelas.
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#AEB4D6",
              margin: "0 0 48px",
              maxWidth: "680px",
            }}
          >
            Setiap tahap punya hasil yang bisa Anda tinjau dan setujui sebelum
            lanjut ke tahap berikutnya.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#9FB0FF",
                  marginBottom: "12px",
                }}
              >
                01
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                  color: "#fff",
                }}
              >
                Discovery
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#AEB4D6",
                  fontSize: "15px",
                }}
              >
                Memahami tujuan bisnis, pengguna, dan masalah yang ingin
                diselesaikan melalui sesi diskusi terarah.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#9FB0FF",
                  marginBottom: "12px",
                }}
              >
                02
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                  color: "#fff",
                }}
              >
                Spesifikasi &amp; Desain
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#AEB4D6",
                  fontSize: "15px",
                }}
              >
                Daftar fitur, alur layar, dan prototipe interaktif yang Anda
                setujui sebelum pengembangan.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#9FB0FF",
                  marginBottom: "12px",
                }}
              >
                03
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                  color: "#fff",
                }}
              >
                Development Bertahap
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#AEB4D6",
                  fontSize: "15px",
                }}
              >
                Pengembangan per sprint dengan demo berkala, sehingga Anda bisa
                memberi masukan lebih awal.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#9FB0FF",
                  marginBottom: "12px",
                }}
              >
                04
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                  color: "#fff",
                }}
              >
                Quality Assurance
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#AEB4D6",
                  fontSize: "15px",
                }}
              >
                Pengujian fungsi, performa, dan keamanan di berbagai perangkat
                sebelum aplikasi dirilis.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#9FB0FF",
                  marginBottom: "12px",
                }}
              >
                05
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                  color: "#fff",
                }}
              >
                Peluncuran
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#AEB4D6",
                  fontSize: "15px",
                }}
              >
                Deploy ke server produksi, migrasi data, dan pendampingan saat
                pertama kali dipakai.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#9FB0FF",
                  marginBottom: "12px",
                }}
              >
                06
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                  color: "#fff",
                }}
              >
                Dukungan Berkelanjutan
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#AEB4D6",
                  fontSize: "15px",
                }}
              >
                Pemantauan, perbaikan, dan pengembangan fitur baru mengikuti
                kebutuhan bisnis.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "32px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "22px",
                margin: "0 0 16px",
                color: "#fff",
              }}
            >
              Saat proyek diserahterimakan, Anda menerima:
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px 40px",
                color: "#E7E9F8",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 1 240px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#9FB0FF",
                    borderRadius: "2px",
                  }}
                />
                Source code dan repositori
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 1 240px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#9FB0FF",
                    borderRadius: "2px",
                  }}
                />
                Dokumentasi teknis dan panduan pengguna
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 1 240px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#9FB0FF",
                    borderRadius: "2px",
                  }}
                />
                Akses server, domain, dan akun layanan
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 1 240px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#9FB0FF",
                    borderRadius: "2px",
                  }}
                />
                Sesi pelatihan untuk tim Anda
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TEKNOLOGI */}
      <div id="teknologi" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--primary)",
              fontWeight: 500,
              margin: "0 0 16px",
            }}
          >
            Teknologi
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
              maxWidth: "760px",
            }}
          >
            Teknologi modern, dipilih sesuai kebutuhan, bukan tren.
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "var(--muted)",
              margin: "0 0 48px",
              maxWidth: "680px",
            }}
          >
            Kami memilih stack yang paling cocok untuk skala, anggaran, dan tim
            Anda, dengan arsitektur terbuka agar mudah dikembangkan atau
            dipindahtangankan.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
            <div
              style={{
                flex: "1 1 440px",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "16px",
                  padding: "22px 24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    marginBottom: "12px",
                  }}
                >
                  Frontend
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    React
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Next.js
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Vue
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Tailwind CSS
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "16px",
                  padding: "22px 24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    marginBottom: "12px",
                  }}
                >
                  Backend
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Node.js
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Laravel
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Go
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Python
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "16px",
                  padding: "22px 24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    marginBottom: "12px",
                  }}
                >
                  Mobile
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Flutter
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    React Native
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Kotlin
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Swift
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "16px",
                  padding: "22px 24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    marginBottom: "12px",
                  }}
                >
                  Data &amp; Cloud
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    PostgreSQL
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    MySQL
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Redis
                  </span>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--soft)",
                      color: "var(--primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Docker
                  </span>
                </div>
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0 }}>
              <div
                style={{
                  background: "var(--ink)",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <span
                    style={{
                      padding: "2px 10px",
                      borderRadius: "6px",
                      background: "#9FB0FF",
                      color: "var(--ink)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    POST
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      color: "#E7E9F8",
                    }}
                  >
                    /api/v1/orders
                  </span>
                </div>
                <pre
                  style={{
                    margin: 0,
                    padding: "20px",
                    overflowX: "auto",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: "#E7E9F8",
                  }}
                >
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
              <p
                style={{
                  margin: "16px 0 0",
                  color: "var(--muted)",
                  fontSize: "15px",
                }}
              >
                API terdokumentasi dan siap dihubungkan ke sistem akuntansi, payment
                gateway, WhatsApp, atau aplikasi lain milik Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INDUSTRI */}
      <div
        id="industri"
        style={{
          padding: "96px 24px",
          background: "#fff",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--primary)",
              fontWeight: 500,
              margin: "0 0 16px",
            }}
          >
            Industri
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
              maxWidth: "760px",
            }}
          >
            Aplikasi untuk cara kerja industri Anda.
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "var(--muted)",
              margin: "0 0 48px",
              maxWidth: "680px",
            }}
          >
            Setiap industri punya alur kerja sendiri. Kami mulai dari memahami
            alur itu, baru menulis kode.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                UMKM &amp; F&amp;B
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Pemesanan online, kasir, stok bahan, dan laporan penjualan untuk
                usaha kecil hingga menengah.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Logistik &amp; Transportasi
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Pelacakan pengiriman, manajemen armada, dan dokumen digital yang
                terhubung.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Pendidikan
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Portal akademik, absensi, penilaian, dan pembelajaran daring untuk
                sekolah dan lembaga kursus.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Kesehatan
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Pendaftaran pasien, jadwal praktik, rekam layanan, dan manajemen
                obat.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Retail &amp; Distribusi
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                Inventaris multi-gudang, penjualan, dan integrasi dengan
                marketplace.
              </p>
            </div>

            <div
              style={{
                background: "#F7F7F4",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: "0 0 10px",
                }}
              >
                Startup &amp; Produk Digital
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
                MVP cepat untuk menguji ide, lalu skalakan produknya bersama tim
                Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PAKET / PORTOFOLIO */}
      <div id="portofolio" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--primary)",
              fontWeight: 500,
              margin: "0 0 16px",
            }}
          >
            Portofolio
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: "0 0 48px",
              maxWidth: "760px",
            }}
          >
            Proyek Unggulan
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Koperasi Desa
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Platform digital untuk koperasi desa.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Next.js
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Firebase
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Tailwind
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/koperasi-desa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Koperasi Merah Putih
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Prototipe koperasi dengan fitur login.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Next.js
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Auth
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Dashboard
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/koperasi-merah-putih"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Desa Digital
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Platform digitalisasi desa.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  React
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  API
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  CMS
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/desa-digital"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Admin Panel Desa Digital
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Panel admin untuk platform Desa Digital.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  React
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Dashboard
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Auth
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/admin-desa-digital"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                POS
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Sistem point-of-sale modern.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  React
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  QRIS
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Printer
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/pos"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Travel &amp; Rental Management
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Manajemen perjalanan dan rental kendaraan.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Next.js
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Booking
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Payment
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/travel-rental"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Joglo Heritage Marketplace
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Marketplace untuk produk budaya Joglo.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Next.js
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  E-commerce
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Payment
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/joglo-heritage-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                TernakKita
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Marketplace dan manajemen peternakan.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Next.js
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  E-commerce
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Dashboard
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/ternakkita"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Jepara Furniture
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Katalog dan e-commerce furnitur Jepara.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Next.js
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  E-commerce
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Tailwind
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/jepara-furniture"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                VilaVinn
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Pemesanan vila dan penyewaan liburan.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Next.js
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Booking
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Payment
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/vilavinn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "21px",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Jepata Hub
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "15px",
                  flex: 1,
                }}
              >
                Hub multi-layanan dan komunitas.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Next.js
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Full-Stack
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "var(--soft)",
                    color: "var(--primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Dashboard
                </span>
              </div>
              <a
                href="https://aksaradev.com/demo/jepata-hub"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Buka Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* KONTAK */}
      <div
        id="kontak"
        style={{
          padding: "96px 24px",
          background: "var(--primary)",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "56px",
          }}
        >
          <div style={{ flex: "1 1 420px", minWidth: 0 }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(30px, 4vw, 44px)",
                lineHeight: 1.15,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                margin: "0 0 16px",
                color: "#fff",
              }}
            >
              Siap mengubah ide Anda menjadi aplikasi?
            </h2>
            <p
              style={{
                fontSize: "18px",
                margin: "0 0 32px",
                color: "#E7E9F8",
                maxWidth: "520px",
              }}
            >
              Jadwalkan konsultasi 30 menit. Ceritakan kebutuhan Anda, kami berikan
              gambaran solusi, lingkup, dan langkah berikutnya, tanpa biaya.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "16px",
              }}
            >
              <div>
                <a
                  href="mailto:pm@aksaradev.com"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  pm@aksaradev.com
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/6285725531089"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  +62 857 2553 1089 (WhatsApp)
                </a>
              </div>
              <div>Jepara, Indonesia</div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(getWaLink(), "_blank", "noopener,noreferrer");
            }}
            style={{
              flex: "1 1 420px",
              minWidth: 0,
              background: "#fff",
              color: "var(--ink)",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
              }}
            >
              Minta konsultasi
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="f-nama" style={{ fontSize: "14px", fontWeight: 500 }}>
                Nama lengkap
              </label>
              <input
                id="f-nama"
                type="text"
                value={formData.nama}
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
                style={{
                  minHeight: "46px",
                  padding: "0 14px",
                  border: "1.5px solid var(--line)",
                  borderRadius: "10px",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  color: "var(--ink)",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="f-usaha" style={{ fontSize: "14px", fontWeight: 500 }}>
                Perusahaan / usaha
              </label>
              <input
                id="f-usaha"
                type="text"
                value={formData.usaha}
                onChange={(e) =>
                  setFormData({ ...formData, usaha: e.target.value })
                }
                style={{
                  minHeight: "46px",
                  padding: "0 14px",
                  border: "1.5px solid var(--line)",
                  borderRadius: "10px",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  color: "var(--ink)",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="f-email" style={{ fontSize: "14px", fontWeight: 500 }}>
                Email kerja
              </label>
              <input
                id="f-email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={{
                  minHeight: "46px",
                  padding: "0 14px",
                  border: "1.5px solid var(--line)",
                  borderRadius: "10px",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  color: "var(--ink)",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="f-jenis" style={{ fontSize: "14px", fontWeight: 500 }}>
                Jenis aplikasi
              </label>
              <select
                id="f-jenis"
                value={formData.jenis}
                onChange={(e) =>
                  setFormData({ ...formData, jenis: e.target.value })
                }
                style={{
                  minHeight: "46px",
                  padding: "0 12px",
                  border: "1.5px solid var(--line)",
                  borderRadius: "10px",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  color: "var(--ink)",
                  background: "#fff",
                }}
              >
                <option>Aplikasi web</option>
                <option>Aplikasi mobile (Android / iOS)</option>
                <option>Progressive Web App</option>
                <option>Sistem internal / manajemen</option>
                <option>Ordering / e-commerce</option>
                <option>Belum tahu, perlu konsultasi</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="f-cerita" style={{ fontSize: "14px", fontWeight: 500 }}>
                Ceritakan singkat kebutuhan Anda
              </label>
              <textarea
                id="f-cerita"
                rows={3}
                value={formData.cerita}
                onChange={(e) =>
                  setFormData({ ...formData, cerita: e.target.value })
                }
                style={{
                  padding: "12px 14px",
                  border: "1.5px solid var(--line)",
                  borderRadius: "10px",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  color: "var(--ink)",
                  resize: "vertical",
                }}
              />
            </div>
            <a
              href={getWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "50px",
                borderRadius: "10px",
                background: "var(--primary)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Kirim via WhatsApp
            </a>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: "56px 24px 40px",
          background: "var(--ink)",
          color: "#AEB4D6",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            <div style={{ flex: "2 1 280px", minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "9px",
                    background: "#fff",
                    color: "var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                  }}
                >
                  A
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#fff",
                    letterSpacing: "0.02em",
                  }}
                >
                  AKSARA DEV
                </div>
              </div>
              <p style={{ margin: 0, fontSize: "15px", maxWidth: "360px" }}>
                Jasa pembuatan aplikasi web, mobile, dan sistem internal untuk bisnis
                yang ingin bertumbuh secara digital.
              </p>
            </div>
            <div style={{ flex: "1 1 160px" }}>
              <div style={{ color: "#fff", fontWeight: 600, marginBottom: "12px" }}>
                Layanan
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "15px",
                }}
              >
                <a
                  href="#layanan"
                  style={{ color: "#AEB4D6", textDecoration: "none" }}
                >
                  Semua layanan
                </a>
                <a
                  href="#proses"
                  style={{ color: "#AEB4D6", textDecoration: "none" }}
                >
                  Proses kerja
                </a>
                <a
                  href="#teknologi"
                  style={{ color: "#AEB4D6", textDecoration: "none" }}
                >
                  Teknologi
                </a>
              </div>
            </div>
            <div style={{ flex: "1 1 160px" }}>
              <div style={{ color: "#fff", fontWeight: 600, marginBottom: "12px" }}>
                Perusahaan
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "15px",
                }}
              >
                <a
                  href="#industri"
                  style={{ color: "#AEB4D6", textDecoration: "none" }}
                >
                  Industri
                </a>
                <a
                  href="#portofolio"
                  style={{ color: "#AEB4D6", textDecoration: "none" }}
                >
                  Portofolio
                </a>
                <a
                  href="#kontak"
                  style={{ color: "#AEB4D6", textDecoration: "none" }}
                >
                  Kontak
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.14)",
              paddingTop: "24px",
              fontSize: "14px",
            }}
          >
            © 2026 AKSARA DEV. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <a
        className="wa-float"
        href="https://wa.me/6285725531089"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z" />
        </svg>
        <span>Chat WhatsApp</span>
      </a>
    </div>
  );
}
