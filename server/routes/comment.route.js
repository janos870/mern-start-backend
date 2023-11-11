import express from 'express';
import { comments, createComment } from '../controllers/comment.controller.js';

const router = express.Router();

router.get("/comments", comments);
router.post("/comment", createComment);


export default router;