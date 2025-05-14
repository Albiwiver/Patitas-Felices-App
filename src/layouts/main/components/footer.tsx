import { Logo } from "../../../components/common/logo/logo";
import { FooterLinks } from "./footer/footerLinks";
import { FooterContact } from "./footer/footerContact";
import { SocialMedia } from "./footer/socialMedia";

export const Footer = () => {
  return (
    <footer className="w-full h-screen bg-secondary items-center justify-center md:h-[380px] lg:h-[400px] xl:h-[420px]  md:mx-auto lg:rounded-2xl ">
      <div className="w-full h-full flex flex-col justify-center items-center px-2 py-4">
        <div className="flex justify-center items-center w-full">
          <Logo
            sizeClassName="w-10 h-10"
            textSizeClassName="text-2xl text-primary font-extrabold"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 mt-4 md:flex-row md:justify-between  md:space-y-0 md:items-start md:space-x-6 lg:space-x-10 xl:space-x-16 md:mt-8 lg:w-17/18">
          <FooterLinks />
          <FooterContact />
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};
