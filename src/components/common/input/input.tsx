import { InputProps } from "./inputType";

export const Input: React.FC<InputProps> = ({
  type,
  name,
  id,
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`text-black outline-none placeholder-primary/60 w-full ${className}`}
      defaultValue={value}
      onChange={onChange}
    ></input>
  );
};
