import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center  bg-white rounded-lg shadow-lg overflow-hidden w-[17rem] mx-0.5 
    border border-black' >

    <div className='h-[15rem] w-[10rem]'>
        <img className ='object-cover object-top w-full h-full bg-black' src ="https://i.imgur.com/32P8WoJ.png?1" alt="Turrones" />
    </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Turrón</h3>
            <p className='mt-02 text-ms text-gray-500'>Turrón tradicional Colombiano</p>
        </div>
    </div>
  )
}

export default HomeSectionCard