import express from 'express';
import { posts, createPost, updatePost, deletePost } from '../controllers/post.controller.js';

const router = express.Router();

router.get("/posts", posts);
router.post("/post", createPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export default router;



