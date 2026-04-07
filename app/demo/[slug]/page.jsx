const DEMO_MAP = {
  'koperasi-desa': 'https://v0-cooperative-digital-platform.vercel.app/',
  'koperasi-merah-putih': 'https://v0-koperasi-merah-putih-prototype.vercel.app/login',
  'desa-digital': 'https://desa-digital-bay.vercel.app',
  'admin-desa-digital': 'https://admi-panel-de-d-it.vercel.app/login',
  'pos': 'https://aksara-pos-six.vercel.app/',
  'travel-rental': 'https://travel-rental.vercel.app/',
}

export default async function DemoPage({ params }) {
  const url = DEMO_MAP[(await params).slug]

  return url ? (
    <iframe src={url} className="w-screen h-screen border-none" />
  ) : (
    <div className="p-4">Demo tidak ditemukan</div>
  )
}