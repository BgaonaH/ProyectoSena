import React from "react";
import MainCarrosel from "../componentes/navegacion/Home carrosel/MainCarrosel";
import HomeSectionCarrusel from "../componentes/navegacion/HomeSectionCarrusel/HomeSectionCarrusel";

const HomePage = () => {
    return (
      <div>
          <MainCarrosel/>
  
          <div className="space-y-10 py-20 flex flex-col justify-center">
              <HomeSectionCarrusel/>
              <HomeSectionCarrusel/>
              <HomeSectionCarrusel/>
              <HomeSectionCarrusel/>
              <HomeSectionCarrusel/>
          </div>
      </div>
    )
  }
  
  export default HomePage;