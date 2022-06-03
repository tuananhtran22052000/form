import React from 'react'
import classes from '../ListUserItem.module.scss'

const Item = ({item}) =>{
    return(
        <div>
            <div className={classes.row}>
                        <p className={classes.title}>UserName</p>
                        <p className={classes.text}>{item.UserName}</p>
                    </div>
                    <div className={classes.row}>
                        <p className={classes.title}>password</p>
                        <p className={classes.text}>{item.UserName}</p>
            </div>
        </div>
    )
}
export default Item