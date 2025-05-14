import { LoginImg } from "./components/loginImg";
import { LoginForm } from "./components/loginForm";

export const Login = () => {
  return (
    <div className="h-auto w-full px-2 pt-4 -mb-4 flex flex-col md:flex-row md:justify-center md:items-center md:py-0 lg:h-screen 2xl:space-x-14">
      <LoginForm />
      <LoginImg img="assets/images/login-dog-bg.svg" alt="perrito acostado" />
    </div>
  );
};
