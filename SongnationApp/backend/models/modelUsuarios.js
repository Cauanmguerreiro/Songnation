import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({ 
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    cpf: {type: String, required: true, unique: true},
    telefone: {type: String, required: true},
    dataCadastro: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios');

export async function postUsuario(usuario){
    const novoUsuario = new Usuario(usuario);
    return await novoUsuario.save();
}

export async function getUsuarios(){
    return await Usuario.find();
}

export async function loginUsuario(email){
    return await Usuario.findOne({email});
}