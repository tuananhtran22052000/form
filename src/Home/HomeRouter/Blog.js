import React from 'react'
import classes from '../../style/Blog.module.scss'

import Car from '../components/Car'
import Slide from '../components/Car/Slide/Slide'

import Car2 from '../../video/Car.jpg'
import Car1 from '../../video/Car1.jpg'
import Car3 from '../../video/Car3.jpg'
import Car4 from '../../video/Car4.jpg'
import Car5 from '../../video/Car5.jpg'

const Cars = [{
    id: 1,
    img:Car1,
    name: 'car1',
    oldPrice: 20000,
    newPrice: 15000,
},{
    id: 2,
    img:Car2,
    name: 'car2',
    oldPrice: 200000,
    newPrice: 190000,
},{
    id: 3,
    img:Car3,
    name: 'car3',
    oldPrice: 30000,
    newPrice: 20000,
},{
    id: 4,
    img:Car4,
    name: 'car4',
    oldPrice: 50000,
    newPrice: 40000,
},{
    id: 5,
    img:Car5,
    name: 'car5',
    oldPrice: 100000,
    newPrice: 95000,
},{
    id: 6,
    img:Car1,
    name: 'car6',
    oldPrice: 20000,
    newPrice: 15000,
}]

const Blog = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.banner}>
                <img src={Car2} alt='img' className={classes.img} />
            </div>
            <p className={classes.title}>Xe ô tô:</p>
            <div className={classes.content}>
                {Cars.map((item,key) =>(
                    <div className={classes.contentItem}
                        key={item.id}
                    >
                        <Car item={item} />
                    </div>
                ))}
            </div>
            <div>
                <Slide Cars={Cars} />
            </div>
        </div>
    )
}

export default Blog