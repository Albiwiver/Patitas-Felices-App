import { FC } from "react";

type LogoProps = {
  sizeClassName?: string;
  textSizeClassName?: string;
};

export const Logo: FC<LogoProps> = ({ sizeClassName, textSizeClassName }) => {
  const defaultSize = "w-6 h-6 md:w-8 md:h-8";
  const defaultTextSize =
    "text-primary text-lg font-extrabold md:text-2xl xl:text-3xl";

  return (
    <div className="flex justify-center items-center space-x-2">
      <img
        src="assets/logos/navbar-logo.svg"
        alt="logo de patita de perro"
        className={`${sizeClassName ?? defaultSize}`}
      />
      <p className={`${textSizeClassName ?? defaultTextSize}`}>
        Patitas Felices
      </p>
    </div>
  );
};
