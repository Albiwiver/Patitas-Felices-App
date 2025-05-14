import { contactPetCardData } from "../../../data/contactPetCard.data";
import { ContactPetCard } from "./contactPetCard";

export const ContactToLoveGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 w-full px-2 py-8 lg:pb-20 xl:gap-8 2xl:gap-20">
      {contactPetCardData.map((card) => (
        <ContactPetCard
          key={card.order}
          imageUrl={card.img}
          order={card.order}
          description={card.description}
          className="lg:hover:scale-110 transition-transform duration-200 ease-in-out md:px-4 md:py-4"
        />
      ))}
    </div>
  );
};
