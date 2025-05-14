export interface ContactImage {
  imageUrl: string;
  altDescription: string;
  classname?: string;
}

export const ContactImage: React.FC<ContactImage> = ({
  imageUrl,
  altDescription,
  classname,
}) => {
  return (
    <div
      className={`w-full h-auto lg:h-1/2 py-4 md:px-2 lg:px-4 xl:px-8 2xl:px-16 lg:py-8 xl:py-12 mt-4 ${classname}`}
    >
      <img
        src={imageUrl}
        alt={altDescription}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
