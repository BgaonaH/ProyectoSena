import React, { useState, useRef, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarrusel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(5); // Estado para almacenar el número de elementos visibles

    const carouselRef = useRef(null);

    const items = data.slice(0, 10).map((item, index) => <HomeSectionCard key={index} product={item} />);

    // Función para manejar el desplazamiento hacia la izquierda
    const slidePrev = () => {
        setActiveIndex(activeIndex - 1 >= 0 ? activeIndex - 1 : 0);
        carouselRef.current.slidePrev();
    };

    // Función para manejar el desplazamiento hacia la derecha
    const slideNext = () => {
        setActiveIndex(activeIndex + 1 < items.length ? activeIndex + 1 : items.length - 1);
        carouselRef.current.slideNext();
    };

    // Efecto para calcular el número de elementos visibles en función del ancho de la ventana
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let itemsToShow = 5; // Valor predeterminado
            if (windowWidth < 1024) {
                itemsToShow = 3; // Si el ancho de la ventana es menor que 1024px, mostrar 3 elementos
            } else if (windowWidth < 720) {
                itemsToShow = +1; // Si el ancho de la ventana es menor que 720px, mostrar 1 elemento
            }
            setVisibleItems(itemsToShow);
        };

        window.addEventListener('resize', handleResize); // Escuchar eventos de cambio de tamaño de ventana

        // Limpieza del evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="border">
            <div className="relative p-5 border">
                <h2 className='text-lg font-medium text-gray-900 line-clamp-1'>{sectionName}</h2>
                <AliceCarousel
                    items={items}
                    responsive={{ 0: { items: 1 }, 720: { items: 3 }, 1024: { items: 5 } }}
                    disableButtonsControls
                    disableDotsControls
                    activeIndex={activeIndex}
                    ref={carouselRef}
                />
                {activeIndex !== items.length - 1 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: "absolute",
                            top: '8rem',
                            right: '0rem',
                            transform: "translate(50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
                {activeIndex !== 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: "absolute",
                            top: '8rem',
                            left: '0rem',
                            transform: "translate(-50%) rotate(-90deg)",
                            zIndex: 50,
                            bgcolor: "white",
                        }}
                        aria-label="prev"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarrusel;






