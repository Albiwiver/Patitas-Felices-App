import { ContactPetType } from "./contactPetType";

export const ContactPetCard: React.FC<ContactPetType> = ({
  imageUrl,
  order,
  description,
  className,
}) => {
  return (
    <div
      className={
        "flex flex-col items-start justify-end w-32 sm:w-36 md:w-48 lg:w-56 xl:w-64 2xl:w-72 h-52 sm:h-56 md:h-60 lg:h-96 xl:h-[460px] max-h-[420px] bg-cover px-2 py-2 bg-center bg-no-repeat rounded-xl shadow-neutral-500 shadow-xl bg-gradient-to-b from-transparent to-black lg:hover:scale-105 duration-150 " +
        className
      }
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 170%), url(${imageUrl})`,
      }}
    >
      <span
        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black"
        style={{
          WebkitTextStroke: "1px white",
          color: "transparent",
        }}
      >
        {order}
      </span>
      <p className="text-base text-white md:text-lg lg:text-xl xl:text-2xl">
        {description}
      </p>
    </div>
  );
};
