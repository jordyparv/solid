import { Schema, model, models } from "mongoose";
import { md5 } from "@/utils/md5.js";
const HeadlineSchema = new Schema(
    {
        slug: {
            type: String,
            unique: true,
        },

        source: {
            id: {
                type: String,
                default: null,
            },
            name: {
                type: String,
                required: true,
            },
        },
        author: String,
        title: {
            type: String,
            required: true,
        },
        description: String,
        url: {
            type: String,
            required: true,
        },
        ImageUrl: {
            type: String,
            default: "",
        },
        urlToImage: {
            type: String,
            default: "",
        },
        publishedAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
        content: String,
        category: {
            type: String,
        },
        keywords: {
            type: [String], // Array of strings for multiple keywords
        },
        createdAt: {
            type: Date,
            default: Date.now, // Automatically set on document creation
        },
        updatedAt: {
            type: Date,
            default: Date.now, // Automatically set on document update
        },

    }
);
// Logic to generate slug before saving the document (outside schema)
HeadlineSchema.pre('save', function (next) {
    const slug = this.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    this.slug = md5(slug);
    next();
})


const Headline = models.Headline || model("Headline", HeadlineSchema);
export default Headline;