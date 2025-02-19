import { artistArray } from "../../frontend/src/assets/database/artists.js"; // Importa o array de artistas
import { songsArray } from "../../frontend/src/assets/database/songs.js"; // Importa o array de músicas
import { db } from "./connect.js"; // Importa a conexão com o banco de dados

// Remove a propriedade "id" de cada objeto do array de artistas
const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };
    delete newArtistObj.id; // Remove a chave "id" antes de inserir no banco

    return newArtistObj;
});

// Remove a propriedade "id" de cada objeto do array de músicas
const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj };
    delete newSongObj.id; // Remove a chave "id" antes de inserir no banco

    return newSongObj;
});

// Insere os novos dados na coleção "songs" do MongoDB
const responseSongs = await db.collection("songs").insertMany(newSongsArray);

// Insere os novos dados na coleção "artists" do MongoDB
const responseArtists = await db.collection("artists").insertMany(newArtistArray);


