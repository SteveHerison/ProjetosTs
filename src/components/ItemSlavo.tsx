import Check from "../assets/check-mark-button-svgrepo-com.svg";

const ItemSlavo = () => {
  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-green-300 rounded-xl relative p-2 w-52 text-green-700 flex justify-center items-center">
        <div className="flex items-center">
          <h2>Salvo com sucesso</h2>
          <img src={Check} alt="" className="w-6 h-6 absolute right-1" />
        </div>
      </div>
    </div>
  );
};

export default ItemSlavo;
