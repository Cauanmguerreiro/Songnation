import mongoose from "mongoose";

const composicaoSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    autor: {type: String, required: true},
    valor: {type: Number, required: true},
    dataCriacao: { type: Date, default: Date.now }
}); 

const Composicao = mongoose.model('Composicao', composicaoSchema, 'composicoes');

export async function getComposicoes(){
    return await Composicao.find();
}