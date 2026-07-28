const Footer = () => {
    return (
        <footer>
            <FooterHead></FooterHead>
            <FooterMain></FooterMain>
        </footer>
    )
}

const FooterHead = () => {
    return (
        <header className="bg-purple-600 flex justify-between px-4 py-2" >
            <div>
                <p>Get connected to us on social networks</p>
            </div>
            <div>
                <p>HAHAHAHAHHA</p>
            </div>
        </header>
    )
}

const FooterMain = () => {
    return (
        <div className="bg-[#1d2331] text-white flex justify-between">
            <div className="m-8">
                <h2>Hexternal</h2>
                <hr />
                <p>We aim to provide the clothes that are timeless and elegant. Showcasing our passion for high-quality clothing and fashion.</p>
            </div>
            
        </div>
    )
}


export default Footer