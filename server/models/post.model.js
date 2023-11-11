import mongoose from "mongoose";

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
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
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
    }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;