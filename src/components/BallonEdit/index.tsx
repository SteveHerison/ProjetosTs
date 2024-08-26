import { useContext, useState, useEffect } from "react";
import Logo from "../../assets/Design sem nome.png";
import { UserContext } from "../../contexts/UserContext";

interface BallonEditProps {
  onClose: () => void;
  onSave: () => void; // Callback para notificar o componente `Home` que o nome foi salvo
}

const BallonEdit: React.FC<BallonEditProps> = ({ onClose, onSave }) => {
  const userCtx = useContext(UserContext);
  const [fullName, setFullName] = useState(userCtx?.name || "");

  useEffect(() => {
    setFullName(userCtx?.name || "");
  }, [userCtx?.name]);

  const handleFullName = () => {
    if (fullName === "") return alert("Nome precisa ser preenchido");
    userCtx?.setName(fullName.split(" ").slice(0, 2).join(" ")); // Atualiza o estado `name` no contexto
    onSave(); // Notifica o `Home` que o nome foi salvo
    onClose(); // Fecha o balão de edição
  };

  return (
    <div className="w-full h-full bg-black text-white p-4 ">
      <button className="text-end w-full text-xl" onClick={onClose}>
        X
      </button>
      <div className="w-full h-full flex flex-col items-center">
        <img
          src={Logo}
          alt="User Profile"
          className="w-20 h-20 object-cover mb-4"
        />
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
