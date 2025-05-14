import { Fundations } from "./Fundations/fundations";
import { Sponsors } from "./Sponsors/sponsors";
import { KnowYourPet } from "./KnowYourPet/knowYourPet";
import { HeroHome } from "./heroHome/heroHome";
import { ContactToLoveYourPet } from "./ContactToLoveYourPet/contactToLoveYourPet";
import { GiveLoveGetLove } from "./GiveLoveGetLove/giveLoveGetLove";
import { OurAttitude } from "./OurAttitude/ourAttitude";

export const Home: React.FC = () => {
  return (
    <main>
      <HeroHome
        imageUrl="/assets/images/little-boy-kisses-dog-nose-window.svg"
        subtitle="Buscamos combatir el abandono y maltrato animal desde el respeto y
            el amor por los animales."
      />
      <KnowYourPet />
      <Sponsors item="Sample Item" logo="/assets/images/sample-logo.svg" />
      <ContactToLoveYourPet />
      <Fundations item="sample Item" logo="/assets/images/sample-logo.svg" />
      <GiveLoveGetLove imageUrl="assets/images/give-your-love-dog-background.svg" />
      <OurAttitude />
    </main>
  );
};
