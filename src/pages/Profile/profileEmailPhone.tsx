import { Label } from "../../components/common/label/label";
import { Input } from "../../components/common/input/input";

interface ProfileEmailPhoneProps {
  email: string;
  phone: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileEmailPhone: React.FC<ProfileEmailPhoneProps> = ({
  email,
  phone,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2 md:flex-row w-full md:space-y-0 md:space-x-2 items-start justify-center md:justify-center md:items-center lg:space-x-4">
      <div className="w-full flex flex-col space-y-1">
        <Label title="Nombre" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder=""
            className="placeholder-primary/60 ml-2 text-primary/60 outline-none"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-1">
        <Label title="Teléfono" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          <Input
            type="phone"
            name="phone"
            id="phone"
            value={phone}
            placeholder=""
            className="placeholder-primary/60 text text-primary/60 outline-none ml-2"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
