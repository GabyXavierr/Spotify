// import React from "react"; // Importa a biblioteca React 
import logoSpotify from "../assets/logo/spotify-logo.png"; // Importa a logo do Spotify
import { Link } from "react-router-dom"; // Importa o componente Link para navegação sem recarregar a página

const Header = () => {
  return (
    <div className="header"> {/* Contêiner principal do cabeçalho */}

      {/* Link para a página inicial com a logo */}
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" /> {/* Exibe a logo do Spotify */}
      </Link>

      {/* Link para a página inicial com o nome Spotify */}
      <Link to="/" className="header__link">
        <h1>Spotify</h1> {/* Título do cabeçalho */}
      </Link>
      
    </div>
  );
};

export default Header; // Exporta o componente para ser utilizado em outras partes do projeto

