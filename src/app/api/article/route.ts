import { ArticlePropsType } from '@/interface';
import Article from '@/models/Article.model';
import dbConnect from '@/utils/db';
import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: Response) {
  try {
    await dbConnect();
    const searchParams = req.nextUrl.searchParams;
    let limit: number = Number(searchParams.get('limit')) || 50;
    let excludeSlug: string = searchParams.get('exclude_slug') || '';
    let byCategory: number = Number(searchParams.get('by_category')) || 0;
    let postType: string = searchParams.get('post_type') || '';

    const articles = await Article.find({
      slug: { $ne: excludeSlug },
      postType: {
        [postType === '' ? '$ne' : '$eq']: postType,
      },
    })
      .sort({ createdAt: -1 })
      .limit(limit);

    if (byCategory === 1 && articles) {
      const categories = articles?.map((item) => item.category);
      const categoriesRes = await fetch(
        `${process.env.BASE_URL}/api/categories`
      );
      const { data: categoriesData }: any = await categoriesRes.json();
      const categoriesBySlug: any = {};
      for (const item of categoriesData) {
        if (categoriesBySlug[item.slug]) {
          categoriesBySlug[item.slug] = {
            ...categoriesBySlug[item.slug],
            ...item,
          };
        } else {
          categoriesBySlug[item.slug] = {
            ...item,
          };
        }
      }

      let data: {
        [key: string]: ArticlePropsType[];
      } = {};
      for (let article of articles) {
        if (
          article?.category &&
          categoriesBySlug[article?.category]?.slug &&
          categories.includes(categoriesBySlug[article.category]?.slug)
        ) {
          if (data[categoriesBySlug[article.category]?.name]) {
            data[categoriesBySlug[article.category]?.name] = [
              ...data[categoriesBySlug[article.category]?.name],
              article,
            ];
          } else {
            data[categoriesBySlug[article.category]?.name] = [article];
          }
        }
      }
      // console.log(Object.keys(data));
      return Response.json({ data });
    }

    return Response.json({ data: articles });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.json();
    await dbConnect();
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

type ArticleParamsReqType = {
  limit?: number;
};
