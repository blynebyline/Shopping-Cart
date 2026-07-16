import Logo from "./Logo"

const Header = () => {
    return (
        <header className=" bg-zinc-100 px-4 py-2 flex font-roboto justify-between items-center">
            <div className="flex items-center">
                <Logo></Logo>
                <h2>Hexternal</h2>
            </div>
            <div className="flex items-center gap-8 mx-10"> {/* MAKE IT SO THAT ONLY THIS WILL APPEAR ON MOBILE */}
                <p>Home</p>
                <p>Shop</p>
                <p>Cart</p>
            </div>
        </header>
    )
}

export default Header