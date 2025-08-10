
import React from "react";

export default function ProductCard({ img, name, description }) {
  return (
    <div className="relative flex-shrink-0 w-full sm:w-1/4 rounded-2xl 
    overflow-hidden shadow-xl hover:scale-105 transition-all 
    duration-300 ease-in h-80">
        
      <img src={img} alt={name} className="w-full mb-15" />
      <div className="absolute left-0 right-0 bottom-0 flex justify-center">
        <div className="inline-block bg-white/70 w-full backdrop-blur-md">
          <h2 className="text-xl font-semibold text-gray-800 px-4 py-2">{name}</h2>
          <p className="text-gray-800 px-2">{description}</p>
          <div className="px-4 pt-1 flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-4 cursor-pointer  hover:bg-blue-600 mb-2">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
