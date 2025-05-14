import { Button } from "../../components/common/button/button";
import { Label } from "../../components/common/label/label";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RegisterName } from "./registerName";
import { RegisterEmail } from "./registerEmail";
import { RegisterPassword } from "./registerPassword";
import { RegisterLocation } from "./registerLocation";
import { RegisterPostalCode } from "./registerPostalCode";
import { useState } from "react";
import useUserStore from "../../stores/useUserStore";
import { useNavigate } from "react-router-dom";

export const RegisterForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    subname: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    location: "",
    province: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const { registerUser } = useUserStore();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const emailMatch = form.email === form.confirmEmail;
    const passwordMatch = form.password === form.confirmPassword;
    const locationAndProvinceValid =
      (form.location?.trim() ?? "") !== "" &&
      (form.province?.trim() ?? "") !== "";

    if (emailMatch && passwordMatch && locationAndProvinceValid) {
      const newUser = {
        name: form.name,
        subname: form.subname,
        email: form.email,
        password: form.password,
        phone: "",
        location: form.location,
        province: form.province,
        postalCode: form.postalCode,
        country: "",
      };

      const isRegistered = registerUser(newUser);
      if (isRegistered) {
        navigate("/login");
      } else {
        alert("Este email ya está registrado.");
      }
    } else {
      alert("Por favor, completa el formulario correctamente.");
    }
  };

  return (
    <form
      className="flex flex-col w-full h-auto lg:min-h-screen space-y-2 items-start justify-center lg:justify-start lg:w-4/5 xl:w-4/6 lg:space-y-4"
      onSubmit={handleRegister}
    >
      <h3 className="uppercase text-tertiary font-semibold text-2xl md:text-3xl lg:text-4xl">
        registrarse
      </h3>
      <p className="text-tertiary text-base font-semibold ">
        Crea tu cuenta y encuentra a tu compañero ideal
      </p>
      <RegisterName
        name={form.name}
        subname={form.subname}
        onChange={handleChange}
      />
      <RegisterEmail
        email={form.email}
        confirmEmail={form.confirmEmail}
        onChange={handleChange}
        showError={form.email !== form.confirmEmail}
      />
      <RegisterPassword
        password={form.password}
        confirmPassword={form.confirmPassword}
        onChange={handleChange}
        showError={form.password !== form.confirmPassword}
      />
      <RegisterLocation
        location={form.location}
        province={form.province}
        onChange={handleChange}
      />
      <RegisterPostalCode
        postalCode={form.postalCode}
        onChange={handleChange}
      />
      <div className="flex items-center space-x-2 mt-2">
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          className="h-4 w-4"
          defaultChecked={false}
        />
        <Label htmlFor="rememberMe" title="Acepto los términos y condiciones" />
      </div>
      <div className="w-full md:w-1/2 space-y-4 lg:space-y-6">
        <Button
          label="Registrarse"
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
          label="Registrarse con Google"
          className="w-full py-2 text-black border-1 border-[#DADADA] font-semibold"
        />
        <Button
          icon={<FaFacebook className="size-6 text-blue-700" />}
          iconPosition="left"
          label="Registrarse con Facebook"
          className="w-full py-2 text-black border-1 border-[#DADADA] font-semibold"
        />
      </div>
    </form>
  );
};
