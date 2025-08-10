import React from 'react'
import products from '../assets/products.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div initial ={{opacity:0, x:200}} transition ={{duration: 1}} whileInView={{opacity:1, x:0}} viewport={{once: true}}
     className="flex flex-col justify-center items-center 
    container mx-auto p-14 md:px-20 lg:px-30" id='About'>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span
        className="underline underline-offset-4 decoration-1 font-light">This site</span></h1>
      <p className="text-center text-gray-500 max-w-80 mb-8">Dedicated to gamers who love clean setups with affordable prices</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={products.pc} alt="" className="w-full sm:w-1/2 max-w-lg rounded-t-full" />
        <div className='flex flex-col items-center
             md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-7 md:gap-10 w-full 2xl:pr-28'>
            <div >
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Famous companies available</p>
            </div>
            <div >
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p>Millions of Users</p>
            </div>

          </div>
          <p
            className='my-10 max-w-lg'>Saalo kabhi kuch madat bhi kar diya karo. Bas Repo
            bana ke kuch nahi hota bhadwo
          </p>
          <button className='bg-blue-400 text-white px-8 py-4 rounded cursor-pointer'>Learn More</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
