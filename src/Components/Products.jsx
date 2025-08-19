import React from 'react'
import { MoveLeft, MoveRight } from 'lucide-react';
import { ProductsData } from '../assets/products';
import { useState, useEffect } from 'react'
import obj from '../assets/products.js'
import ProductCard from './Productcard.jsx';
import { motion } from 'framer-motion';

const Products = () => {

    const [currId, setCurrId] = useState(0);
    const [cards, setCards] = useState(1);

    useEffect(() => {
        function updateCards() {
            if (window.innerWidth >= 1024) {
                setCards(4); // Show 4 cards on desktop
            } else {
                setCards(1);
            }
        }
        updateCards();
        window.addEventListener('resize', updateCards);
        return () => {
            window.removeEventListener('resize', updateCards);
        };
    }, []);


    function next() {
        setCurrId((prevId) => {
            if (prevId >= ProductsData.length - cards) {
                return 0; // Loop back to start
            }
            return prevId + 1;
        });
    }

    function previous() {
        setCurrId((prevId) => {
            if (prevId <= 0) {
                return ProductsData.length - cards;
            }
            return prevId - 1;
        });
    }


    return (
        <div
            className='container py-5 pt-20 px-6 md:px-20 lg:px-30 my-20
                        w-full overflow-hidden bg-[url("/src/assets/bg.jpg")] bg-center bg-cover md:min-h-screen max-w-[90rem] mx-auto
                        md:rounded-2xl' id='category'
        >
            <h1 className="text-2xl sm:text-4xl 
      font-bold mb-2 text-center text-white">Shop by <span className='underline underline-offset-4
      decoration-1 font-light'> Category</span></h1>
            <p className='text-center text-white mb-8 mx-auto max-w-80'>Refine your gaming experience with these products</p>


            {/* Sliding buttons*/}
            <div className='flex items-center justify-center mb-8'>
                <button onClick={previous} className='p-3 bg-gray-200 rounder mr-2 hover:bg-gray-400' aria-label='Previous Products'>
                    <MoveLeft />
                </button>
                <button onClick={next} className='p-3 bg-gray-200 rounder mr-2 hover:bg-gray-400' aria-label='Next Products'>
                    <MoveRight />
                </button>
            </div>

            {/* Products sliding*/}
            <div className=''>
                <div className='flex gap-8 p-4 transition-transform duration-500 ease-in-out h-80 md:ml-[-1em]'
                    style={{ transform: `translateX(-${(currId * (100 / cards))}%)` }}
                >
                    {ProductsData.map((prod, idx) => (
                        <ProductCard key={idx}
                            img={prod.img}
                            name={prod.name}
                            description={prod.description} />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
