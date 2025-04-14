const Blog = require('../models/Blog');

// GET all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// CREATE blog
const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: 'Could not create blog' });
  }
};

module.exports = {
  getBlogs,
  createBlog
};
