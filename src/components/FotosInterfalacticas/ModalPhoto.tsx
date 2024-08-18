type Props = {
  image: string;
  closeModal: () => void;
};

const ModalPhoto = ({ image, closeModal }: Props) => {
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed z-10 left-0 top-0 bottom-0 right-0 flex justify-center items-center bg-black/90"
      >
        <div>
          <img src={image} alt="Selected" className="max-w-full max-h-screen" />
        </div>
      </div>
      <div
        onClick={closeModal}
        className="fixed top-5 z-10 right-5 w-10 h-10 cursor-pointer text-white text-5xl"
      >
        x
      </div>
    </>
  );
};

export default ModalPhoto;
