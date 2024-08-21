import { useEffect, useRef } from "react";

type Props = {
  src: string;
  isPlaying: boolean;
};

const Musics = ({ src, isPlaying }: Props) => {
  const audioTag = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying) {
      audioTag.current?.play();
    } else {
      audioTag.current?.pause();
    }
  }, [isPlaying]);

  return <audio ref={audioTag} src={src} loop playsInline />;
};

export default Musics;
