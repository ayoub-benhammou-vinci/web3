import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
};
