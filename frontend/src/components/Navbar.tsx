import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-arround", gap: "20px"}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">Expenses</NavLink>
            <NavLink to="/add">Add Expense</NavLink>
        </nav>
    )
}