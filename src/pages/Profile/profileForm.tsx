import useAuthStore from "../../stores/useAuthStore";
import useUserStore from "../../stores/useUserStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/button/button";
import { AppRoutes } from "../../router/routes.model";
import { ProfileImage } from "./profileImage";
import { ProfileName } from "./profileName";
import { ProfileEmailPhone } from "./profileEmailPhone";
import { ProfilePassword } from "./profilePassword";
import { ProfileLocation } from "./profileLocation";
import { ProfileCountryPostalCode } from "./profileCountryPostalCode";

export const ProfileForm = () => {
  const navigate = useNavigate();
  const { user: authUser, logout } = useAuthStore();
  const { findUser, updateUser } = useUserStore();

  const [fullUser, setFullUser] = useState(() =>
    authUser ? findUser(authUser.email) : null
  );

  const buildForm = (auth: typeof authUser, full: typeof fullUser) => ({
    name: auth?.name || "",
    subname: full?.subname || "",
    email: auth?.email || "",
    phone: full?.phone || "",
    password: full?.password || "",
    confirmPassword: "",
    location: full?.location || "",
    province: full?.province || "",
    postalCode: full?.postalCode || "",
    country: full?.country || "",
  });

  const [form, setForm] = useState(buildForm(authUser, fullUser));

  useEffect(() => {
    if (authUser) {
      const found = findUser(authUser.email);
      setFullUser(found);
      if (found) {
        setForm({
          name: authUser.name,
          subname: found.subname,
          email: authUser.email,
          phone: found.phone || "",
          password: found.password || "",
          confirmPassword: "",
          location: found.location,
          province: found.province,
          postalCode: found.postalCode || "",
          country: found.country || "",
        });
      }
    }
  }, [authUser, findUser]);

  const showError =
    form.password !== form.confirmPassword && form.confirmPassword !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const updatedUser = {
      name: form.name,
      subname: form.subname,
      email: form.email,
      phone: form.phone,
      password: form.password,
      location: form.location,
      province: form.province,
      postalCode: form.postalCode,
      country: form.country,
    };

    const isUpdated = updateUser(updatedUser);
    if (isUpdated) {
      alert("Perfil actualizado correctamente");
    } else {
      alert("Error al actualizar el perfil");
    }
  };

  return (
    <div className="flex flex-col w-full px-2 py-2 h-auto lg:min-h-screen lg:w-4/6 space-y-2 lg:space-y-4 lg:py-8 lg:px-8 xl:px-12 xl:py-12">
      <ProfileImage />
      <ProfileName
        name={form.name}
        subname={form.subname}
        onChange={handleChange}
      />
      <ProfileEmailPhone
        email={form.email}
        phone={form.phone}
        onChange={handleChange}
      />
      <ProfilePassword
        password={form.password}
        confirmPassword={form.confirmPassword}
        onChange={handleChange}
        showError={showError}
      />
      <ProfileLocation
        location={form.location}
        province={form.province}
        onChange={handleChange}
      />
      <ProfileCountryPostalCode
        country={form.country}
        postalCode={form.postalCode}
        onChange={handleChange}
      />
      <div className="flex flex-col md:flex-row w-full mt-4 space-y-4 md:space-y-0 md:space-x-2 items-center justify-center md:justify-center md:items-center lg:space-x-4">
        <Button
          label="Guardar cambios"
          title="Guardar"
          type="button"
          onClick={handleSave}
          className="bg-primary py-3 text-white w-full"
        />
        <Button
          label="Cerrar sesión"
          title="Cerrar sesión"
          type="button"
          onClick={() => {
            logout();
            navigate(AppRoutes.LOGIN);
          }}
          className="bg-tertiary py-3 text-white w-full"
        />
      </div>
    </div>
  );
};
