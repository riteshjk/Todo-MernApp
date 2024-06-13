import express from 'express';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../controller/createTodo.controller.js';
const router = express.Router();

router.post("/createtodo", createTodo)
router.get("/gettodo", getTodo)
router.delete("/deletetodo/:id", deleteTodo)
router.patch("/updatetodo/:id", updateTodo)


export default router
