import express from 'express';
import { createTodo, getTodo } from '../controller/createTodo.controller.js';
const router = express.Router();

router.post("/createtodo", createTodo)
router.get("/gettodo", getTodo)


export default router
