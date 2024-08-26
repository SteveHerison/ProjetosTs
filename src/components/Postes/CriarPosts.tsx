import { useContext, useState } from "react";
import Inputs from "../Inputs";
import { PostContext } from "../../contexts/PostContext";

interface CriarPostsProps {
  handleFechar: () => void;
}

const CriarPosts: React.FC<CriarPostsProps> = ({ handleFechar }) => {
  const postCtx = useContext(PostContext);

  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  const handleAdd = () => {
    // Verificar se o título ou o corpo estão vazios
    if (titleInput.trim() === "" || bodyInput.trim() === "")
      return alert("Adicione o comentario e titulo");

    // Adicionar o post
    postCtx?.addPost(titleInput, bodyInput);

    // Limpar os campos de entrada
    setTitleInput("");
    setBodyInput("");

    // Fechar o modal
    handleFechar();
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
      <div className="bg-zinc-500 p-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-5">
          <Inputs
            type="text"
            title="Titulo"
            value={titleInput}
            onchange={setTitleInput}
          />
          <textarea
            title="Descrição"
            value={bodyInput}
            onChange={({ target }) => setBodyInput(target.value)}
            className="max-h-40 min-h-20 text-black outline-none p-1 rounded-xl"
          />
        </div>
        <div className="flex justify-between w-full p-3">
          <button
            className="bg-red-500 px-2 py-1 rounded-lg"
            onClick={handleFechar}
          >
            Fechar
          </button>
          <button
            className="bg-green-500 px-3 py-2 rounded-lg"
            onClick={handleAdd}
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CriarPosts;
