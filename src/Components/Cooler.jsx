import React from 'react'
import obj from '../assets/products'


const Cooler = () => {
    return (
        <div className='py-5 md:pt-15 pt-10 px-6 md:px-20 lg:px-30 my-20
                        w-full overflow-hidden bg-[url("/src/assets/cooler.jpg")] bg-[position:20px_center] bg-cover md:h-90 max-w-[88rem] mx-auto 
                        md:rounded-2xl'>
            <h1 className="text-blue-600 md:text-3xl sm:text-4xl font-semibold shadow-black py-2 mt-4  ">CORSAIR LIQUID COOLERS</h1>
            <h2 className="text-blue-600 md:text-[25px] sm:text-[32px] font-semibold shadow-black mb-2 ">RAPID COOLING, BUILT TO LAST</h2>
            <p className="text-white font-light md:text-lg sm:text-sm pb-4">CORSAIR Liquid Coolers are renowned for their robust build quality<br />
                , cutting-edge performance, and gamer-centric features,
                making them a top choice for both enthusiasts <br />and professionals.</p>
           <button className ='text-white px-6 py-3 bg-blue-600 rounded-lg uppercase'>Browse Products</button>
        </div>
    )
}

export default Cooler
