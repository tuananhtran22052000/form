import React from 'react'
import classes from './ListUser.module.scss'
import ListUserItem from '../ListUserItem'

const ListUser = () => {
    return(
        <div className={classes.container}>
            <p className={classes.title}>ListUser</p>
            <div className={classes.content}>
                <ListUserItem />
            </div>
        </div>
    )
}

export default ListUser