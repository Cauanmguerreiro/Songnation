import express from 'express';
import { getComposicoesController }  from '../controllers/controllerComposicoes.js';
const router = express.Router();

router.get('/', getComposicoesController);

export default router;