import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </div>
    );
}
