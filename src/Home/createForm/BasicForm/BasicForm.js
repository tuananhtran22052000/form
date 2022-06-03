import React,{useRef,useState} from 'react'
import classes from './BasicForm.module.scss'

import user from '../../../video/user.png'
import padlock from '../../../video/padlock.png'
import close from '../../../componentForm/icon/close.svg'


import InputField from '../../../componentForm/InputField'


const BasicForm = () =>{
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const RefInput = useRef()

    const HandleChangeUserName = (e) =>{
        setUserName(e.target.value);
    }
    const HandleChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const HandleSubmit = () => {
       if(!userName|| !password){
            return alert('nhập đầy đủ useName và Password')
       }
       setUserName('')
       setPassword('')
        console.log('useName:', userName)
        console.log('PassWord:',password)
    }

    const HandelEnter = (e) =>{
        if(e.keyCode === 13 && userName && password){
            setUserName('')
            setPassword('')
            console.log('useName:', userName)
            console.log('PassWord:',password)
        }else{
            return 
        }
    }
    const HandleClose = ()=>{
        setUserName('')
    }
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.row}>
                    <label className={classes.label}>useName:</label>
                   
                    <InputField 
                        type="text" 
                        placeholder='nhập useName' 
                        value={userName}
                        onChange={HandleChangeUserName}
                        src={user}
                        // onKeyDown={HandelEnterDown}
                        srcClearAll={close}
                        onClose={HandleClose}
                        status={'error'}
                    />
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>PassWord:</label>
                    <InputField 
                       type={'password'}
                        placeholder={'nhập PassWord' }
                        value={password}
                        onChange={HandleChangePassword}
                        src={padlock}
                        onKeyDown={HandelEnter}
                    />
                </div>
                <div className={classes.row}>
                <input type="checkbox"  name="vehicle1" value="Remember me" />
                <label htmlFor="vehicle1" className={classes.text}>Remember me</label>
                </div>
                
                <button onClick={HandleSubmit} className={classes.btn}>Submit</button>
            </div>

        </div>
    )
}
export default BasicForm