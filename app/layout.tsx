import type { Metadata, Viewport } from 'next' // Tambahkan import Viewport
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans", // Tambahkan variabel agar CSS bisa mengenalinya
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// 1. Pindahkan viewport dan themeColor ke sini
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

// 2. Metadata sekarang hanya berisi informasi SEO dan Icon
export const metadata: Metadata = {
  title: 'Premium Software Developer & IT Consultant Portfolio',
  description: 'Innovative software developer and IT consultant specializing in cutting-edge technology solutions. Explore my portfolio and services.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* 3. Masukkan variabel font ke body agar font Geist benar-benar teraplikasi */}
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}