import { Button } from "../../components/common/button/button";
import { PiPencilLineFill } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { CiAt } from "react-icons/ci";
import { Input } from "../../components/common/input/input";

export const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col w-full md:w-3/5 2xl:w-5/9 text-start space-y-2">
      <h3 className="uppercase text-2xl font-semibold text-tertiary sm:text-3xl md:text-4xl">
        contáctanos
      </h3>
      <p className="text-base font-semibold text-tertiary">
        Tienes alguna consulta, envíanos un mensaje.
      </p>
      <div className="flex flex-col lg:flex-row space-y-2 w-full lg:space-y-0 md:space-x-4">
        <div className="flex flex-col justify-center w-full items-start space-y-1">
          <label htmlFor="" className="text-base text-tertiary font-semibold">
            Nombre y apellido
          </label>
          <div className="flex items-center space-x-2 border-2 rounded-sm border-[#DADADA] w-full py-2">
            <CiUser className="text-primary/60 size-5 ml-2" />
            <Input
              id="name"
              type="name"
              name="name"
              placeholder="Ingrese su nombre y apellido"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-start space-y-1">
          <label htmlFor="" className="text-base text-tertiary font-semibold">
            Email
          </label>
          <div className="flex items-center space-x-2 border-2 rounded-sm border-[#DADADA] w-full py-2">
            <CiAt className="text-primary/60 size-5 ml-2" />
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Ingrese su nombre y apellido"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full space-y-1  mt-3">
        <label htmlFor="" className="text-base text-tertiary font-semibold">
          Mensaje
        </label>
        <div className="border-[#DADADA] border-2 rounded-sm w-full overflow-x-hidden relative">
          <PiPencilLineFill className="text-primary/60 size-4 ml-2 absolute top-1 lef-2" />
          <textarea
            name="message"
            id="message"
            placeholder="Escriba su mensaje"
            className="w-full lg:h-60 xl:h-72 2xl:h-80 resize-none outline-none text-black placeholder-primary/60 pl-8"
          ></textarea>
        </div>
      </div>
      <Button
        className="w-full md:w-1/2 bg-primary text-white py-2 mt-2"
        label="Enviar mensaje"
        type="button"
      />
    </form>
  );
};
