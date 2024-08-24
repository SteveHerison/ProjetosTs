interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Buttons: React.FC<ButtonsProps> = ({ title, ...rest }) => {
  return (
    <button {...rest} className="p-1 rounded-xl bg-white text-black">
      {title}
    </button>
  );
};

export default Buttons;
