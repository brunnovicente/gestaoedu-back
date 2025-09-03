import express from "express";
const router = express.Router();
import DiarioController from "../controllers/DiarioController.js";

router.get('/listar/:siape', DiarioController.listar);

export default router;