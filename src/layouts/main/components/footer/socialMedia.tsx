import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Button } from "../../../../components/common/button/button";

export const SocialMedia = () => {
  return (
    <div className="flex flex-col justify-center w-auto items-start space-y-4 mt-4 md:mt-0 lg:space-y-8">
      <div className="flex flex-col justify-center w-full items-center space-y-4 mt-4 md:mt-0 md:space-y-8 lg:items-start">
        <p className="text-xl text-primary font-bold md:text-2xl text-center">
          Síguenos en nuestras redes
        </p>
        <div className="flex justify-center items-center space-x-6">
          <a href="https://facebook.com" target="blank">
            <FaFacebook className="text-primary text-2xl cursor-pointer hover:text-tertiary size-9.5 lg:size-11" />
          </a>

          <a href="http://twitter.com" target="blank">
            <FaSquareXTwitter className="text-primary text-2xl cursor-pointer hover:text-tertiary size-10 lg:size-12" />
          </a>

          <a href="http://instagram.com" target="blank">
            <AiFillInstagram className="text-primary text-2xl cursor-pointer hover:text-tertiary size-11 lg:size-12" />
          </a>
        </div>
      </div>
      <div className="bg-white px-8 rounded-md h-auto py-3 flex flex-col justify-center w-full items-center space-y-8 mt-4 md:mt-0 lg:flex-row lg:space-y-0 lg:space-x-4 lg:items-center">
        <div className="flex justify-center items-center space-x-2">
          <SlEnvolopeLetter className="text-primary cursor-pointer size-4" />
          <input
            type="text"
            placeholder="Escribe su correo aquí"
            className="outline-none"
          />
        </div>

        <Button
          className="bg-primary rounded-md px-8 py-1 text-white font-semibold text-base hover:bg-tertiary md:px-6 cursor-pointer"
          label="Suscribirse"
          type="button"
          icon={<IoIosArrowForward className="text-white size-5" />}
          iconPosition="right"
        />
      </div>
    </div>
  );
};
