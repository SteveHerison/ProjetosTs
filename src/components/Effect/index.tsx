import { useEffect, useState } from "react";
import Alert from "./Alert";

const Effect = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    const NomeCompleto = input.split(" ").slice(0, 2).join(" ");
    if (input === "" || input === name) {
      return setAlert(true);
    } else {
      setName(NomeCompleto);
      setInput("");
    }
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col gap-5">
        <h1 className="text-center">...Meu nome é {name}</h1>
        <p className="text-center text-2xl">{name}</p>
        <div className="flex flex-col gap-5">
          <label id="name" className="flex flex-col">
            Alterar Nome
            <input
              value={input}
              type="text"
              id="name"
              className="p-2 rounded-xl outline-none text-black"
              autoComplete="off"
              autoCapitalize="off"
              placeholder="Nome"
              onChange={({ target }) => setInput(target.value)}
            />
          </label>

          <button onClick={handleClick} className="bg-black p-2 rounded-xl">
            Mudar Nome
          </button>
        </div>
      </div>
      {alert && <Alert />}
    </div>
  );
};

export default Effect;
