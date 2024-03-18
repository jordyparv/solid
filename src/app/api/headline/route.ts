import { NextApiRequest } from 'next';
import Headline from '@/models/Headline.model';
import dbConnect from '@/utils/db';
export async function GET(req: NextApiRequest) {
  try {
    await dbConnect();
    const data = await Headline.find().sort({ createdAt: -1 }).limit(1);

    return Response.json({ data });
  } catch (e: any) {
    console.log(e.message);
    return Response.json(
      {
        msg: 'Internal server error',
        //FIXME: remove below line in production
        error: e,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const headlineData = await req.json();
    console.log({ headlineData });
    const headline = new Headline(headlineData);
    const saveHeadline = await headline.save();
    return Response.json({ data: saveHeadline });
  } catch (e: any) {
    console.log(e.message);
    return Response.json(
      {
        msg: 'Internal server error',
        //FIXME: remove below line in production
        error: e,
      },
      { status: 500 }
    );
  }
}
