import { CiUser } from "react-icons/ci";
import { Label } from "../../components/common/label/label";
import { Input } from "../../components/common/input/input";

interface RegisterNameProps {
  name: string;
  subname: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RegisterName: React.FC<RegisterNameProps> = ({
  name,
  subname,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2 md:flex-row w-full md:space-y-0 md:space-x-2 items-start justify-center md:justify-center md:items-center lg:space-x-4">
      <div className="w-full flex flex-col space-y-2">
        <Label title="Nombre" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          <CiUser className="text-primary/60 size-5 ml-2" />
          <Input
            type="name"
            name="name"
            id="name"
            value={name}
            placeholder="Ingrese su nombre"
            className="placeholder-primary/60 text-black outline-none"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <Label title="Apellido" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          <CiUser className="text-primary/60 size-5 ml-2" />
          <Input
            type="subname"
            name="subname"
            id="subname"
            value={subname}
            placeholder="Ingrese su apellido"
            className="placeholder-primary/60 text-black outline-none"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
