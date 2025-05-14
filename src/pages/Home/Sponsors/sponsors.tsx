import { sponsorsItems } from "../../../data/sponsors.data";
import { SponsorItemType } from "../../../data/sponsors.data";

export const Sponsors: React.FC<SponsorItemType> = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto bg-tertiary ">
      <div className="w-full text-center h-full items-center justify-center pt-4 md:pt-8 lg:pt-12 xl:pt-16">
        <p className="text-white uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2">
          nuestros patrocinadores
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full h-auto px-4 py-2 space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:pb-8">
        {sponsorsItems.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.logo}
            alt={`sponsor ${index + 1}`}
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
          />
        ))}
      </div>
    </section>
  );
};
