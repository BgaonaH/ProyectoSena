import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import Button from '@mui/material/Button';  // Importar el botón correctamente
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Rotate90DegreesCwSharp } from '@mui/icons-material';

const HomeSectionCarrusel = () => {
    const [activeIndex,setActiveIndex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex= ({item})=>syncActiveIndex(item)
    const items = [1, 1, 1, 1, 1].map((item, index) => <HomeSectionCard key={index} />);  // Agregar una key única a cada elemento

    
    return (
        <div className="px-4 lg:px-8 border border-black">
            <div className="relative p-5 border">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-5 && <Button
                    variant="contained"
                    className="z-50 bg white"
                    onClick={slideNext}
                    sx={{
                        position: "absolute",
                        top: '8rem',
                        right: '0rem',
                        transform: "translate(50%) rotate(90deg)",
                        Index: 50,
                        bgcolor: "white",


                    }}

                    aria-label="next"

                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

                <Button
                onClick={slidePrev}
                    variant="contained"
                    className="z-50 bg white"
                    sx={{
                        position: "absolute",
                        top: '8rem',
                        left: '0rem',
                        transform: "translate(50%) rotate(90deg)",
                        Index: 50,
                        bgcolor: "white",


                    }}

                    aria-label="next"

                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(270deg)", color: "black" }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarrusel;
