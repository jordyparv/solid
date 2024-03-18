import dbConnect from '@/utils/db';
import Article from '@/models/Article.model';

type Params = {
  slug: string;
};

export async function GET(req: Request, context: { params: Params }) {
  try {
    const { slug } = context.params;

    if (slug) {
      await dbConnect();
      const data = await Article.findOne({ slug });
      return Response.json({ data });
    }
    return Response.json({ msg: 'No slug provided' });
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

// export async function POST(req: Request) {
//   try {
//     await dbConnect();
//     const headlineData = await req.json();
//     console.log({ headlineData });
//     const headline = new Headline(headlineData);
//     const saveHeadline = await headline.save();
//     return Response.json({ data: saveHeadline });
//   } catch (e: any) {
//     console.log(e.message);
//     return Response.json(
//       {
//         msg: 'Internal server error',
//         //FIXME: remove below line in production
//         error: e,
//       },
//       { status: 500 }
//     );
//   }
// }
