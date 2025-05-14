import { ContactInfo } from "./contactInfo";
import { ContactMap } from "./contactMap";
import { ContactImage } from "./contactImage";
import { ContactForm } from "./contactForm";

export const Contact: React.FC = () => {
  return (
    <section className="flex flex-col w-full h-auto lg:min-h-screen py-8 px-4 lg:py-16 lg:px-8 xl:px-14 xl:py-20 lg:space-y-8">
      <div className="flex flex-col w-full lg:h-1/2 md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 ">
        <ContactForm />
        <div className="flex flex-col w-full h-auto space-y-4 md:w-2/5 2xl:w-4/9">
          <ContactMap />
          <ContactInfo />
        </div>
      </div>
      <ContactImage
        imageUrl="assets/images/contactUs-dog-img.svg"
        altDescription="imagen de perrito acostado boca arriba"
      />
    </section>
  );
};
