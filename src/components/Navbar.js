import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 800 : 400,
            color: isActive ? "rgb(137, 13, 253)" : "rgb(59, 14, 82)"
        }
    }
    return (
        <div>
            <nav>
                <NavLink style={navLinkStyles} to='/'>Home</NavLink>
                <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            </nav>
        </div>
    );
}
