const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    image: String,
    metaTitle: String,
    metaDescription: String,
    paragraph: String,
    tags: [String],
    title: String,
    slug: String,
    blogCategory: String,
    description: String,
    metaKeywords: [String],
    images: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
