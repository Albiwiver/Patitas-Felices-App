import { InputLabelProps } from "./inputLabelProps";

export const Label: React.FC<InputLabelProps> = ({
  title,
  className,
  htmlFor,
}) => {
  return (
    <label
      className={`text-tertiary text-base font-semibold + ${className}`}
      htmlFor={htmlFor}
    >
      {title}
    </label>
  );
};
