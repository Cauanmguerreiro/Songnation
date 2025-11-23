import { postUsuario, getUsuarios, loginUsuario } from "../models/modelUsuarios.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const chaveJWT = process.env.JWT_KEY

export async function getUsuariosController(req, res) {
    try {
        const usuarios = await getUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
}

export async function postUsuarioController(req, res) {
    try {
        const usuario = req.body;
        const saltRounds = 10;
        usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
        const novoUsuario = await postUsuario(usuario);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }   
}

export async function logarUsuariosController(req, res){
    try {
        console.log('POST /usuarios/login body:', req.body);

        const { email } = req.body;
        // aceita tanto "senha" quanto "password" enviado pelo front
        const senha = req.body.senha ?? req.body.password;

        if (!email || !senha) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }

        const usuario = await loginUsuario(email);
    
        if(!usuario){
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ message: 'Senha inválida' });
        }

        if (!chaveJWT) {
            console.error('JWT_KEY não definida em process.env');
            return res.status(500).json({ message: 'Configuração do servidor incompleta' });
        }

        const token = jwt.sign({ email }, chaveJWT, { expiresIn: '1h' });
        // envia token como objeto JSON (facilita uso em frontend)
        res.status(200).json({ token });

    } catch (error) {
        console.error('Erro em logarUsuariosController:', error);
        res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
    }
}