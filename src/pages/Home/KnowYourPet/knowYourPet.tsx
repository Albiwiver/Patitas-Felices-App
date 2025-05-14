import { DogAdoptGrid } from "../../Adopt/dogAdoptGrid";
import { useDogStore } from "../../../stores/dogStore";
import { useEffect, useState } from "react";

export const KnowYourPet = () => {
  const { randomDogs, fetchRandomDogs } = useDogStore();
  const [dogsToShow, setDogsToShow] = useState<typeof randomDogs>([]);

  useEffect(() => {
    fetchRandomDogs();
  }, [fetchRandomDogs]);

  useEffect(() => {
    setDogsToShow(randomDogs.slice(0, 4));
  }, [randomDogs]);

  return (
    <section className="relative z-10  flex flex-col items-center justify-center w-full h-auto lg:min-h-screen bg-[url('assets/images/fingerprints-background.svg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-auto py-2 px-2 mt-4 flex flex-col text-center z-10 lg:mt-16 space-y-2 lg:space-y-4 xl:space-y-6 2xl:space-y-8 mb-2 lg:mb-8 xl:mb-12 2xl:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-tertiary">
          Conoce a tu próxima máscota
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Ellos te esperan para brindarte todo el amor y companía que necesitas.
          ¿Qué estás esperando?
        </p>
      </div>
      <DogAdoptGrid dogs={dogsToShow} />
    </section>
  );
};
