import { FC } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Button } from "../../../components/common/button/button";
import { Logo } from "../../../components/common/logo/logo";
import { Link, useNavigate } from "react-router-dom";
import { navbarLinks } from "../../../data/navbarLinks.data";
import { AppRoutes } from "../../../router/routes.model";
import useAuthStore from "../../../stores/useAuthStore";

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLinkClick = (path: string) => {
    navigate(path);
    setOpen(false);
  };
  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate(AppRoutes.LOGIN);
  };

  return (
    <header className="w-full h-16 bg-secondary md:h-20 xl:h-24 relative">
      <nav className="flex w-full h-full justify-between items-center px-2 lg:px-6 xl:p-10 2xl:px-14">
        <Logo />
        <div className="hidden md:flex space-x-2 items-center mt-1 lg:space-x-4 xl:space-x-10 2xl:space-x-14">
          {navbarLinks.map((link) => (
            <Link
              to={link.path}
              key={link.label}
              className="text-tertiary text-sm lg:text-base xl:text-lg 2xl:text-xl hover:text-primary font-bold"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          <RxHamburgerMenu className="w-6 h-6 text-primary cursor-pointer" />
        </button>
        <div className="hidden md:flex space-x-2 items-center">
          {!isAuthenticated ? (
            <>
              <Button
                onClick={() => handleLinkClick(AppRoutes.REGISTER)}
                label="Registrarse"
                className="rounded-lg py-1 px-3 lg:py-2 lg:px-4 text-white text-sm lg:text-base xl:text-lg bg-tertiary hover:bg-tertiary/90 cursor-pointer"
              />
              <Button
                onClick={() => handleLinkClick(AppRoutes.LOGIN)}
                label="Ingresar"
                className="rounded-lg py-1 px-3 lg:py-2 lg:px-4 text-white text-sm lg:text-base xl:text-lg bg-primary hover:bg-primary/80 cursor-pointer"
              />
            </>
          ) : (
            <>
              <Button
                onClick={() => handleLinkClick(AppRoutes.PROFILE)}
                label="Mi Perfil"
                className="rounded-lg py-1 px-3 lg:py-2 lg:px-4 text-white text-sm lg:text-base xl:text-lg bg-primary hover:bg-primary/80 cursor-pointer"
              />
              <Button
                onClick={handleLogout}
                label="Cerrar sesión"
                className="rounded-lg py-1 px-3 lg:py-2 lg:px-4 text-white text-sm lg:text-base xl:text-lg bg-tertiary hover:bg-secondary/80 cursor-pointer"
              />
            </>
          )}
        </div>
        {open && (
          <div className="absolute z-20 top-full left-0 w-full bg-white shadow-md flex flex-col p-4 md:hidden">
            {navbarLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="py-2 border-b text-tertiary hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {!isAuthenticated ? (
              <>
                <Button
                  onClick={() => {
                    handleLinkClick(AppRoutes.LOGIN);
                    setOpen(false);
                  }}
                  label="Ingresar"
                  className="mt-4 px-4 py-2 text-white bg-primary rounded cursor-pointer hover:bg-primary/80"
                />
                <Button
                  onClick={() => {
                    handleLinkClick(AppRoutes.REGISTER);
                    setOpen(false);
                  }}
                  label="Registrarse"
                  className="mt-2 px-4 py-2 bg-tertiary text-white rounded cursor-pointer hover:bg-tertiary/80"
                />
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    handleLinkClick(AppRoutes.PROFILE);
                    setOpen(false);
                  }}
                  label="Mi Perfil"
                  className="mt-4 px-4 py-2 text-white bg-primary rounded cursor-pointer hover:bg-primary/80"
                />
                <Button
                  onClick={handleLogout}
                  label="Cerrar sesión"
                  className="mt-2 px-4 py-2 bg-tertiary text-white rounded cursor-pointer hover:bg-secondary/80"
                />
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
