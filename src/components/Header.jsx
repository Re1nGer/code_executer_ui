import React from 'react'
import { Outlet, useLocation } from "react-router-dom";
import SignUpModal from "@/components/SignUpModal.jsx";
import ProductMenu from "@/components/ProductMenu.jsx";
import HeaderLogo from "@/components/HeaderLogo.jsx";
import LogInButton from "@/components/LogInButton.jsx";
import Product from "@/pages/Product.jsx";
import Questions from "@/pages/Questions.jsx";



const Header = () => {

    const location = useLocation()

    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const [isProductMenuOpen, setIsProductMenuOpen] = React.useState(false)

    const handleOnMouseOver = (e) => {
        e.stopPropagation()
        setIsProductMenuOpen(true)
    }
    const renderHeaderComponent = () => {
        switch (location.pathname) {
            case "/product":
                return <Product />
            case "/questions":
                return <Questions />
            default:
                return <Product />
        }
    }

    return (
            <header className={'h-[540px] bg-gradient-to-r from-[#02203c] to-[#001528] flex flex-col'}
                    onMouseMove={() => setIsProductMenuOpen(false)}>
                <div className={'mx-[20px] py-[30px] flex justify-center items-center relative'}>
                    <HeaderLogo />
                    <div className={'w-[150px]'}></div>
                    <nav
                        className={'flex relative mx-[55px] gap-[30px] h-full items-start font-open_sans text-[14px] text-white'}
                        onMouseMove={(e) => e.stopPropagation()}>
                        <div onMouseOver={handleOnMouseOver} className={'bg-transparent relative nav__link'}>Products</div>
                        <div className={'bg-transparent relative nav__link'}>Content</div>
                        <div className={'bg-transparent relative nav__link'}>Team</div>
                        <div className={'bg-transparent font-bold relative italic nav__link'}>Purchase</div>
                    </nav>
                    <div className={'w-[150px]'}></div>
                    <div className={'flex-1 max-w-[290px] items-start h-full flex justify-start'}>
                        <LogInButton onClick={() => setIsModalOpen(true)}/>
                    </div>
                </div>
                <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
                <ProductMenu isOpen={isProductMenuOpen} onClose={() => setIsProductMenuOpen(false)}/>
{/*
                { renderHeaderComponent() }
*/}
                <Outlet />
            </header>
    )
}


export default Header