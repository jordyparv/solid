import dbConnect from '@/utils/db';
import Categories from '@/models/Categories.model';

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const categoryData = await Categories.find();
    return Response.json({ data: categoryData });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
export async function POST(req: Request, res: Response) {
  try {
    await dbConnect();
    const data = await req.json();
    if (Array.isArray(data)) {
      const validationErrors = [];
      const savedCategories = [];

      for (const category of data) {
        const validationResult = new Categories(category).validateSync();
        if (validationResult) {
          validationErrors.push(...Object.values(validationResult.errors));
        } else {
          // Check if category with same name already exists
          const existingArticle = await Categories.findOne({
            name: category?.name?.toLowerCase(),
          });
          if (!existingArticle) {
            const newCategory = new Categories(category);
            const savedCategory = await newCategory.save();
            savedCategories.push(savedCategory);
          }
        }
      }

      if (validationErrors.length > 0) {
        return Response.json({ errors: validationErrors }, { status: 400 });
      }

      return Response.json({ data: savedCategories }, { status: 200 });
    }

    if (!data || !data?.name) {
      return new Response(`Missing required fields in request body`, {
        status: 400,
      });
    }

    const existingCategory = await Categories.findOne({ name: data?.name });
    if (existingCategory) {
      return Response.json({ message: 'Data already exists' }, { status: 200 });
    }

    const category = new Categories(data);
    const savedCategory = await category.save();
    return Response.json({ data: savedCategory._id });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
