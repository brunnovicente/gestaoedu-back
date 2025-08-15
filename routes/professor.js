import express from "express"
const router = express.Router()

import ProfessorController from "../controllers/ProfessorController.js";

router.get('/', ProfessorController.index)

export default router