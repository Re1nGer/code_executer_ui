import React, {useEffect, useState} from 'react'
import {Link, Outlet} from "react-router-dom";
import HeaderIcon from "../icons/HeaderIcon.svg?react";
import SignUpModal from "@/components/SignUpModal.jsx";
import { AnimatePresence, motion, animate } from "framer-motion";

const Header = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const [isProductMenuOpen, setIsProductMenuOpen] = React.useState(false)

    const [rotate, setRotate] = useState(0)

    const [sign, setSign] = useState(false)
    const handleOnMouseOver = (e) => {
        e.stopPropagation()
        setIsProductMenuOpen(true)
    }

    const handleOnLogoHover = () => {
        animate("#header_logo", { rotate: sign ? `-${rotate % 120}deg` : `${rotate % 120}deg`,  duration: 1 } )
        setRotate((rotate + 45) % 120)
        setSign(prevState => !prevState)
    }

    useEffect(() => {
        animate("#header_logo", { rotate: `45deg`,  duration: 1 } )
    }, [])

    return (
            <header className={'h-[540px] bg-gradient-to-r from-[#02203c] to-[#001528] flex flex-col'} onMouseMove={() => setIsProductMenuOpen(false)}>
                <div className={'mx-[20px] py-[30px] flex justify-center items-center relative'}>
                    <Link to={'/'}>
                        <div className={'w-[290px] flex flex-col gap-[10px] text-center'}>
                            <div className={'flex items-center justify-center text-white gap-[15px]'}>
                                <HeaderIcon id={'header_logo'} className={'max-w-[48px] max-h-[40px]'} onMouseEnter={handleOnLogoHover} />
                                <h1 className={'text-[36px] font-jura'}>AlgoExpert</h1>
                            </div>
                            <div className={'text-[#8d96eb] font-bold font-jura text-[18px]'}>Ace the Technical Interviews</div>
                        </div>
                    </Link>
                    <div className={'w-[150px]'}></div>
                    <nav className={'flex relative mx-[55px] gap-[30px] h-full items-start font-open_sans text-[14px] text-white'}
                         onMouseMove={(e) => e.stopPropagation() }>
                        <div onMouseOver={handleOnMouseOver} className={'bg-transparent relative nav__link'}>Products</div>
                        <div className={'bg-transparent relative nav__link'}>Content</div>
                        <div className={'bg-transparent relative nav__link'}>Team</div>
                        <div className={'bg-transparent font-bold relative italic nav__link'}>Purchase</div>
                    </nav>
                    <div className={'w-[150px]'}></div>
                    <div className={'flex-1 max-w-[290px] items-start h-full flex justify-start'}>
                        <button className={'flex justify-center items-center' +
                            ' text-white font-[14px] font-open_sans hover:border-[#626ee3] rounded-sm' +
                            ' border-2 border-transparent transition-colors px-[8px] py-[5px]'} onClick={() => setIsModalOpen(true)}>Log In</button>
                    </div>
                </div>
                <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                <ProductMenu isOpen={isProductMenuOpen} onClose={() => setIsProductMenuOpen(false)} />
                <Outlet />
            </header>
    )
}

const ProductMenu = ({ isOpen, onClose }) => {
    return <AnimatePresence>
            { isOpen ?
                <motion.section
                   initial={{ scale: 0.5 }}
                   animate={{ scale: 1 }}
                   className={'absolute bg-white mt-[65px] rounded-[6px] max-w-[580px] mx-auto left-[540px] shadow-[0_0_40px_5px_rgba(0,0,0,.5)]'}
                   onMouseMove={(e) => e.stopPropagation()}
                >

            <div className={'p-[10px] relative rounded-[4px] grid grid-cols-2 gap-3 product__menu'}>
                <Link to={'/'} className={'p-[15px] bg-white text-[#02203c] rounded-[4px] max-w-[275px] w-full hover:bg-[#626ee3] hover:text-white cursor-pointer'}>
                    <div>
                        <h3 className={'text-[18px] font-bold font-open_sans'}>AlgoExpert</h3>
                        <p>Ace the coding interviews</p>
                    </div>
                </Link>
                <Link to={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#890023] cursor-pointer'}>
                    <div>
                        <h3 className={'text-[18px] font-bold font-open_sans'}>SystemsExpert</h3>
                        <p>Ace the system design interviews</p>
                    </div>
                </Link>
                <Link to={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#11967e] cursor-pointer'}>
                    <div>
                        <h3 className={'text-[18px] font-bold font-open_sans'}>FrontendExpert</h3>
                        <p>Ace the frontend interviews</p>
                    </div>
                </Link>
                <Link to={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] w-full hover:text-white hover:bg-[#2c85cd] cursor-pointer'}>
                    <div>
                        <h3 className={'text-[18px] font-bold font-open_sans'}>InfraExpert</h3>
                        <p>Ace the infrastructure interviews</p>
                    </div>
                </Link>
                <Link to={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#f21b3f] cursor-pointer'}>
                    <div>
                        <h3 className={'text-[18px] font-bold font-open_sans'}>ProgrammingExpert</h3>
                        <p>Learn to code</p>
                    </div>
                </Link>
                <Link to={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#bb20dd] cursor-pointer'}>
                    <div>
                        <h3 className={'text-[18px] font-bold font-open_sans'}>BlockchainExpert</h3>
                        <p className={'whitespace-nowrap'}>Learn blockchain development</p>
                    </div>
                </Link>
                <Link to={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#f37f1b] cursor-pointer'}>
                    <div>
                        <h3 className={'text-[18px] font-bold font-open_sans whitespace-nowrap text-nowrap'}>MLExpert</h3>
                        <p className={'text-nowrap'}>Ace the machine learning interviews</p>
                    </div>
                </Link>
            </div>
        </motion.section> : null }
    </AnimatePresence>
}

export default Header