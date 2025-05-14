import { useDogStore } from "../../stores/dogStore";
import { useEffect, useState } from "react";
import { AdoptSelect } from "./adoptSelect";
import { DogAdoptGrid } from "./dogAdoptGrid";
import { Pagination } from "./pagination";

export const Adopt = () => {
  const {
    randomDogs,
    fetchRandomDogs,
    selectedBreed,
    selectedSubBreed,
    fetchDogs,
    dogs,
  } = useDogStore();

  useEffect(() => {
    fetchRandomDogs();
  }, [fetchRandomDogs]);

  useEffect(() => {
    if (selectedBreed || selectedSubBreed) {
      fetchDogs(selectedBreed, selectedSubBreed);
    }
  }, [selectedBreed, selectedSubBreed, fetchDogs]);

  const dogsToDisplay = dogs.length > 0 ? dogs : randomDogs;

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 12;

  const dogsToShow = dogsToDisplay.slice(
    (currentPage - 1) * dogsPerPage,
    currentPage * dogsPerPage
  );

  return (
    <section className="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <img
        src="assets/images/dog-fingerprint-left.svg"
        alt="dog fingerprint"
        className="absolute -top-2 -left-16 z-0 size-[260px] lg:size-[320px] xl:size-[360px] lg:-left-8 xl:left-14"
      />

      <img
        src="assets/images/dog-fingerprint-right.svg"
        alt="dog fingerprint"
        className="absolute top-28 -right-12 z-0 size-[160px] lg:size-[200px] xl:size-[240px] lg:-right-4 lg:top-20 xl:top-10 xl:right-16"
      />

      <div className="w-full h-full px-4 py-8 flex flex-col text-center z-10 mb-8">
        <h1 className="font-bold text text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Cada mascota merece un hogar amoroso.
          <br />
          <span className="text-primary">Adopta </span>
          una mascota hoy.
        </h1>
        <p className="mt-4 text-xs max-w-[1200px] mx-auto sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Explore nuestros animales disponibles y obtenga más información sobre
          el proceso de adopción. Juntos, podemos rescatar, rehabilitar y
          realojar a las mascotas necesitadas. Gracias por apoyar nuestra misión
          de llevar alegría a las familias a través de la adopción de mascotas.
        </p>
      </div>
      <AdoptSelect />
      <div className="w-full h-auto flex justify-start items-center my-4 max-w-7xl mx-auto px-4 md:mb-6 lg:mb-8">
        <p className="uppercase text-tertiary text-lg md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
          Mascotas en adopción
        </p>
      </div>
      <DogAdoptGrid dogs={dogsToShow} />
      {dogs.length > 12 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(dogs.length / dogsPerPage)}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
};
