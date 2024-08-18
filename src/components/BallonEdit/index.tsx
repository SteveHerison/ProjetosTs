import { useState } from "react";
import Logo from "../../assets/Design sem nome.png";

const BallonEdit = () => {
  const [fullName, setFullName] = useState("Nome"); // Estado para armazenar o valor do input
  const [nome, setNome] = useState(fullName); // Estado para exibir o nome

  const handleFullName = () => {
    setNome(fullName); // Atualiza o estado `nome` com o valor atual de `fullName`
  };

  return (
    <div className="w-full h-full bg-black text-white p-4">
      <div className="w-full h-full flex flex-col items-center">
        <img
          src={Logo}
          alt="User Profile"
          className="w-20 h-20 object-cover mb-4"
        />
        <p className="mb-4">{nome}</p>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} // Atualiza `fullName` com o valor do input
          className="rounded-xl border p-2 text-black mb-4"
        />
        <button
          onClick={handleFullName}
          className="p-2 bg-red-50 text-black rounded-xl"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default BallonEdit;
