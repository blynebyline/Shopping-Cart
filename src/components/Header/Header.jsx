import Logo from "./Logo"
import { Link } from "react-router"

const Header = () => {
    return (
        <header className=" bg-zinc-100 px-4 py-2 flex font-roboto justify-between items-center">
            <div className="flex items-center">
                <Logo></Logo>
                <h2>Hexternal</h2>
            </div>
            <div className="flex items-center gap-8 mx-10"> {/* MAKE IT SO THAT ONLY THIS WILL APPEAR ON MOBILE */}
                <Link to={"/"}>Home</Link>
                <Link to={"/shopping"}>Shop</Link>
                <Link to={"cart"}>Cart</Link>
            </div>
        </header>
    )
}

export default Header