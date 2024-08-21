import { useState } from "react";
import Play from "../../assets/effect/play-svgrepo-com.svg";
import Pause from "../../assets/effect/pause-svgrepo-com.svg";
import Video from "./Video";
import { videos } from "../../data/videos";

const EffectPlay = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlaying = () => {
    setPlaying(!playing);
  };

  return (
    <div className="w-full h-full p-2  bg-orange-400 ">
      <div className="flex flex-col justify-between items-center h-full sm:gap-5">
        <div className=" bg-black flex justify-center items-center rounded-xl ">
          <Video src={videos[0].src} isPlaying={playing} />
        </div>
        <div className="w-full  bg-white/10 flex justify-center p-2 rounded-xl">
          <button onClick={handlePlaying} className="focus:outline-none">
            {playing ? (
              <img src={Pause} alt="Pause" className="w-10 h-10" />
            ) : (
              <img src={Play} alt="Play" className="w-10 h-10" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EffectPlay;
