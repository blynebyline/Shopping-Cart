import Logo from "./Logo"

const Header = () => {
    return (
        <header className=" bg-zinc-100 px-4 py-2 flex font-roboto">
            <div className="flex items-center">
                <Logo></Logo>
                <h2>Hexternal</h2>
            </div>
        </header>
    )
}

export default Header