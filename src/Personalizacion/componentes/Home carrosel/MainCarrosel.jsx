import React from 'react';
import { mainCarroselData } from './MainCarroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 }
};
const MainCarrosel = () => {

  const items = mainCarroselData.map((item) => <img className='cursor-pointer -z-50'
    role='presentation' src={item.image} alt="" />)
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
      responsive={responsive}
      

    />
  )
}

export default MainCarrosel