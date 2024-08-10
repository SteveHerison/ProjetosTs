type Props = {
  phrase: string;
  author?: string;
};

const Cards = ({ phrase, author }: Props) => {
  return (
    <div
      className="border p-2 rounded-r-full text-white bg-gradient-to-r
     from-orange-400 via-orange-500 to-orange-700"
    >
      <h2 className="text-3xl text-center font-semibold italic">{phrase}</h2>
      <p className="text-start text-xs">- {author ?? "Autor desconhecido"}</p>
    </div>
  );
};

export default Cards;
