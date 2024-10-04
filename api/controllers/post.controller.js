import Post from '../models/post.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {

  if (!req.user.isAdmin) { // if user is not admin we cant post
    return next(errorHandler(403, 'You are not allowed to create a post'));
  }

  if (!req.body.title || !req.body.content) { // check fields for posts
    return next(errorHandler(400, 'Please provide all required fields'));
  }

  // slugs helps in creating cleaner, readable URLs. ex if the post title is “Hello World 2024!”, the slug would become “hello-world-2024”. This is useful for creating SEO-friendly and human-readable URLs.
  //~ Slug Generation:
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');

  //~ Post Creation
  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });
   //~ Post Saving
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};