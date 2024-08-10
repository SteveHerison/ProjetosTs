type Props = {
  nome: string;
  avatar?: string;
  roles: string[];
};

const ListPersons = ({ nome, avatar, roles }: Props) => {
  return (
    <div className="w-full h-full p-5">
      <div className="flex flex-col w-full items-center gap-2">
        <h1 className="bg-white p-2 rounded-xl w-40 text-center">{nome}</h1>
        {avatar ? (
          <img src={avatar} alt="" className="w-40" />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            alt=""
            className="w-40"
          />
        )}
        <ul className="flex flex-col rounded-xl bg-white ">
          <li className=" p-2 rounded-xl text-center w-40">{roles[0]}</li>
          <hr className="opacity-40" />
          <li className="p-2 rounded-xl text-center w-40">{roles[1]}</li>
        </ul>
      </div>
    </div>
  );
};

export default ListPersons;
