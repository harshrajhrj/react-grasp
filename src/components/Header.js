import logo from "../logo192.png";
import user from "../user-logo.png";

function Header() {
    return (
        <section className="Header">
            <div className="header-icon">
                <div className="header-body">
                    <img src={logo} />
                    <a href="/">Home</a>
                </div>
            </div>
            <div className="user-icon"><img src={user} /></div>
        </section>
    )
}

export default Header