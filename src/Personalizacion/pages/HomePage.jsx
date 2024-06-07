import React from "react";
import MainCarrosel from "../componentes/navegacion/Home carrosel/MainCarrosel";
import HomeSectionCarrusel from "../componentes/navegacion/HomeSectionCarrusel/HomeSectionCarrusel";
import { chicloso } from "../../Data/chicloso";

const HomePage = () => {
    return (
      <div>
          <MainCarrosel/>
  
          <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
              <HomeSectionCarrusel className="text-lg font-medium text-gray-900 line-clamp-1" data={chicloso} sectionName={"Chiclosos"}/>
              <HomeSectionCarrusel data={chicloso} sectionName={"Dulces duros"}/>
              <HomeSectionCarrusel data={chicloso} sectionName={"Chocolate"}/>
              <HomeSectionCarrusel data={chicloso}/>
              <HomeSectionCarrusel data={chicloso}/>
              
          </div>
      </div>
    )
  }
  
  export default HomePage;