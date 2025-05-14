export const ContactMap: React.FC = () => {
  return (
    <div className="w-full aspect-video  rounded-lg">
      <iframe
        src="https://www.google.com/maps?q=Calle+Gran+Vía+34,+Madrid,+España&output=embed"
        className="w-full h-full rounded-lg"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
