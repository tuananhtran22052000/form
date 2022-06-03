import React from 'react'
import Slider from 'react-slick'
import classes from '../../../../style/Style.module.scss'

import Car from '../Car'


const Slide = ({Cars}) =>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <div class={'display:flex'} >
            <Slider {...settings}>
                {Cars.map((item,key) =>(
                    <div 
                        key={item.id}
                    >
                        <Car item={item} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default Slide