import React from 'react'
import './ProductCard.css'
const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursosr pointer p-1' >
        <div className='h-20rem'>
            <img className='h-[15rem] w-[13rem] object-cover object-left-top' 
            src="https://i.imgur.com/32P8WoJ.png?1" alt="" />
        </div>
        <div className='textPart bg-white  '>
            <p className='font-bold opacity-60 '>Moritas</p>
            <p className=''>Gomitas con sabor a mora y grageadas con azúcar
                marca italo </p>
        </div>
        <div className='textPart flex items-center space-x-2 pl-10'>
            <p className='font-semibold opacity-50'>29.683</p>
            <p className='line-through opacity-50'>38.550 </p>
            <p className='text-green-600 font-semibold'>23% off</p>
        </div>
    </div>
  )
}

export default ProductCard