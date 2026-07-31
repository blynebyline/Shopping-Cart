import Logo from "./Logo"
import { HomeIcon, CartIcon, ShopIcon } from "./Logo"
import { Link } from "react-router"

const Header = () => {
    return (
        <header className="bg-zinc-100 px-4 py-2 flex font-roboto justify-center md:justify-between items-center">
            <div className="hidden md:flex items-center">
                <Logo></Logo>
                <h2>Hexternal</h2>
            </div>
            <div className="flex items-center gap-8 mx-10">
                <div className="header-icon">
                    <HomeIcon></HomeIcon>
                    <Link to={"/"}>Home</Link>
                </div>
                <div className="header-icon">
                    <ShopIcon></ShopIcon>
                    <Link to={"/shopping"}>Shop</Link>
                </div>
                <div className="header-icon"> 
                    <CartIcon></CartIcon>
                    <Link to={"cart"}>Cart</Link>
                </div>
            </div>
        </header>
    )
}

export default Header