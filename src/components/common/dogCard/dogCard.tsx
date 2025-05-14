import { DogCardProps } from "./dogCardType";
import { useDogStore } from "../../../stores/dogStore";
import { Button } from "../button/button";

export const DogCard: React.FC<DogCardProps> = ({
  imageUrl,
  breed,
  subBreed,
  className,
}) => {
  const removeDog = useDogStore((state) => state.removeDog);
  return (
    <div
      className={`flex flex-col h-96 lg:h-[440px] xl:h-[500px] relative w-full shadow-lg shadow-neutral-500 hover:scale-105 rounded-md overflow-hidden transition-transform duration-200 ease-in-out bg-center bg-cover bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex absolute bottom-0 flex-col items-center justify-center p-4 bg-secondary w-full h-[30%] rounded-t-4xl">
        <h2 className="text-primary font-medium rounded-lg px-6 py-2 uppercase text-lg ">
          {breed}
        </h2>
        {subBreed && (
          <h3 className="text-sm font-semibold text-tertiary uppercase mb-2">
            {subBreed}
          </h3>
        )}
        <Button
          className=" bg-red-500 hover:bg-tertiary hover:duration-300 text-white font-bold py-2 px-2 w-4/5 mb-2"
          onClick={() => removeDog(imageUrl)}
          label="Adóptame"
          type="button"
        />
      </div>
    </div>
  );
};
