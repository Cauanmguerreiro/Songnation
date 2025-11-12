import { getComposicoes } from '../models/modelComposicoes.js';

export async function getComposicoesController(req, res) {
    try {
        const composicoes = await getComposicoes();
        res.status(200).json(composicoes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar composições', error: error.message });
    }
}