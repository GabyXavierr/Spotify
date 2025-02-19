// import React from "react"; 
import SingleItem from "./SingleItem"; // Importa o componente SingleItem, que exibe um único item da lista
import { Link, useLocation } from "react-router-dom"; // Importa o Link (para navegação) e useLocation (para obter o caminho atual da URL)

// Componente para exibir uma lista de itens com título e um link para mostrar mais
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // Obtém o caminho atual da URL com o hook useLocation
  const { pathname } = useLocation();

  // Verifica se a página atual é a home
  const isHome = pathname === "/";

  // Determina quantos itens exibir: se estiver na home, exibe 'items', senão, não limita
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list"> {/* Contêiner principal da lista de itens */}

      <div className="item-list__header"> {/* Cabeçalho da lista */}
        <h2>{title} populares</h2> {/* Título da lista de itens */}

        {/* Exibe um link para "mostrar tudo" somente se estiver na home */}
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></> // Se não estiver na home, não exibe o link
        )}
      </div>

      <div className="item-list__container"> {/* Contêiner que segura os itens */}
        {itemsArray.filter((currentValue, index) => index < finalItems) // Filtra os itens com base no número de 'finalItems'
          .map((currObj, index) => (
            <SingleItem
              {...currObj} // Passa todas as propriedades do item para o componente SingleItem
              idPath={idPath} // Passa o 'idPath' que define para onde o item deve redirecionar
              key={`${title}-${index}`} // Define uma chave única para cada item, baseada no título e no índice
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList; // Exporta o componente ItemList para ser usado em outras partes do projeto
