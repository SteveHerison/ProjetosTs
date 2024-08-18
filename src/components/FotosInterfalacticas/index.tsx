import { images } from "../../data/imgGalax";
import PhotoItem from "./PhotoItem";

interface FotoProps {
  openModalPhoto: (id: number) => void;
}

const FotosGalax: React.FC<FotoProps> = ({ openModalPhoto }) => {
  return (
    <div className="h-auto md:h-full flex justify-center items-center bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 container mx-auto max-w-5xl">
        {images.map((image) => (
          <PhotoItem
            key={image.id}
            src={image.src}
            onClick={() => openModalPhoto(image.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FotosGalax;
