import { Button } from "../../../components/common/button/button";

type GiveLoveGetLove = {
  imageUrl: string;
};

export const GiveLoveGetLove: React.FC<GiveLoveGetLove> = ({ imageUrl }) => {
  return (
    <section
      className="flex flex-col max-w-[1780px] w-full h-auto lg:min-h-screen px-4 py-8 bg-left bg-cover bg-no-repeat items-center justify-center sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-30 lg:items-end lg:px-16 xl:px-20 2xl:px-24"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="w-full h-full flex flex-col items-start justify-between sm:items-center sm:w-4/5 md:w-3/5 lg:w-1/2 lg:bg-white lg:py-12 xl:py-22 2xl:py-28 2xl:mt-8 rounded-lg lg:shadow-neutral-400 lg:shadow-xl">
        <div className="w-full space-y-4 mb-60 lg:mb-24 sm:text-center lg:w-5/6 2xl:w-4/6">
          <h3 className="text-xl text-tertiary font-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Dar
            <span className="text-primary font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {" "}
              amor
            </span>
            , para recibir{" "}
            <span className="text-primary font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              amor
            </span>
          </h3>
          <p className="text-xs text-tertiary sm:text-base md:text-lg lg:text-xl lg:">
            La vida es como el eco; Lo que das, lo recibes. Lo que siembras,
            cosechas. Lo que ves en otros, es tu propio reflejo. La vida es como
            el eco.... Siempre te regresa lo que das.
            <br />
            <br />
            Rescatando, defendiendo, cuidando, esterilizando, educando.. Todos
            los días trabajando para construir un lugar mejor! Agradecemos tu
            interés, apoyo y ayuda al Refugio.¡Haces que nuestra motivación,
            trabajo y equipo siga creciendo día a día! Derrotemos al abandono y
            promovamos el bienestar y felicidad
          </p>
        </div>
        <div className="w-full lg:w-2/3">
          <Button
            label="Haz tu donación"
            type="button"
            className="w-full bg-primary text-white text-base py-2 shadow-neutral-400 shadow-lg hover:bg-tertiary transition duration-200 easi-in-out"
          />
        </div>
      </div>
    </section>
  );
};
