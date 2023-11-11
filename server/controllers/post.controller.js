import Post from "../models/post.model.js";

// get posts
export const posts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// create post
export const createPost = async (req, res) => {
  const { title, content, author, image } = req.body;

  try {
    const newPost = new Post({ title, content, author, image });
    await newPost.save();
    res.status(200).json({ message: "Post successfully created!", newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while creating the post" });
  }
};
