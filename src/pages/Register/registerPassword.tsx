import { BsKey } from "react-icons/bs";
import { Label } from "../../components/common/label/label";
import { Input } from "../../components/common/input/input";

interface RegisterPasswordProps {
  password: string;
  confirmPassword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError: boolean;
}

export const RegisterPassword: React.FC<RegisterPasswordProps> = ({
  password,
  confirmPassword,
  onChange,
  showError,
}) => {
  const inputStyle = "placeholder-primary/60 text-black outline-none w-full";

  const baseWrapper =
    "flex justify-start items-center w-full space-x-2 border-2 py-2 rounded-sm";
  const borderError = "border-red-500";
  const borderValid = "border-[#DADADA]";

  return (
    <div className="flex flex-col space-y-2 md:flex-row w-full md:space-y-0 md:space-x-2 items-start justify-center md:justify-center md:items-center lg:space-x-4">
      <div className="w-full flex flex-col space-y-2">
        <Label title="Contraseña" htmlFor="password" />
        <div
          className={`${baseWrapper} ${showError ? borderError : borderValid}`}
        >
          <BsKey className="text-primary/60 size-5 ml-2" />
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Ingrese su contraseña"
            onChange={onChange}
            className={inputStyle}
          />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <Label title="Confirmar Contraseña" htmlFor="confirmPassword" />
        <div
          className={`${baseWrapper} ${showError ? borderError : borderValid}`}
        >
          <BsKey className="text-primary/60 size-5 ml-2" />
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Confirme su contraseña"
            onChange={onChange}
            className={inputStyle}
          />
        </div>
      </div>
    </div>
  );
};
