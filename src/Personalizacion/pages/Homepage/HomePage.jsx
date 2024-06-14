import React from "react";
import MainCarrosel from "../../componentes/Home carrosel/MainCarrosel";
import HomeSectionCarrusel from "../../componentes/HomeSectionCarrusel/HomeSectionCarrusel";
import { chicloso } from "../../Data/chicloso";
import { dulces } from "../../Data/dulces";
import { galletas } from "../../Data/galletas";


const HomePage = () => {
    return (
      <div>
          <MainCarrosel/>z
          <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
              <HomeSectionCarrusel className="text-lg font-medium text-gray-900 line-clamp-1" data={chicloso} sectionName={"Chiclosos"}/>
              <HomeSectionCarrusel data={dulces} sectionName={"Dulces duros"}/>
              <HomeSectionCarrusel data={chicloso}/>
              <HomeSectionCarrusel data={chicloso}/>
              
          </div>
          
      </div>
    )
  }
  
  export default HomePage;