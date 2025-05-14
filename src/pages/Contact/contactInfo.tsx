import { IoIosPin } from "react-icons/io";
import { CiAt } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

export const ContactInfo: React.FC = () => {
  return (
    <div className="w-full h-full bg-primary flex flex-col px-4 py-4 items-start justify-center space-y-4 rounded-lg lg:px-8 lg:shadow-lg lg:shadow-neutral-400">
      <p className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl uppercase">
        información
      </p>
      <div className="flex space-x-2  items-center justify-start">
        <IoIosPin className="text-white w-6 h-6" />
        <p className="text-white text-base font-bold">
          Av. Siempre Viva 742, Bs. As
        </p>
      </div>
      <div className="flex space-x-2  items-center justify-start">
        <CiAt className="text-white w-6 h-6" />
        <p className="text-white text-base font-bold">
          patitasfelices@gmail.com
        </p>
      </div>
      <div className="flex space-x-2  items-center justify-start">
        <FaPhoneAlt className="text-white w-6 h-6" />
        <p className="text-white text-base font-bold">(+52) 11 6151-3562</p>
      </div>
    </div>
  );
};
