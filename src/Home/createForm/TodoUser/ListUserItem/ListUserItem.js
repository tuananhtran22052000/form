import React,{useContext} from 'react'
import classes from './ListUserItem.module.scss'

import {listUsers} from '../../TodoUser/TodoUser'

const ListUserItem = () => {
    const user = useContext(listUsers)
    return(
        <div className={classes.container}>
            <table width={'100%'} border='1' cellPadding='1' cellSpacing='1'>
                <tr>
                    <th className={classes.title}>UserName</th>
                    <th className={classes.title}>password</th>
                </tr>
                <>
                {user && user.map((item,index) =>(
                        <tr key={index}> 
                                <td className={classes.text}>{item.UserName}</td>
                                <td className={classes.text}>{item.password}</td>
                        </tr>
                    ))}
                </>
            </table>
            
        </div>
    )
}
export default ListUserItem