import express from "express"; // Importa o framework Express para criar o servidor
import cors from "cors"; // Importa o CORS para permitir requisições de diferentes origens
import { db } from "./connect.js"; // Importa a conexão com o banco de dados
import path from "path"; // Importar o path

const __dirname = path.resolve()

const app = express(); // Inicializa o servidor Express
const PORT = 3000; // Define a porta do servidor

app.use(cors()); // Habilita o CORS para permitir requisições externas

// Rota raiz - Apenas informa os endpoints disponíveis
app.get('/api/', (request, response) => {
    response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs' ");
});

// Endpoint para buscar todos os artistas no banco de dados
app.get('/api/artists', async (request, response) => {
    response.send(await db.collection('artists').find({}).toArray());
});

// Endpoint para buscar todas as músicas no banco de dados
app.get('/api/songs', async (request, response) => {
    response.send(await db.collection('songs').find({}).toArray());
});

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (request, response) => {
    response.sendFile((path.join(__dirname, '../frontend/dist/index.html')));
});

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
});
