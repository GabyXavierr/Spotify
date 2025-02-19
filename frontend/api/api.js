import "dotenv/config";
import axios from "axios"; // Importa a biblioteca Axios para fazer requisições HTTP

// const {NODE_ENV}= process.env;
// const URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api"
const URL = "http://spotify-fvn5.onrender.com/api";
// // Define a URL base da API

// Faz uma requisição GET para obter os dados de artistas do backend
const responseArtists = await axios.get(`${URL}/artists`);

// Faz uma requisição GET para obter os dados de músicas do backend
const responseSongs = await axios.get(`${URL}/songs`);

// Exporta os arrays contendo os dados retornados pelo backend
export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
