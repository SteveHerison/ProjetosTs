import { useState } from "react";
import Inputs from "./Inputs";
import { Item } from "../types/ReduceItem";

interface ModalEditProps {
  item: Item | null;
  onClose: () => void;
  onSave: (newText: string, id: number) => void;
}

const ModalEdit = ({ item, onClose, onSave }: ModalEditProps) => {
  const [inputEdit, setInputEdit] = useState(item ? item.text : "");

  const handleSave = () => {
    if (inputEdit === "") return false;

    if (item) {
      onSave(inputEdit, item.id);
      onClose(); // Fechar o modal após salvar
    }
  };

  if (!item) return null; // Não renderizar o modal se nenhum item estiver sendo editado

  return (
    <div className="absolute text-black">
      <div className="bg-zinc-200 rounded-xl p-2">
        <Inputs
          placeholder="Edite seu objetivo"
          type="text"
          value={inputEdit}
          onchange={setInputEdit}
        />
        <div className="flex justify-between items-center pt-4">
          <button onClick={handleSave} className="p-1 bg-green-500 rounded-xl">
            Salvar
          </button>
          <button onClick={onClose} className="p-1 bg-red-500 rounded-xl">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
