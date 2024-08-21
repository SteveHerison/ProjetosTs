import { useState } from "react";
import { music } from "../../data/musics";
import Play from "../../assets/effect/play-svgrepo-com.svg";
import Pause from "../../assets/effect/pause-svgrepo-com.svg";
import Musics from "./Musics";

const Musix = () => {
  const [playing, setPlaying] = useState<number | null>(null); // Controla qual música está tocando

  const handlePlaying = (id: number | null) => {
    setPlaying((prev) => (prev === id ? null : id)); // Pausa se a mesma música for clicada novamente
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
                    <p>{descricao}</p>
                  </div>
                </button>
                {/* Renderiza o componente Musics apenas quando playing é igual ao id da música */}
                {playing === id && (
                  <Musics src={src} isPlaying={playing === id} />
                )}
              </li>
            ))}
          </ul>

          <div className="w-full h-20 flex justify-center items-center rounded-xl bg-black/20">
            <button
              onClick={() => handlePlaying(playing ?? 0)} // Use um valor default como 0 se playing for null
              className="focus:outline-none"
            >
              <img
                src={playing ? Pause : Play} // Alterna entre Play e Pause
                alt={playing ? "Pause" : "Play"}
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musix;
