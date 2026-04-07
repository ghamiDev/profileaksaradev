export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const target = searchParams.get('url')

  if (!target) {
    return new Response('No URL', { status: 400 })
  }

  const res = await fetch(target)
  const html = await res.text()

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  })
}