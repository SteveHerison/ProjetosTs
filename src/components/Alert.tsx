import Delete from "../assets/delete.svg";

const Alert = () => {
  return (
    <div className="absolute top-2">
      <div className="bg-red-300 rounded-xl relative p-2  w-52 text-red-700 flex justify-center items-center">
        <div className="flex items-center">
          <h2>Item Deletado</h2>
          <img src={Delete} alt="" className="w-9 h-9 absolute right-1" />
        </div>
      </div>
    </div>
  );
};

export default Alert;
