import { CiAt } from "react-icons/ci";
import { Label } from "../../components/common/label/label";
import { Input } from "../../components/common/input/input";

interface RegisterEmailProps {
  email: string;
  confirmEmail: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError: boolean;
}

export const RegisterEmail: React.FC<RegisterEmailProps> = ({
  email,
  confirmEmail,
  onChange,
  showError,
}) => {
  const inputStyle = "placeholder-primary/60 text-black outline-none w-full";

  const baseWrapper =
    "flex justify-start items-center w-full space-x-2 border-2 py-2 rounded-sm";

  const borderValid = "border-[#DADADA]";
  const borderError = "border-red-500";

  return (
    <div className="flex flex-col space-y-2 md:flex-row w-full md:space-y-0 md:space-x-2 items-start justify-center md:justify-center md:items-center lg:space-x-4">
      <div className="w-full flex flex-col space-y-2">
        <Label title="Email" htmlFor="email" />
        <div
          className={`${baseWrapper} ${showError ? borderError : borderValid}`}
        >
          <CiAt className="text-primary/60 size-5 ml-2" />
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Ingrese su email"
            className={inputStyle}
          />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <Label title="Confirmar Email" htmlFor="confirmEmail" />
        <div
          className={`${baseWrapper} ${showError ? borderError : borderValid}`}
        >
          <CiAt className="text-primary/60 size-5 ml-2" />
          <Input
            type="email"
            name="confirmEmail"
            id="confirmEmail"
            value={confirmEmail}
            onChange={onChange}
            placeholder="Confirme su email"
            className={inputStyle}
          />
        </div>
      </div>
    </div>
  );
};
