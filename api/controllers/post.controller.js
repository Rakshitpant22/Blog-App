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


export const getposts = async (req, res, next) => {
    try {
      const startIndex = parseInt(req.query.startIndex) || 0; // Defines the starting point of the query results, defaulting to 0 if not provided.
      const limit = parseInt(req.query.limit) || 9; //  page p kitni posts dikhe user ko 
      const sortDirection = req.query.order === 'asc' ? 1 : -1;

      // The query filters posts based on multiple optional parameters:
      const posts = await Post.find({
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.query.category && { category: req.query.category }),
        ...(req.query.slug && { category: req.query.slug }),
        ...(req.query.postId && { _id: req.query.postId }),
        ...(req.query.searchTerm && {
          $or: [
            { title:   { $regex: req.query.searchTerm, $options: 'i' } },
            { content: { $regex: req.query.searchTerm, $options: 'i' } },
          ],
        }),
      })
        .sort({ updatedAt: sortDirection }) // The posts are sorted based on their updatedAt field
        .skip(startIndex)
        .limit(limit);

    const totalPosts = await Post.countDocuments(); // all posts in the DB
    const now = new Date();

    const oneMonthAgo = new Date( // to get 1 month ago date
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthPosts = await Post.countDocuments({ //calculate posts from last month
      createdAt: { $gte: oneMonthAgo },
    });
    res.status(200).json({  //send all the info 
      posts,
      totalPosts,
      lastMonthPosts,
    });
  } catch (error) {
    next(error);
  }
};