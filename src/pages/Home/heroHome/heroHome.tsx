type HeroProps = {
  subtitle: string;
  imageUrl: string;
};

export const HeroHome: React.FC<HeroProps> = ({ subtitle, imageUrl }) => {
  return (
    <section className="flex flex-col items-center relative justify-center w-full h-80 sm:h-96 md:h-[480px] lg:min-h-screen ">
      <div
        className={`absolute inset-0 -z-10  bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="flex flex-col items-start justify-start w-full h-full pl-4 mt-4 md:pl-8 lg:pl-16 lg:mt-18 xl:pl-24 xl:mt-24 2xl:pl-32 2xl:mt-32 ">
        <div className="flex justify-start items-center space-x-1 md:space-x-2">
          <div className="h-12.5 mt-1 bg-primary w-1 sm:h-14 md:h-16.5 lg:h-20.5 lg:w-2 xl:h-26 xl:mt-2 2xl:w-3 2xl:h-31 2xl:mt-3"></div>
          <p className="text-white text-2xl font-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            <span className="text-primary mr-2 text-2xl font-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Adopta
            </span>
            uno más <br /> a tu familia
          </p>
        </div>
        <div className="w-1/2 sm:w-1/3 xl:w-1/4 h-auto flex justify-start items-start">
          <p className="text-xs text-white pl-2 md:pl-3 lg:pl-4 xl:pl-5 2xl:pl-6 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex  justify-evenly absolute bottom-14 right-0 lg:bottom-40 items-center space-x-1 mt-4 py-2 bg-secondary/30 w-3/4 lg:w-1/2 lg:py-8 h-auto rounded-l-xl backdrop-blur-sm z-10 shadow-lg pl-1">
        <div className="flex flex-col items-center text-center justify-center space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-4 2xl:space-y-5">
          <span className="text-primary font-semibold text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl">
            544
          </span>
          <p className="text-tertiary text-[10px] sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
            Esperando un hogar
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-4 2xl:space-y-5">
          <span className="text-primary font-semibold  text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl">
            756
          </span>
          <p className="text-tertiary text-[10px] sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
            Adoptados el último año
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-4 2xl:space-y-5">
          <span className="text-primary font-semibold text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl">
            422
          </span>
          <p className="text-tertiary text-[10px] sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
            En tránsito
          </p>
        </div>
      </div>
    </section>
  );
};
