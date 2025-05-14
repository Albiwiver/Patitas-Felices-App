export const OurAttitude: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto lg:min-h-screen px-4 py-2 lg:px-8 lg:py-6 xl:px-16 text-start md:text-center lg:space-y-8 xl:space-y-12">
      <h3 className="text-xl font-black text-tertiary md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-8">
        Nuestro comportamiento
      </h3>
      <div className="w-full h-auto lg:w-4/5 grid grid-cols-1  mt-4 sm:grid-cols-2 lg:gap-8">
        <div className="w-full h-full rounded-xl flex items-center justify-center bg-transparent relative">
          <img
            src="assets/images/OurAttitude/image-1.svg"
            alt="banner de fomentar el amor"
            className="w-full h-full object-cover rounded-xl inset-0"
          />
          <div className="flex flex-col w-[93%] h-1/2 px-2 md:px-4 lg:px-8 items-start justify-center bg-black opacity-80 back absolute space-y-4">
            <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Fomentar el amor
            </p>
            <p className="text-white text-xs md:text-base lg:text-lg xl:text-xl">
              Un bien necesario
            </p>
          </div>
        </div>
        <div className="w-full h-full rounded-xl flex items-center justify-center">
          <img
            src="assets/images/OurAttitude/image-2.svg"
            alt="imagen de perrito con ordenador"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-full h-full rounded-xl flex items-center justify-center">
          <img
            src="assets/images/OurAttitude/image-3.svg"
            alt="imagen de gatitos abrazándose"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-full h-full rounded-xl flex items-center justify-center">
          <img
            src="assets/images/OurAttitude/image-4.svg"
            alt="imagen de gato y perro en brazos"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
