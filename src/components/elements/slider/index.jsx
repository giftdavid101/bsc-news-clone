import React from 'react';
import './slider.style.css';
import Carousel from 'nuka-carousel';
const adData = [
    {
        id: 1,
        topText: '',
        image:
            'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d98db3291d92800fcb215_justliquidity-p-800.jpeg',
        bottomText: '',
    },
    {
        id: 2,
        topText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nobis quo vero?\n',
        image:
            'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d959ec80c0d81310635c1_venus%20tutorial-p-800.jpeg',
        bottomText: 'bottom',
    },
    {
        id: 3,
        topText: '',
        image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/5fd2eb87121e8752bb9fa85a_gfg.jpg',
        bottomText: '',
    },
    { id: '', topText: '', image: '', bottomText: '' },
];

const Slider = () => {
    return (
        <div className={'slider'}>
            <Carousel>
                {adData.map((el) => (
                    <div className={'slider__content'} key={el.id}>
                        <img src={el.image} alt="" />
                        <div className="top-text">{el.topText}</div>
                        <div className="bottom-text">{el.bottomText}</div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
