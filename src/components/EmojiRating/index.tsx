type Props = {
  rate: number;
};

const EmojiRating = ({ rate }: Props) => {
  if (rate > 5) rate = 5;
  if (rate < 0) rate = 0;

  const emojis = ["", "😭", "😑", "😥", "😅", "🤩"];

  const rateInt = Math.floor(rate);

  const stars = `${emojis[rateInt]}`.repeat(rateInt) + "😕".repeat(5 - rateInt);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-4xl">
      <p className="p-2 bg-black rounded-xl">{rate.toFixed(1)}</p>
      <p>{stars}</p>
    </div>
  );
};

export default EmojiRating;
