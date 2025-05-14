import { IoIosPin } from "react-icons/io";
import { CiAt } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

export const FooterContact = () => {
  return (
    <div className="flex flex-col justify-center w-full items-start space-y-4 mt-4 md:mt-0 2xl:ml-32">
      <p className="text-primary text-2xl text-start font-semibold">Contacto</p>
      <div className="flex space-x-1  items-center justify-start">
        <IoIosPin className="text-primary w-6 h-6" />
        <p className="text-tertiary text-base font-bold">
          Av. Siempre Viva 123, Springfield
        </p>
      </div>
      <div className="flex space-x-1  items-center justify-start">
        <CiAt className="text-primary w-6 h-6" />
        <p className="text-tertiary text-base font-bold">
          patitasfelices@gmail.com
        </p>
      </div>
      <div className="flex space-x-1  items-center justify-start">
        <FaPhoneAlt className="text-primary w-6 h-6" />
        <p className="text-tertiary text-base font-bold">(+52) 11 6151-3562</p>
      </div>
    </div>
  );
};
