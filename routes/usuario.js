import express from "express";
const router = express.Router();

import UsuarioController from "../controllers/UsuarioController.js";

router.post('/login', UsuarioController.login)

export default router;