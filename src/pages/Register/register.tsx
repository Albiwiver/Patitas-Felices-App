import { RegisterForm } from "./registerForm";
import { RegisterImage } from "./registerImage";

export const Register = () => {
  return (
    <section className="w-full px-4 py-8 md:px-6 lg:px-8 xl:px-16 xl:py-12 2xl:px-24 2xl:py-20 flex flex-col">
      <RegisterForm />
      <RegisterImage />
    </section>
  );
};
