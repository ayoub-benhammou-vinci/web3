import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  return (
    <div className="bg-green-800 p-5">
      <nav className="flex text-white flex-row justify-center gap-20 shadow-black">
        <NavLink to="/" className={location.pathname == "/" ? "font-bold" : ""}>
          Home
        </NavLink>
        <NavLink to="/list" className={location.pathname == "/list" ? "font-bold" : ""}>Expenses</NavLink>
        <NavLink to="/add" className={location.pathname == "/add" ? "font-bold" : ""}>Add Expense</NavLink>
      </nav>
    </div>
  );
};
