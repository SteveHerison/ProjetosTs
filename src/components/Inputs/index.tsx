interface InputsProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  title?: string;
  id?: string;
  placeholder?: string;
  type: string;
  value?: string;
  cheked?: boolean;
  onchange?: (value: string) => void;
}

const Inputs: React.FC<InputsProps> = ({
  title,
  id,
  placeholder,
  type,
  value,
  onchange,
  ...rest
}) => {
  return (
    <label className="flex flex-col">
      {title}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...rest}
        value={value}
        onChange={({ target }) => onchange?.(target.value)}
        className="p-1 rounded-xl text-black outline-none"
      />
    </label>
  );
};

export default Inputs;
