import Comment from "../models/comment.model.js";

// comments
export const comments = async (req, res) => {
  try {
    const comments = await Comment.find().populate(
      "author",
      "username profilePicture"
    );
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};

// create comment
export const createComment = async (req, res) => {
  try {
    const comment = new Comment({
      text: req.body.text,
      author: req.user._id,
    });
    await comment.save();
    const populatedComment = await Comment.findById(comment._id).populate(
      "author",
      "username profilePicture"
    );
    res.status(200).json(populatedComment);
  } catch (error) {
    res.status(500).json(error);
  }
};
