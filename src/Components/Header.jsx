import React from 'react'
import Navbar from './navbar.jsx'
import products from '../assets/products.js'
import keyboard from '../assets/keyboard.jpg';
import { motion } from "framer-motion"


const Header = () => {
    return (
        <div className="min-h-screen mb-4 bg-cover bg-center flex 
         items-center overflow-hidden" 
        style={{ backgroundImage: `url(${products.keyboard})` }} id ='Header'>
            <Navbar />
            <motion.div 
            initial ={{opacity:0, y:100}} transition ={{duration: 1.2}} whileInView={{opacity:1, y:0}} viewport={{once: true}}
            className ='text-white text-center mx-auto px-8 py-4 md:px-20 lg:px-30'>
                <h2 className ="text-4xl sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-20 font-semibold">All the gaming related products can be found here</h2>
                <div className ="mt-15 space-x-6" >
                    <a href="#About" className ="cursor-pointer px-8 py-2 border border-white rounded text-xl">Lean More</a>
                    <a href ="#products" className ="cursor-pointer px-8 py-2 border bg-blue-400 border-blue-400 rounded text-xl">Explore</a>
                </div>
            </motion.div>
        </div>
    )
}

export default Header
