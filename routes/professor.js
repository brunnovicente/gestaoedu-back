import express from "express"
const router = express.Router()

import ProfessorController from "../controllers/ProfessorController.js";
import auth from "../helpers/auth.js";

router.get('/', auth, ProfessorController.index)

export default router