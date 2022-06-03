import React from 'react'
import classes from './Car.module.scss'

const Car = ({item}) =>{
    
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <img src={item.img} alt='img' className={classes.img} />
                <p className={classes.title}>{item.name}</p>
                <div className={classes.contentRow}>
                    <div className={classes.row}>
                        <p className={classes.newPrice}>new price:</p>
                        <p className={classes.price}>{item.newPrice} USD</p>
                    </div>
                        <p className={classes.oldPrice}>old price:<span>{item.oldPrice} USD</span></p>
                </div>
            </div>
        </div>
    )
}

export default Car