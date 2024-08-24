import { useReducer, useState } from "react";
import { listReducer } from "../../reducers/listReducer";
import Buttons from "../Buttons";
import Inputs from "../Inputs";
import Check from "../../assets/check-box-with-check-svgrepo-com.svg";
import Checkd from "../../assets/check-mark-button-svgrepo-com.svg";
import Delet from "../../assets/delete-svgrepo-com.svg";
import Edit from "../../assets/marker-edit-svgrepo-com.svg";

const Reducers = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [inputList, setInputList] = useState("");

  const handleAdd = () => {
    if (inputList.trim() === "") return;

    dispatch({ type: "ADD", payload: { text: inputList.trim() } });
    setInputList("");
  };

  const handleDoneCheckebox = (id: number) => {
    dispatch({
      type: "TOGGLE",
      payload: { id },
    });
  };

  const handleDelet = (id: number) => {
    dispatch({
      type: "DELETE",
      payload: { id },
    });
  };

  return (
    <div className="w-full h-full flex gap-10 p-2 flex-col justify-center items-center container mx-auto">
      <h1 className="text-3xl">Lista de Tarefas</h1>
      <div className="flex h-full w-full gap-1">
        <div className="flex flex-col justify-center items-center h-full w-full gap-3">
          <Inputs
            placeholder="Qual o seu objetivo"
            type="text"
            title="Lista"
            value={inputList}
            onchange={setInputList}
          />
          <Buttons title="Adicionar" onClick={handleAdd} />
        </div>

        <div className="w-full h-full flex justify-center items-center ">
          <div className="max-h-96 w-full overflow-y-auto grid grid-cols-1  p-2 rounded-md">
            <ul className=" flex-col flex w-full gap-4 ">
              {list.map(({ id, text, done }) => (
                <li
                  key={id}
                  className=" flex w-full items-center justify-between border-b border-white/5 pb-2"
                >
                  <img
                    src={done ? Checkd : Check}
                    alt="Checkbox"
                    className="h-6 w-6 cursor-pointer mr-2"
                    onClick={() => handleDoneCheckebox(id)}
                  />

                  <p
                    className={`max-w-40 text-ellipsis overflow-hidden text-center`}
                  >
                    {text}
                  </p>

                  <div className="flex gap-2 items-center ml-2">
                    <button className="" onClick={() => handleDelet(id)}>
                      <img src={Delet} alt="" className="h-6 w-6" />
                    </button>
                    <button className="">
                      <img src={Edit} alt="" className="h-6 w-6" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reducers;
