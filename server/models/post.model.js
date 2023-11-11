import mongoose from "mongoose";
import Comment from "./comment.model.js";

// post schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    comments: [Comment.schema]
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;
