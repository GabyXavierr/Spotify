import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from "react-router-dom"; 

// Componente SingleItem que exibe um item individual (como artista ou música)
const SingleItem = ({ _id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item"> {/* Link que redireciona para a página do item com base no id */}
      
      <div className="single-item__div-image-button"> {/* Contêiner para imagem e ícone de play */}
        
        <div className="single-item__div-image"> {/* Contêiner da imagem do item */}
          <img
            className="single-item__image" // Classe CSS para a imagem
            src={image} // A URL da imagem do item
            alt={`Imagem do Artista ${name}`} // Texto alternativo para acessibilidade
          />
        </div>

        {/* Ícone de play sobre a imagem */}
        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>

      <div className="single-item__texts"> {/* Contêiner para os textos do item */}
        
        <div className="single-item__2lines"> {/* Contêiner para o título */}
          <p className="single-item__title">{name}</p> {/* Nome do item (artista, música, etc.) */}
        </div>

        {/* Exibe o nome do artista, ou "Artista" se não houver nome definido */}
        <p className="single-item__type">{artist ?? "Artista"}</p> 
      </div>
    </Link>
  );
};

export default SingleItem; // Exporta o componente SingleItem para ser usado em outras partes do projeto

