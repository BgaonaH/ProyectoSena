import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded lg-shadow lg-overflow-hidden w-[15rem] mx-3
    border border-black' >

    <div className='h-[13rem] w-[10rem]'>
        <img className ='object-cover object-top w-full h-full' src ="https://i.imgur.com/5len0cX.jpg" alt="Turrones" />
    </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Turrón</h3>
            <p className='mt-02 text-xs text-gray-500'>Turrón tradicional Colombiano</p>
        </div>
    </div>
  )
}

export default HomeSectionCard