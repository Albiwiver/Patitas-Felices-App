import { ContactToLoveGrid } from "./contactToloveGrid";
import { Button } from "../../../components/common/button/button";
import { AppRoutes } from "../../../router/routes.model";
import { useNavigate } from "react-router-dom";

export const ContactToLoveYourPet = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(AppRoutes.CONTACT);
  };

  return (
    <section className="flex z-10 relative flex-col items-center justify-center w-full h-auto lg:min-h-screen pt-8 md:pt-16 lg:pt-24">
      <div className="flex items-center justify-start w-full max-w-[1580px] h-auto px-4 md:px-6 lg:px-12 xl:px-24 ">
        <p className="text-xs text-tertiary font-bold px-2 bg-secondary rounded-lg sm:text-base md:text-lg lg:text-xl">
          El proceso
        </p>
      </div>
      <div className="flex flex-col items-start justify-center max-w-[1580px] w-full h-auto px-4 md:px-6 lg:px-12 xl:px-24 py-2 space-y-4 md:space-y-8  lg:flex-row lg:space-x-8 lg:space-y-0 lg:items-center lg:justify-start lg:py-8 xl:py-12">
        <h3 className="text-tertiary font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Narices frías y corazones contentos
        </h3>
        <p className="text-tertiary text-xs sm:text-base md:text-lg lg:text-xl lg:w-1/2">
          Al momento de adoptar asumís un acto de responsabilidad y compromiso
          por lo que es importante que estés capacitado para hacerlo.{" "}
        </p>
      </div>
      <ContactToLoveGrid />
      <div className="w-full px-4 py-4 pb-8 md:pb-12 lg:pb-16 xl:pb-20 md:px-6 lg:px-12 xl:px-24 flex items-center justify-center">
        <Button
          label="Contáctanos"
          className="bg-primary w-full md:w-1/2 lg:w-1/3 text-white py-2 text-base md:text-lg lg:text-xl xl:text-2xl font-bold rounded-lg shadow-lg hover:bg-tertiary transition duration-300 ease-in-out"
          onClick={handleClick}
          type="button"
        />
      </div>
      <img
        src="assets/images/dog-fingerprint-right.svg"
        alt=""
        className="absolute -z-10 w-40 h-40 top-4 -right-8 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-[500px] 2xl:h-[500px]"
      />
      <img
        src="assets/images/dog-fingerprint-left.svg"
        alt=""
        className="absolute -z-10 w-30 h-30 bottom-4 -left-6 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 2xl:w-[500px] 2xl:h-[500px]"
      />
    </section>
  );
};
