import express from "express";

import { signIn } from "../controllers/login.js";

const router = express.Router();

router.post("/login", signIn);

export default router;