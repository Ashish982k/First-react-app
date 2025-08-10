import React, { useEffect, useState } from 'react'
import products from '../assets/products.js'
import { X } from 'lucide-react';
import { Link } from "react-router-dom";



const Navbar = () => {

    const [useMenu, showUseMenu] = useState(false);

    function handleScroll() {
        if (useMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }
    useEffect(handleScroll, [useMenu]);

    return (
        <>
            <div className="fixed top-0 w-full left-0 z-10">
                <div className="container mx-auto flex items-center justify-between px-6 py-2 top-0 md:px-20 lg:px-30 md:bg-white/70">
                    <img src={products.logo} alt="" className="w-10 h-10" />
                    <ul className="hidden md:flex gap-7 text-gray-800 mx-auto">
                        <a href="#Header" className="cursor-pointer hover:text-blue-400">Home</a>
                        <a href="#About" className="cursor-pointer hover:text-blue-400">About us</a>
                        <a href="#category" className="cursor-pointer hover:text-blue-400">Products</a>
                        <a href="#contact" className="cursor-pointer hover:text-blue-400">Contact Us</a>
                    </ul>
                    <button className="hidden md:block px-8 py-2 bg-blue-400 rounded-full hover:bg-blue-600 text-white">Sign up</button>
                    <img src={products.menu_icon} alt="" className="md:hidden" onClick={() => showUseMenu(true)} />
                </div>
                {/*Mobile menu hai ye ` bhai */}

                <div
                    className={`md:hidden bg-white ${useMenu ? ' fixed w-full' : 'h-0 w-0'} top-0 right-0 
                    overflow-hidden bottom-0 transition-all`}>
                    <div className="flex justify-end p-6">
                        <X size={40} onClick={() => showUseMenu(false)} />
                    </div>
                    <ul className="flex flex-col items-center mt-top text-2xl font-medium">
                        <a onClick={() => showUseMenu(false)} href="#Header" className="px-6 py-5 inline-block">Home</a>
                        <a onClick={() => showUseMenu(false)} href="#About" className="px-6 py-5 inline-block">About us</a>
                        <a onClick={() => showUseMenu(false)} href="#category" className="px-6 py-5 inline-block">Products</a>
                        <a onClick={() => showUseMenu(false)} href="#contact" className="px-6 py-5 inline-block">Contact Us</a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
