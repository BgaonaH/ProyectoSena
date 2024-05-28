import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
//import '../../App.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3

     },
};

const items = [
    
    <div className="item" data-value="1"><img src="https://i.imgur.com/yg1jILy.jpg" role="presentation"/></div>,
    <div className="item" data-value="2"><img src="https://i.imgur.com/CIQQ1tf.png"/></div>,
    <div className="item" data-value="3"><img src="https://i.imgur.com/uqB124i.jpg"/></div>,
    <div className="item" data-value="4"><img src="https://i.imgur.com/T6trwx1.png"/></div>,
    <div className="item" data-value="5"><img src="https://i.imgur.com/Efb9oiY.png"/></div>,
];

const MainCarrosel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

export default MainCarrosel;