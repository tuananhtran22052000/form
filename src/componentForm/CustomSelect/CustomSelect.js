import React,{useEffect, useState} from 'react'
import classes from './CustomSelect.module.scss'
import classNames from 'classnames'

import arrow from '../icon/arrow.svg'
import Box from '../icon/Box.svg'

const CustomSelect = (props) =>{
    const {
        data,
        dropTop
    } = props
                                              
    const [value, setValue] = useState('defaultValue')
    const [isToggle, setIsToggle] = useState(false)
   

    const HandleClick = () =>{
        setIsToggle(!isToggle)
        console.log(isToggle)
    }
    const HandleClickValue = (item) =>{
        setValue(item.title)
        setIsToggle(!isToggle)
    }


    return(
        <div className={classes.container}>
             <img src={arrow} alt='' className={classNames(classes.icon, isToggle===true ? classes.IconShow : classes.IconUnShow)}/>
            <div className={classes.ContentValue}
                onClick={HandleClick}
                value={value}
            >
                {value}
            </div>
            {data.length !==0
                ?<>
                    <div className={classNames(classes.content, isToggle===true ? classes.show : classes.unShow, dropTop && classes.showTop)}>
                        {data.map((item,key) =>(
                            <p 
                                className={classes.title} 
                                key={key}
                                onClick={() =>HandleClickValue(item)}
                            > {item.title}</p>
                        ))}     
                    </div>
                </>
                :<>
                    <div className={classNames(classes.contentNull, isToggle===true ? classes.show : classes.unShow,  dropTop && classes.showTop)}>
                        <div className={classes.row}>
                            <div className={classes.contentImg}>
                                <img src={Box} alt="" className={classes.iconBox} />
                            </div>
                            <p className={classes.title}>No Data</p>
                        </div>
                    </div>
                </>
            }
            
        </div>
    )
}
export default CustomSelect