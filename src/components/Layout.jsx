import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";


const Layout = () => {

    return (
        <div className={'h-full'}>
            <Header />
        </div>
    )
}

export default Layout