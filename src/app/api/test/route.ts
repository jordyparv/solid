export async function GET(req: Request) {
  return Response.json({ Msg: 'your message' });
}

export async function POST(req: Request) {
  return Response.json({
    Msg: 'response message',
    body: await req.json(),
  });
}
