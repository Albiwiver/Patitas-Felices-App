type LoginImgProps = {
  img: string;
  classname?: string;
  alt?: string;
};

export const LoginImg: React.FC<LoginImgProps> = ({ img, classname, alt }) => {
  return (
    <div className={"flex justify-center items-center w-full" + classname}>
      <img className="w-full h-full" src={img} alt={alt} />
    </div>
  );
};
