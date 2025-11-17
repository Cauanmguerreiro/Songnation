import express from 'express'
import {getUsuariosController, logarUsuariosController, postUsuarioController} from '../controllers/controllerUsuarios.js';
import { autenticadorMiddleware } from '../middlewares/autenticador.js';
const router = express.Router();

router.get('/', autenticadorMiddleware, getUsuariosController);
router.post('/registrar', postUsuarioController);
router.post('/login', logarUsuariosController)

export default router;