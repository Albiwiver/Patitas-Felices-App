// components/AdoptSelect.tsx
import { useEffect } from "react";
import { useDogStore } from "../../stores/dogStore";

type selectProps = { classname?: string };

export const AdoptSelect: React.FC<selectProps> = ({ classname }) => {
  const {
    breeds,
    subBreeds,
    selectedBreed,
    selectedSubBreed,
    fetchBreeds,
    fetchSubBreeds,
    setBreed,
    setSubBreed,
    fetchDogs,
  } = useDogStore();

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breed = e.target.value;
    setBreed(breed);
    fetchSubBreeds(breed);
    fetchDogs(breed);
  };

  const handleSubBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subBreed = e.target.value;
    setSubBreed(subBreed);
    fetchDogs(selectedBreed, subBreed);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center md:flex-row gap-4 w-full max-w-2xl mx-auto p-4 z-10 ${classname}`}
    >
      <select
        value={selectedBreed}
        onChange={handleBreedChange}
        className="w-full sm:w-1/2 p-2 bg-secondary shadow-md rounded-lg border border-gray-300 focus:outline-none"
      >
        <option value="">Selecciona una raza</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed.charAt(0).toUpperCase() + breed.slice(1)}
          </option>
        ))}
      </select>

      {subBreeds.length > 0 && (
        <select
          value={selectedSubBreed}
          onChange={handleSubBreedChange}
          className="w-full p-2 sm:w-1/2 bg-secondary shadow-md rounded-lg border border-gray-300 focus:outline-none"
        >
          <option value="">Selecciona una subraza</option>
          {subBreeds.map((sub) => (
            <option key={sub} value={sub}>
              {sub.charAt(0).toUpperCase() + sub.slice(1)}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
