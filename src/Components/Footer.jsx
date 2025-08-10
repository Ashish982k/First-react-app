import React from 'react'
import obj from '../assets/products'

const Footer = () => {
    return (
        <div className="pt-10 px-4 md:px-20 lg:px-30 w-full
    bg-gray-900 overflow-hidden" id='footer'>
            <div className='container mx-auto flex flex-col
       md:flex-row items-start justify-between'>
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img src={obj.logo} alt="" className="h-15 w-15" />
                    <p className='text-gray-400 mt-2'>Harami ho tum log</p>
                </div>
                <div className='w-full mb-8 md:mb-0 md:w-1/5'>
                    <h3 className="text-white text-lg mb-4 uppercase font-medium">Peripherals brand</h3>
                    <ul className='flex flex-col'>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>Razer</a>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>Logitech</a>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>HyperX</a>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>CosmicByte</a>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>AntEsports</a>
                    </ul>
                </div>
                <div className='w-full mb-8 md:mb-0 md:w-1/3'>
                    <h3 className="text-white text-lg mb-4 uppercase font-medium">pc builds</h3>
                    <ul className='flex flex-col items-start'>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>Gaming & Streaming PC</a>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>Music Production PC</a>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>3D Modelling PC</a>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>VFX Animation PC</a>
                        <a href="" className='text-gray-200 hover:underline font-light
                mb-2'>Graphic Designing PC</a>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='flex flex-col mb-8 md:mb-0 w-full md:w-1/3'>
                    <h3 className="text-white text-lg mb-4 uppercase font-medium">navigation</h3>
                    <a href="#Header" className='text-gray-200 hover:underline font-light mb-2'
                    >Home</a>
                    <a href="#About" className='text-gray-200 hover:underline font-light mb-2'
                    >About Us</a>
                    <a href="#category" className='text-gray-200 hover:underline font-light mb-2'
                    >Products</a>
                    <a href="#contact" className='text-gray-200 hover:underline font-light mb-2'
                    >Contact</a>
                </ul>
            </div>
            <div className ='border-t border-gray-400 text-center text-white py-5 mt-10'>
                VEdant saale kamine. Salunke tu bhi harami hai
            </div>
        </div>
    )
}

export default Footer
