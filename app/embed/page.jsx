export default async function EmbedPage({ searchParams }) {
  const { url } = await searchParams

  if (!url) {
    return <div className="p-4">URL tidak ditemukan</div>
  }

  return (
    <iframe
      src={url}
      className="w-screen h-[96vh] border-none overflow-hidden"
    />
  )
}