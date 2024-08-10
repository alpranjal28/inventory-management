import { Router } from "express";
import { getExpensesByCategory } from "../controllers/expenseController";

const router = Router();

router.get("/", getExpensesByCategory); // http://localhost:3001/dashboard

export default router;