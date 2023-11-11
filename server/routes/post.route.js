import express from 'express';
import { posts, createPost } from '../controllers/post.controller.js';

const router = express.Router();

router.get("/posts", posts);
router.post("/post", createPost);

export default router;



