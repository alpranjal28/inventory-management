import { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/", getUsers); // http://localhost:3001/dashboard

export default router;