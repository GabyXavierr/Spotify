import { MongoClient } from "mongodb"; // Importa o cliente do MongoDB

// URI de conexão com o MongoDB (evite credenciais no código, use variáveis de ambiente)
const URI = "mongodb+srv://spotify:dadosdb@cluster.oitww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

// Cria uma instância do cliente MongoDB
const client = new MongoClient(URI);

// Exporta o banco de dados "spotifydados" para ser usado em outras partes da aplicação
export const db = client.db("spotifydados");


