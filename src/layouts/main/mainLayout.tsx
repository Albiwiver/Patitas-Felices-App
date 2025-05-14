import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
