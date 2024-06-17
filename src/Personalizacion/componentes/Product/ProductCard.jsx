import React from 'react'
import './ProductCard.css'
const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursosr pointer p-1' >
        <div className='h-[20rem]  flex items-center justify-center'>
            <img className='h-[15rem] w-[13rem] object-cover object-center' 
            src={product.imageUrl} alt="" />
        </div>
        <div className='textPart bg-white p-2 '>
            <p className='font-bold opacity-60 '>{product.title}</p>
           {/*<p className=''>{product.brand} </p>*/}
        </div>
        <div className='textPart flex items-center space-x-2 p-2 pl-10'>
            <p className='font-semibold opacity-50'>&#36;{product.discountprice}</p>
            <p className='line-through opacity-50'>&#36;{product.price} </p>
            <p className='text-green-600 font-semibold'>{product.discountpersent}% off</p>
        </div>
    </div>
  )
}

export default ProductCard