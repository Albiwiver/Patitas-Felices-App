import { DogCard } from "../../components/common/dogCard/dogCard";

type DogAdoptGridProps = {
  dogs: { imageUrl: string; breed: string; subBreed: string }[];
  isCarousel?: boolean;
};

export const DogAdoptGrid: React.FC<DogAdoptGridProps> = ({ dogs }) => {
  return (
    <div
      className={
        "w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-3 p-4 pb-16"
      }
    >
      {dogs.map((dog, index) => (
        <DogCard
          key={index}
          imageUrl={dog.imageUrl}
          breed={dog.breed}
          subBreed={dog.subBreed}
        />
      ))}
    </div>
  );
};
