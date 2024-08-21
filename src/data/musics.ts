import { Music } from "../types/Music";
import Music1 from "../assets/effect/fun-funk-202109.mp3";
import Music2 from "../assets/effect/good-times-are-coming-loop-version-221882.mp3";
import Music3 from "../assets/effect/the-dance-music-211276.mp3";
import Music4 from "../assets/effect/upbeat-energetic-rock-186788.mp3";
import Music5 from "../assets/effect/upbeat-pop-intro-logo-201067.mp3";
import Cachorro from "../assets/effect/channels4_profile.jpg";
import Palhaco from "../assets/effect/estetica-de-carnaval-escura.jpg";
import Meme from "../assets/effect/istockphoto-1358773518-612x612.jpg";
import Macaco from "../assets/effect/macaco-engracado-com-roupas-em-estudio.jpg";
import Homem from "../assets/effect/retrato-vibrante-de-pessoa-em-ambiente-brilhante.jpg";

export const music: Music[] = [
  {
    id: 1,
    src: Music1,
    descricao: "Upbeat Energetic Rock",
    autor: "Emmraan",
    img: Cachorro,
  },
  {
    id: 2,
    src: Music2,
    descricao: "The Dance",
    autor: "AlexGrohl",
    img: Macaco,
  },
  { id: 3, src: Music3, descricao: "Fun Funk", img: Palhaco },
  {
    id: 4,
    src: Music4,
    descricao: "Good Times",
    autor: "Nickpanek",
    img: Meme,
  },
  {
    id: 5,
    src: Music5,
    descricao: "Pop intro logo",
    autor: "Lesfm",
    img: Homem,
  },
];
