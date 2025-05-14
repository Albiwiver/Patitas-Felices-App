import { Routes, Route, Navigate } from "react-router-dom";
import { About } from "../pages/About/about";
import { Adopt } from "../pages/Adopt/adopt";
import { Profile } from "../pages/Profile/profile";
import { MainLayout } from "../layouts/main/mainLayout";
import { Login } from "../pages/Login/login";
import { Register } from "../pages/Register/register";
import { Home } from "../pages/Home/home";
import { Contact } from "../pages/Contact/contact";
import { AppRoutes } from "./routes.model";
import { ProtectedRoute } from "./protectedRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={AppRoutes.HOME} />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
        <Route path={AppRoutes.CONTACT} element={<Contact />} />
        <Route path={AppRoutes.ADOPT} element={<Adopt />} />
        <Route
          path={AppRoutes.PROFILE}
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path={AppRoutes.REGISTER} element={<Register />} />
      </Route>
      <Route path={AppRoutes.UNKNOWN} element={<Home />} />
    </Routes>
  );
};
