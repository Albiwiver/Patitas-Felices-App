import { IoIosPin } from "react-icons/io";
import { Label } from "../../components/common/label/label";
import { Input } from "../../components/common/input/input";

interface RegisterLocationProps {
  location: string;
  province: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RegisterLocation: React.FC<RegisterLocationProps> = ({
  location,
  province,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2 md:flex-row w-full md:space-y-0 md:space-x-2 items-start justify-center md:justify-center md:items-center lg:space-x-4">
      <div className="w-full flex flex-col space-y-2">
        <Label title="Ciudad" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          <IoIosPin className="text-primary/60 size-5 ml-2" />
          <Input
            type="text"
            name="location"
            id="city"
            value={location}
            placeholder="Ingrese su ciudad"
            className="placeholder-primary/60 text-black outline-none"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <Label title="Provincia" htmlFor="" />
        <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
          <IoIosPin className="text-primary/60 size-5 ml-2" />
          <Input
            type="text"
            name="province"
            id="province"
            value={province}
            placeholder="Confirme su provincia"
            className="placeholder-primary/60 text-black outline-none"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
