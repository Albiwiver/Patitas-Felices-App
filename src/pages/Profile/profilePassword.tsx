import { useState } from "react";
import { Label } from "../../components/common/label/label";
import { Input } from "../../components/common/input/input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface ProfilePasswordProps {
  password: string;
  confirmPassword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError?: boolean;
}

export const ProfilePassword: React.FC<ProfilePasswordProps> = ({
  password,
  confirmPassword,
  onChange,
  showError = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const showErrorStyle = "border-red-500";
  const validStyle = "border-[#DADADA]";

  return (
    <div className="flex flex-col space-y-2 md:flex-row w-full md:space-y-0 md:space-x-2 items-start justify-center md:justify-center md:items-center lg:space-x-4">
      {/* Contraseña */}
      <div className="w-full flex flex-col space-y-1">
        <Label title="Contraseña" htmlFor="password" />
        <div
          className={`flex justify-between items-center w-full border-2 py-2 px-2 rounded-sm ${
            showError ? showErrorStyle : validStyle
          }`}
        >
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            placeholder="Ingrese su contraseña"
            className="placeholder-primary/60 text-primary/60 outline-none w-full"
            onChange={onChange}
          />
          <button
            type="button"
            onClick={togglePassword}
            className="ml-2 text-primary/60"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Repetir contraseña */}
      <div className="w-full flex flex-col space-y-1">
        <Label title="Repetir contraseña" htmlFor="confirmPassword" />
        <div
          className={`flex justify-between items-center w-full border-2 py-2 px-2 rounded-sm ${
            showError ? showErrorStyle : validStyle
          }`}
        >
          <Input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Repita la contraseña"
            className="placeholder-primary/60 text-primary/60 outline-none w-full"
            onChange={onChange}
          />
          <button
            type="button"
            onClick={toggleConfirmPassword}
            className="ml-2 text-primary/60"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
