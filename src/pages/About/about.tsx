export const About: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full lg:h-screen flex flex-col items-center justify-center text-center z-10 md:flex-row lg:justify-end lg:bg-[url('/assets/images/about-us-hero-dog-image-desktop.svg')] lg:bg-center lg:bg-cover lg:bg-no-repeat ">
        <div className="w-full h-full flex items-center justify-center lg:hidden">
          <img
            src="assets/images/about-us-hero-dog-image.svg"
            alt="imagen de un perrito feliz"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-fit px-4 py-8 flex flex-col z-10 lg:w-2/5  xl:w-3/9 2xl:w-[30%] 2xl:pl-8 lg:bg-white lg:rounded-md lg:shadow-lg lg:mr-8  2xl:mr-24 ">
          <h3 className="text-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-start lg:text-center">
            Acerca nuestro
          </h3>
          <p className="mt-4 text-xs md:max-w-[480px]  sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] text-start">
            Patitas Felices fue creada oficialmente en febrero del año 2024 como
            plataforma para la adopción y/o tránsito de mascotas sin hogar.
            Surge de la problemática de los animales abandonados, maltratados y
            con la necesidad de cambiar la vida de todos aquellos perros y gatos
            que llegan a nosotros con la esperanza de reescribir su historia. De
            esa forma, se les da una segunda oportunidad a cientos de animales
            que han sido víctimas de maltrato, abandono y abuso. La plataforma
            está disponible en todo el territorio de la República Argentina,
            desde Jujuy hasta Tierra del Fuego. Nuestro objetivo final es poder
            encontrar un hogar para cada uno de nuestros rescatados. Por eso en
            Patitas Felices ubicamos familias y personas responsables
            interesadas en adoptar. Adicional a esta labor nos encargamos de
            hacer el seguimiento a cada uno de los animales entregados.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto py-8 px-4 bg-tertiary z-10 md:space-x-4 lg:space-x-8 xl:space-x-16 xl:px-12 xl:py-16 2xl:space-x-24 2xl:px-20 2xl:py-24 ">
        <div className="flex flex-col items-center justify-center w-full h-auto xl:space-y-4 2xl:space-y-16">
          <div className="flex items-center justify-start w-full space-x-1">
            <span className="text-primary text-2xl lg:text-3xl text-bold">
              I{" "}
            </span>
            <p className="text-white text-2xl lg:text-3xl font-bold text-start">
              Nuestros valores
            </p>
          </div>
          <div className="flex flex-col items-start justify-start w-full h-auto mt-4 space-y-2">
            <p className="text-base lg:text-xl font-semibold uppercase text-white">
              empatia
            </p>
            <div className="w-full h-full flex items-start justify-start space-x-4">
              <div className="w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full mt-3 shrink-0"></div>
              <p className="text-base lg:text-xl font-medium text-white text-start">
                Hay que entender la situacion de estos seres, debemos estar
                siempre al rescate de ellos, no pueden quedar abandonados
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start w-full h-auto mt-4 space-y-2">
            <p className="text-base lg:text-xl font-semibold uppercase text-white">
              positividad
            </p>
            <div className="w-full h-full flex items-start justify-start space-x-4">
              <div className="w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full mt-3 shrink-0"></div>
              <p className="text-base lg:text-xl font-medium text-white text-start">
                No hay mal que por bien no venga, siempre habra una persona
                dispuesta a ayudarte
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start w-full h-auto mt-4 space-y-2">
            <p className="text-base lg:text-xl font-semibold uppercase text-white">
              conciencia
            </p>
            <div className="w-full h-full flex items-start justify-start space-x-4">
              <div className="w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full mt-3 shrink-0"></div>
              <p className="text-base lg:text-xl font-medium text-white text-start">
                Debemos ser conscientes de que dejar abandonados a nuestras
                mascotas, habla mal de nosotros
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start w-full h-auto mt-4 space-y-2">
            <p className="text-base lg:text-xl font-semibold uppercase text-white">
              solidaridad
            </p>
            <div className="w-full h-full flex items-start justify-start space-x-4">
              <div className="w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full mt-3 shrink-0"></div>
              <p className="text-base lg:text-xl font-medium text-white text-start">
                Solidaridad total con estos animales dejados al abandono.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full h-full flex items-center justify-center ">
          <img
            src="assets/images/about-us-animals-image.svg"
            alt="imagen de perritos, gatos y una cobaya"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
