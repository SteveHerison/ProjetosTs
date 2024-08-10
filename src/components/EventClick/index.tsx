import { useState } from "react";

const EventClick = () => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input === "") {
      alert("Preencha o Campo");
    } else {
      alert(`Você digitou: ${input}`);
      setInput(""); // Limpa o input após o clique
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <label htmlFor="nome">
          <input
            type="text"
            id="nome"
            value={input}
            className="rounded-xl p-2 text-black"
            onChange={(event) => setInput(event.target.value)}
          />
          {input}
        </label>

        <button
          className="bg-black text-green-400 p-2 rounded-xl"
          onClick={handleClick}
        >
          Clique Aqui
        </button>
      </div>
    </div>
  );
};

export default EventClick;
