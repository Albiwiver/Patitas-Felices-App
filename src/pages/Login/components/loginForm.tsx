import { FcGoogle } from "react-icons/fc";
import { BsKey } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
import { Button } from "../../../components/common/button/button";
import { AppRoutes } from "../../../router/routes.model";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserStore from "../../../stores/useUserStore";
import useAuthStore from "../../../stores/useAuthStore";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const findUser = useUserStore((state) => state.findUser);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = findUser(email, password);

    if (user) {
      login({ name: user.name, email: user.email });
      navigate(AppRoutes.HOME);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  return (
    <form
      className="flex flex-col justify-center md:h-screen w-full md:w-[50%] lg:w-[40%] 2xl:w-[35%] items-start space-y-2 lg:space-y-3 2xl:space-y-4 md:pl-4 lg:pl-8"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl lg:text-3xl uppercase text-black text-start font-bold">
        Ingresar
      </p>
      <p className="text-base text-black text-start font-semibold">
        ¡Bienvenido! Inicia sesión para acceder a tu cuenta
      </p>
      <label
        className="text-base text-black font-semibold"
        typeof="email"
        id="email"
      >
        Email
      </label>
      <div className="flex items-center space-x-2 border-2 rounded-sm border-[#DADADA] w-full py-2">
        <CiAt className="text-primary/60 size-5 ml-2" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su email"
          className="placeholder-primary/60 text-black outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <label
        className="text-base text-black font-semibold"
        typeof="email"
        id="email"
      >
        Contraseña
      </label>

      <div className="flex items-center space-x-2 border-2 rounded-sm border-[#DADADA] w-full py-2">
        <BsKey className="text-primary/60 size-5 ml-2" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ingrese su contraseña"
          className="placeholder-primary/60 text-black outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-full space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <div className="flex items-center space-x-2 ml-1">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            className="h-4 w-4 "
            defaultChecked={false}
          />
          <label
            htmlFor="rememberMe"
            className="text-black text-base font-semibold"
          >
            Recordarme
          </label>
        </div>
        <p className="text-black text-base font-semibold md:ml-auto">
          ¿Olvidaste tu contraseña?
        </p>
      </div>
      <Button
        label="Ingresar"
        className="w-full bg-primary py-2 text-white"
        type="submit"
      />
      <div className="flex items-center justify-center space-x-2 w-full">
        <div className="w-full border-t border-black"></div>
        <span className="text-black">O</span>
        <div className="w-full border-t border-black"></div>
      </div>
      <Button
        icon={<FcGoogle className="size-6" />}
        iconPosition="left"
        label="Ingresar con Google"
        className="w-full py-2 text-black border-1 border-[#DADADA] font-semibold"
      />
      <Button
        icon={<FaFacebook className="size-6 text-blue-700" />}
        iconPosition="left"
        label="Ingresar con Facebook"
        className="w-full py-2 text-black border-1 border-[#DADADA] font-semibold"
      />

      <p className="text-black font-semibold text-base text-center flex justify-center items-center w-full">
        ¿No tienes una cuenta?
        <Link
          to={AppRoutes.REGISTER}
          onClick={() => handleLinkClick(AppRoutes.REGISTER)}
          className="text-primary font-semibold text-base ml-2"
        >
          Regístrate
        </Link>
      </p>
    </form>
  );
};
