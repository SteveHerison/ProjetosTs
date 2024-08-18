import { useState } from "react";
import { TodoItem } from "../../types/OdoItem";

const List = () => {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<TodoItem[]>([]);

  const handleAdd = () => {
    if (itemInput.trim() === "") {
      return;
    }
    setList([...list, { id: list.length, label: itemInput, checked: false }]);
    setItemInput("");
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Tem certeza que deseja deletar esta tarefa?")) {
      setList(list.filter((item) => item.id !== id));
    }
  };

  const toggleItem = (id: number) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setList(newList);
  };

  return (
    <div className="w-full h-full bg-slate-50 text-black">
      <div className="w-full h-full gap-10 container mx-auto flex flex-col justify-between items-center">
        <h1 className="text-2xl text-center">Lista de Tarefas</h1>

        <div className="flex flex-col w-full h-full p-5">
          <div className="flex flex-col gap-3 mb-5">
            <input
              value={itemInput}
              type="text"
              className="border p-2 rounded-xl outline-none"
              placeholder="O que deseja listar"
              onChange={(e) => setItemInput(e.target.value)}
            />
            <button className="bg-slate-300 p-2 rounded-xl" onClick={handleAdd}>
              Adicionar
            </button>
          </div>
          <div className="flex-grow bg-yellow-50 p-2 rounded-xl border shadow-lg overflow-y-auto h-80">
            {list.length !== 0 ? (
              <p className="text-left mb-2">Total: {list.length}</p>
            ) : (
              "Nenhum item na sua lista"
            )}
            <ul className="space-y-2">
              {list.map(({ id, label, checked }) => (
                <li
                  key={id}
                  className="border-b flex justify-between p-2 items-center bg-white rounded-lg shadow-sm"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    className="h-5 w-5"
                    onChange={() => toggleItem(id)}
                  />
                  <span className={checked ? "line-through" : ""}>{label}</span>
                  <button
                    className="bg-red-500 text-white rounded-lg p-2"
                    onClick={() => handleDelete(id)}
                  >
                    Deletar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
