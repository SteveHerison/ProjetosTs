import { useState } from "react";
import { music } from "../../data/musics";
import Play from "../../assets/effect/play-svgrepo-com.svg";
import Pause from "../../assets/effect/pause-svgrepo-com.svg";
import ArrowL from "../../assets/effect/arrow-sm-left-svgrepo-com.svg";
import ArrowR from "../../assets/effect/arrow-sm-right-svgrepo-com.svg";
import Stop from "../../assets/effect/stop-svgrepo-com.svg";
import Musics from "./Musics";

const Musix = () => {
  // Estado que controla qual música está tocando, usando o ID da música
  const [playing, setPlaying] = useState<number | null>(null);

  // Função para iniciar ou pausar a música
  const handlePlaying = (id: number | null) => {
    // Se o id for null e houver músicas na lista, começa a tocar a primeira música
    if (id === null && music.length > 0) {
      setPlaying(music[0].id);
    } else {
      // Caso contrário, alterna entre pausar e tocar a música com base no estado atual
      setPlaying((prev) => (prev === id ? null : id)); // Pausa se a mesma música for clicada novamente
    }
  };

  // Função para parar a música atual e resetar o estado
  const handleStop = () => {
    setPlaying(null); // Reseta o estado de playing para null, parando qualquer música
  };

  // Função para tocar a próxima música na lista
  const handleNext = () => {
    if (playing !== null) {
      const currentIndex = music.findIndex((m) => m.id === playing); // Encontra o índice da música atual
      const nextIndex = (currentIndex + 1) % music.length; // Calcula o índice da próxima música, voltando ao início se estiver no fim
      setPlaying(music[nextIndex].id); // Define a próxima música como a música atual
    }
  };

  // Função para tocar a música anterior na lista
  const handlePrev = () => {
    if (playing !== null) {
      const currentIndex = music.findIndex((m) => m.id === playing); // Encontra o índice da música atual
      const prevIndex = (currentIndex - 1 + music.length) % music.length; // Calcula o índice da música anterior, indo para o final se estiver no início
      setPlaying(music[prevIndex].id); // Define a música anterior como a música atual
    }
  };

  return (
    <div className="w-full h-full p-2 bg-orange-400">
      <div className="flex flex-col justify-between items-center h-full sm:gap-5">
        <div className="w-full h-full flex flex-col justify-center gap-4 items-center rounded-xl">
          <ul className="w-full h-full grid grid-cols-3 bg-black  rounded-xl overflow-y-auto">
            {music.map(({ id, src, descricao, img }) => (
              <li
                key={id}
                className="flex items-center justify-center gap-4 p-2  border-white/10"
              >
                <button
                  onClick={() => handlePlaying(id)}
                  className="flex flex-col gap-4 justify-center items-center pb-3 px-1 pt-1 rounded-md bg-orange-400"
                >
                  <img
                    src={img}
                    alt={descricao}
                    className="w-52 h-52 object-cover rounded-md"
                  />
                  <div className="flex-1 text-lg font-semibold">
                    <p>{descricao.split(" ").slice(0, 1).join(" ")}</p>
                  </div>
                </button>
                {/* Renderiza o componente Musics apenas quando playing é igual ao id da música */}
                {playing === id && (
                  <Musics src={src} isPlaying={playing === id} />
                )}
              </li>
            ))}
          </ul>

          <div className="relative w-full h-20 gap-5 flex justify-center items-center rounded-xl bg-black/20">
            {playing !== null && (
              <div className="absolute left-1 top-1 text-xs sm:text-lg">
                {music
                  .filter((m) => m.id === playing)
                  .map(({ id, descricao, autor }) => (
                    <div key={id}>
                      <p>{descricao}</p>
                      <p>{autor}</p>
                    </div>
                  ))}
              </div>
            )}
            <button
              onClick={handlePrev}
              className="focus:outline-none bg-orange-300 rounded-full"
            >
              <img
                src={ArrowL}
                alt="ArrowL"
                className="w-8 h-8 bg-orange-300 rounded-full"
              />
            </button>
            <button
              onClick={handleStop}
              className="focus:outline-none bg-orange-300 rounded-full"
            >
              <img src={Stop} alt="Stop" className="w-8 h-8" />
            </button>
            <button
              onClick={() => handlePlaying(playing)} // Chama handlePlaying com o playing atual
              className="focus:outline-none bg-orange-300 rounded-full"
            >
              <img
                src={playing ? Pause : Play} // Alterna entre Play e Pause
                alt={playing ? "Pause" : "Play"}
                className="w-8 h-8"
              />
            </button>
            <button
              onClick={handleNext}
              className="focus:outline-none bg-orange-300 rounded-full"
            >
              <img src={ArrowR} alt="ArrowR" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musix;
