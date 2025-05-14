import { FundationItemType } from "../../../data/fundations.data";
import { fundationsItems } from "../../../data/fundations.data";

export const Fundations: React.FC<FundationItemType> = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto">
      <div className="w-full text-center h-full items-center justify-center pt-4 md:pt-8 lg:pt-12 xl:pt-16 mb-4">
        <p className="text-tertiary font-semibold uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2">
          fundaciones y refugios amigos
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full h-auto px-4 py-2 space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-24 2xl:space-x-30 space-y-4 2xl:pb-8">
        {fundationsItems.map((fundation, index) => (
          <img
            key={index}
            src={fundation.logo}
            alt={`sponsor ${index + 1}`}
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
          />
        ))}
      </div>
    </section>
  );
};
