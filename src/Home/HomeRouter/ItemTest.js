import React,{memo} from 'react'
import classes from '../HomeRouter/Default.module.scss'

const ItemTest = ({onHandleClick}) =>{
    console.log('re-render')
    return(
        <div className={classes.container}>
             <h5>HELLO WORD</h5>
             <button onClick={onHandleClick}>Click</button>
        </div>
    )
}

export default memo(ItemTest)