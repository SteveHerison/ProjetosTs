import { useEffect, useState } from "react";

const STORAGE_KEY = "LocalDark";

const DarkMode = () => {
  // Estado para armazenar o tema (true para escuro, false para claro)
  const [dark, setDark] = useState<boolean>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  // Alterna o estado do tema entre claro e escuro
  const handleDark = () => {
    setDark((prev) => !prev);
  };

  // Efeito para carregar o tema do localStorage e aplicar a classe correspondente
  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme) {
      setDark(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dark));

    // Adiciona ou remove a classe 'dark' no corpo do documento
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div
      className={`w-full h-full ${
        dark ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col justify-center items-center`}
    >
      <div className="flex justify-between w-full p-5 items-center">
        <div className="flex items-center gap-2">
          <h1>Oi</h1>
          <button
            className={`p-2  rounded-xl ${
              dark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            oi
          </button>
        </div>
        <div>
          <button
            onClick={handleDark}
            className={`p-2  rounded-xl ${
              dark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {dark ? "Mudar para Light" : "Mudar para Dark"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
