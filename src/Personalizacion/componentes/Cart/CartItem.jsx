import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        {/* Sección de la imagen y detalles del producto */}
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img
            className='w-full h-full object-cover object-top'
            src='https://i.imgur.com/5len0cX.jpg'
            alt='Producto'
          />
        </div>
        <div className='ml-5 space-y-1 py-1 text-left'>
          <p className='font-semibold'>Turron Colombiano Artesanal</p>
          <p className='opacity-70'>Sin maní</p>
          <p className='opacity-70 mt-2'>Artesanal</p>

          {/* Sección de precios */}
          <div className='flex space-x-5 items-center text-gray-900 pt-1'>
            <p className='font-semibold'>$500</p>
            <p className='opacity-50 line-through'>$650</p>
            <p className='text-green-600 font-semibold'>23% off</p>
          </div>
        </div>
      </div>

      {/* Sección de cantidad debajo de los detalles del producto */}
      <div className='flex items-center space-x-2'>
        <IconButton
          onClick={decreaseQuantity}
          className='px-3 py-1 border border-gray-300 rounded-md focus:outline-none'
        >
          <RemoveCircleOutline/>
        </IconButton>
        <span className='py-1 px-7 border rounded-sm'>{quantity}</span>
        <IconButton
          onClick={increaseQuantity}
          className='px-3 py-1 border border-gray-300 rounded-md focus:outline-none'
        >
          <AddCircleOutline/>
        </IconButton>
        <Button>remove</Button>
      </div>
      
    </div>
  );
};

export default CartItem;
