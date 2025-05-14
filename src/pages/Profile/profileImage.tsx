import { useRef, useState } from "react";
import { PiPencilLineFill } from "react-icons/pi";

export const ProfileImage: React.FC = () => {
  const [image, setImage] = useState<string>(
    localStorage.getItem("profileImage") || "/ruta/por_defecto.jpg"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      localStorage.setItem("profileImage", imageUrl);
    }
  };

  return (
    <div className="flex flex-col w-full px-12 items-center justify-center space-y-4 h-auto my-4">
      <h3 className="uppercase text-2xl font-semibold text-tertiary md:text-2xl lg:text-3xl">
        mi perfil
      </h3>
      <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-neutral-400 lg:w-52 lg:h-52 xl:w-64 xl:h-64 relative rounded-full">
        <img
          src={image}
          alt=""
          className="rounded-full w-full h-full object-cover inset-0"
        />
        <button
          type="button"
          onClick={handleImageClick}
          className="absolute cursor-pointer flex items-center justify-center md:size-8 bottom-2 right-2  md:right-4 lg:bottom-3 lg:right-6 xl:bottom-6 xl:right-6 bg-red-500 p-1 rounded-full hover:bg-red-600"
        >
          <PiPencilLineFill className="text-white md:size-5" />
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
      </div>
    </div>
  );
};
