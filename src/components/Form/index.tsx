import { FormEvent, useState } from "react";

const Form = () => {
  const [nameInput, setNameInput] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Opa, Mandando");
  };

  return (
    <div className="w-full h-full p-2 bg-zinc-950 text-zinc-400">
      <div className="flex flex-col w-full h-full">
        <h1 className="text-center text-3xl">Formulario</h1>
        <form
          onSubmit={handleFormSubmit}
          className="max-w-72 lg:max-w-96 h-full flex flex-col gap-5 justify-center container mx-auto"
        >
          <label htmlFor="Nome" className="flex flex-col ">
            Nome
            <input
              type="text"
              id="Nome"
              value={nameInput}
              placeholder="Digite seu Nome"
              className="rounded-xl p-1 text-black font-mono"
              onChange={({ target }) => setNameInput(target.value)}
            />
          </label>
          {nameInput}
          <label className="flex flex-col">
            Email
            <input
              type="email"
              id="email"
              placeholder="Seu E-mail"
              className="rounded-xl p-1 text-black font-mono"
            />
          </label>

          <label className="flex flex-col ">
            Senha
            <input
              type="password"
              placeholder="Digite sua senha"
              id="Nome"
              className="rounded-xl p-1 text-black font-mono"
            />
          </label>
          <label className="flex justify-start gap-2 items-center">
            <input type="checkbox" />
            Aceitar Todos os termos
          </label>

          <button
            type="submit"
            className="p-2 bg-white rounded-xl hover:text-black font-semibold hover:bg-slate-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
