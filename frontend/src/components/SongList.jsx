// import React from "react"; 
import SongItem from "./SongItem"; // Importa o componente SongItem, que exibe uma música individual
import { useState } from "react"; // Importa o hook useState para controlar o estado de exibição dos itens

// Componente SongList que exibe uma lista de músicas
const SongList = ({ songsArray }) => {
  // Definindo o estado 'items', inicialmente com valor 5, para controlar o número de itens a serem exibidos
  const [items, setItems] = useState(5);

  return (
    <div className="song-list"> {/* Contêiner principal da lista de músicas */}
      
      {/* Filtra e exibe as músicas baseado no número de 'items' */}
      {songsArray
        .filter((currentValue, index) => index < items) // Limita os itens que são exibidos com base no estado 'items'
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} /> // Passa as propriedades de cada música para o componente SongItem
        ))}
      
      {/* Botão para carregar mais músicas */}
      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5); // Aumenta o número de itens exibidos ao clicar no "Ver mais"
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList; // Exporta o componente SongList para ser usado em outras partes do projeto

