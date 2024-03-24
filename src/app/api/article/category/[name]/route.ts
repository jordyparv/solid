import Article from '@/models/Article.model';
import dbConnect from '@/utils/db';
// import dbConnect from '@/utils/db';
type Params = {
  name: string;
};
export async function GET(req: Request, context: { params: Params }) {
  try {
    await dbConnect();
    const { name } = context.params;
    const articles = await Article.find({ category: name }).limit(10);
    return Response.json({ data: articles });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
