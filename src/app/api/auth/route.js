export async function POST(req) {
  const { password } = await req.json();

  if (password === process.env.CHAT_PASSWORD) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  return new Response(JSON.stringify({ success: false }), { status: 401 });
}
