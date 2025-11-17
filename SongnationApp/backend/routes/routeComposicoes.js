import express from 'express';
import { getComposicoesController }  from '../controllers/controllerComposicoes.js';
import { autenticadorMiddleware } from '../middlewares/autenticador.js';

const router = express.Router();

router.get('/', autenticadorMiddleware, getComposicoesController);

export default router;