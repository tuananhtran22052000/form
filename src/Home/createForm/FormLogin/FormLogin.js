import React, { useState } from 'react'
import classes from './FormLogin.module.scss'

import user from '../../../video/user.png'
import padLock from '../../../video/padlock.png'
import InputField from '../../../componentForm/InputField'


import close from '../../../componentForm/icon/close.svg'

const FormLogin = ({title}) =>{
    const [userName, setUserName] = useState("")

    const HandleChange = (e) =>{
        setUserName(e.target.value)
    }
    const HandleClose = () =>{
        setUserName("")
    }
    return(
        <div className={classes.container}>
            <p className={classes.title}>{title}</p>
            <div className={classes.content}>
                <div className={classes.row}>
                   <InputField 
                        h40
                        placeholder='UserName'
                        src={user}
                        value={userName}
                        onChange={HandleChange}
                        srcClearAll={close}
                        onClose={HandleClose}
                   />
                </div>
                <div className={classes.row}>
                   <InputField 
                        placeholder='password'
                        status={'password'}
                        h40
                        src={padLock}
                   />
                </div>
            </div>
            <div className={classes.contentBtn}>
                <button className={classes.btn}>{title}</button>
            </div>
            
        </div>
    )
}

export default FormLogin