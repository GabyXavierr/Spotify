// import React, { useState } from "react"; // Importa o React e o hook useState
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente FontAwesomeIcon para ícones
import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep } from "@fortawesome/free-solid-svg-icons"; // Importa ícones de play, pause, voltar e avançar
import { Link } from "react-router-dom"; // Importa o componente Link para navegação sem recarregar a página
import { useRef, useEffect, useState } from "react"; // Importa useRef (para referências a elementos DOM) e useEffect (para efeitos colaterais)

const formatTime = (timeInSeconds) => {
  // Formata o tempo em segundos para o formato "mm:ss"
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  // Converte uma string no formato "mm:ss" para segundos
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);
  return seconds + minutes * 60;
};

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
  // Definindo o hook useRef para a referência do elemento de áudio e a barra de progresso
  const audioPlayer = useRef();
  const progressBar = useRef();
  
  // Estado que controla se o áudio está tocando
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Estado que controla o tempo atual do áudio
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  
  // Converte a duração da música para segundos
  const durationInSeconds = timeInSeconds(duration);

  // Função para alternar entre play e pause
  const playPause = () => {
    if (isPlaying) {
      audioPlayer.current.pause(); // Pausa a música se estiver tocando
    } else {
      audioPlayer.current.play(); // Toca a música se estiver pausada
    }

    setIsPlaying(!isPlaying); // Alterna o estado de play/pause
  };

  // Efeito para atualizar o tempo atual e a barra de progresso enquanto a música estiver tocando
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(formatTime(audioPlayer.current.currentTime)); // Atualiza o tempo atual
        progressBar.current.style.setProperty(
          "--_progress", // Atualiza o progresso da barra
          (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
        );
      }
    }, 1000); // A cada 1 segundo

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
  }, [isPlaying]); // Só executa quando o estado 'isPlaying' mudar

  return (
    <div className="player">
      <div className="player__controllers">
        {/* Link para a música anterior */}
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        {/* Ícone de play/pause */}
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()} // Chama a função playPause ao clicar
        />

        {/* Link para a próxima música */}
        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p> {/* Exibe o tempo atual */}
        
        {/* Barra de progresso */}
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        
        <p>{duration}</p> {/* Exibe a duração total da música */}
      </div>

      {/* Componente de áudio para controlar o áudio */}
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player; // Exporta o componente Player para ser usado em outras partes do projeto
