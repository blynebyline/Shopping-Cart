import { Outlet } from "react-router";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = () => {
    return(
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout