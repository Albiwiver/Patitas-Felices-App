import { PiPencilLineFill } from "react-icons/pi";
import { Label } from "../../components/common/label/label";
import { Input } from "../../components/common/input/input";

interface ProfileNameProps {
  name: string;
  subname: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileName: React.FC<ProfileNameProps> = ({
  name,
  subname,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2 md:flex-row w-full md:space-y-0 md:space-x-2 items-start justify-center md:justify-center md:items-center lg:space-x-4">
      <div className="w-full flex flex-col space-y-1">
        <Label title="Nombre" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          <Input
            type="name"
            name="name"
            id="name"
            value={name}
            placeholder=""
            className="placeholder-primary/60 ml-2 text-primary/60 outline-none"
            onChange={onChange}
          />
          <PiPencilLineFill className="text-primary/60 size-5 mr-2" />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-1">
        <Label title="Apellido" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          <Input
            type="subname"
            name="subname"
            id="subname"
            value={subname}
            placeholder=""
            className="placeholder-primary/60 text text-primary/60 outline-none ml-2"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
