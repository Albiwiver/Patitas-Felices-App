import { Link } from "react-router-dom";
import { footerLinks } from "../../../../data/footerLinks.data";

export const FooterLinks = () => {
  return (
    <div className="flex justify-center items-start space-x-10 w-full">
      <div className="flex flex-col items-start justify-center space-y-4">
        <p className="text-primary text-2xl text-start font-semibold">
          Explorar
        </p>
        {footerLinks.Explorar.map((link) => (
          <Link
            to={link.path}
            key={link.label}
            className="text-tertiary text-base hover:text-primary font-bold"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-start justify-center space-y-4 2xl:ml-32">
        <p className="text-primary text-2xl text-start font-semibold">Links</p>
        {footerLinks.links.map((link) => (
          <Link
            to={link.path}
            key={link.label}
            className="text-tertiary text-base hover:text-primary font-bold"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
