import { SlEnvolopeLetter } from "react-icons/sl";
import { Label } from "../../components/common/label/label";
import { Input } from "../../components/common/input/input";

interface RegisterPostalCodeProps {
  postalCode: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RegisterPostalCode: React.FC<RegisterPostalCodeProps> = ({
  postalCode,
  onChange,
}) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col space-y-2 pr-1">
      <Label title="Código postal" htmlFor="" />
      <div className="flex justify-start items-center w-full space-x-2 border-2 border-[#DADADA] py-2 rounded-sm">
        <SlEnvolopeLetter className="text-primary/60 size-5 ml-2" />
        <Input
          type="text"
          name="postalCode"
          id="postalCode"
          value={postalCode}
          placeholder="Ingrese su código postal"
          className="placeholder-primary/60 text-black outline-none"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
