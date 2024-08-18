type Props = {
  src: string;
  onClick: () => void;
};

const PhotoItem = ({ src, onClick }: Props) => {
  return (
    <div onClick={onClick} className="hover:opacity-80 cursor-pointer">
      <img src={src} alt="Photo" className="w-full" />
    </div>
  );
};

export default PhotoItem;
