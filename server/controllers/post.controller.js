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
  const { title, content, author, likes, image } = req.body;

  try {
    const newPost = new Post({ title, content, author, likes, image });
    await newPost.save();
    res.status(200).json({ message: "Post successfully created!", newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while creating the post" });
  }
};

// update a post
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, author, likes, image } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, { title, content, author, likes, image }, { new: true });
    res.status(200).json({ message: "Post successfully updated!", updatedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while updating the post" });
  }
};

// delete a post
export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    res.status(200).json({ message: "Post successfully deleted!", deletedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while deleting the post" });
  }
};
