let messages = []; // in-memory (resets on each Vercel request)

export async function GET() {
  return new Response(JSON.stringify(messages), { status: 200 });
}

export async function POST(req) {
  const { message } = await req.json();

  if (!message) {
    return new Response(JSON.stringify({ error: 'No message provided' }), { status: 400 });
  }

  const newMsg = { message, time: new Date().toLocaleTimeString() };
  messages.push(newMsg);

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
