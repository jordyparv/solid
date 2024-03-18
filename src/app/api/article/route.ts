import Article from '@/models/Article.model';
import dbConnect from '@/utils/db';
import { type NextRequest } from 'next/server';
export async function GET(req: NextRequest, res: Response) {
  await dbConnect();
  const searchParams = req.nextUrl.searchParams;
  let limit: number = Number(searchParams.get('limit')) || 50;
  const articles = await Article.find({}).sort({ createdAt: -1 }).limit(50);
  return Response.json({ data: articles });
}

export async function POST(req: Request, res: Response) {
  try {
    await dbConnect();
    const data = await req.json();

    if (Array.isArray(data)) {
      const validationErrors = [];
      const savedArticles = [];

      for (const article of data) {
        const validationResult = new Article(article).validateSync();
        if (validationResult) {
          validationErrors.push(...Object.values(validationResult.errors));
        } else {
          // Check if article with same title already exists
          const existingArticle = await Article.findOne({
            title: article.title,
          });
          if (!existingArticle) {
            const newArticle = new Article(article);
            const savedArticle = await newArticle.save();
            savedArticles.push(savedArticle);
          }
        }
      }

      if (validationErrors.length > 0) {
        return Response.json({ errors: validationErrors }, { status: 400 });
      }

      return Response.json({ data: savedArticles }, { status: 200 });
    }

    if (!data || !data.title || !data.content) {
      return new Response(`Missing required fields in request body`, {
        status: 400,
      });
    }

    const existingArticle = await Article.findOne({ title: data.title });
    if (existingArticle) {
      return Response.json({ message: 'Data already exists' }, { status: 200 });
    }

    const article = new Article(data);
    const savedArticle = await article.save();
    return Response.json({ data: savedArticle._id });
  } catch (error: any) {
    console.error(error.message);

    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(
        (err: any) => err.message
      );
      return Response.json({ errors: validationErrors }, { status: 400 });
    }

    return Response.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
