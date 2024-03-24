
import { slugMaker } from '@/utils/helper-functions';
import { model, models, Schema } from 'mongoose'

const CategorySchema = new Schema({
    name: { type: String, required: true, lowercase: true, trim: true },
    slug: { type: String, unique: true, lowercase: true, trim: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, enable: { type: Boolean, default: true }


})
CategorySchema.pre('save', function (next) {
    this.slug = slugMaker(this.name);
    next();
})
const Categories = models.Categories || model('Categories', CategorySchema)
export default Categories