import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

export const Navbar = () => {
    const auth = useAuth();
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 800 : 400,
            color: isActive ? "rgb(137, 13, 253)" : "rgb(59, 14, 82)"
        }
    }
    return (
        <div>
            <nav className="primary-nav">
                <NavLink style={navLinkStyles} to='/'>Home</NavLink>
                <NavLink style={navLinkStyles} to='/about'>About</NavLink>
                <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
                <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
                {!auth.user && (
                    <NavLink to='/login' style={navLinkStyles}>
                        Login
                    </NavLink>
                )}
            </nav>
        </div>
    );
}
