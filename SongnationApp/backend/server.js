import dotenv from 'dotenv';
import express from 'express';
import conectaDB from './dbConnect.js';
import routeComposicoes from './routes/routeComposicoes.js';
import routeUsuarios from './routes/routeUsuarios.js';
dotenv.config();

const PORT = 5000;
const app = express();
const conexao = await conectaDB();

conexao.on("error", (erro) => {
    console.error("Erro de conexão de ", erro);
})
conexao.once("open", () => {
    console.log("Conexão com o DB feita com sucesso!");
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use('/composicoes', routeComposicoes);
app.use('/usuarios', routeUsuarios);
