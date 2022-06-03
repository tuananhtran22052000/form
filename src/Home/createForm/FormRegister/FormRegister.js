import React, { useState } from "react";
import  classes from './FormRegister.module.scss'

import user from '../../../video/user.png'
import padLock from '../../../video/padlock.png'

import InputField from '../../../componentForm/InputField'


const FormRegister = () => {
    const [input, setInput] = useState([{
        username: '',
        password: '',
        confirmPassword: ''
    }])
    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      })
    // onChange nhiều input
      const onInputChange = (e) => {
          const {name, value} = e.target;
          setInput( prev =>({
              ...prev,[name]: value
          }))
          validateInput(e)
      }

    const validateInput = (e) => {
        let {name, value} = e.target;
        setError(
            prev =>{
                const stateObj = { ...prev, [name]: "" };
                switch(name){
                    case 'username':
                        if (!value) {
                            stateObj[name] = "Vui lòng nhập Username.";
                        }
                    break
                    case 'password':
                        if (!value) {
                            stateObj[name] = "Vui lòng nhập Password.";
                          } else if (input.confirmPassword && value !== input.confirmPassword) {
                            stateObj["confirmPassword"] = "Mật khẩu và Xác nhận Mật khẩu không khớp.";
                          } else {
                            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                          }
                    break;
                   
                    case "confirmPassword":
                          if (!value) {
                            stateObj[name] = "Vui lòng nhập Xác nhận password";
                          } else if (input.password && value !== input.password) {
                            stateObj[name] = "nhập lại password không đúng";
                          }
                    break;
                    default:
                    break ;  
                }
                return stateObj;
            }
        )
    }
    const HandleSubmit = () =>{
        console.log(input)
    }
    return(
        <div className={classes.container}>
            <h2 className={classes.title}>REGISTER</h2>
            <div className={classes.content}>
                <div className={classes.row}>
                        <label className={classes.label}>useName:</label>
                        <InputField 
                            type="text" 
                            placeholder='nhập useName' 
                            name="username"
                            value={input.username}
                            onChange={onInputChange}
                            onBlur={validateInput}
                            height={'40px'}
                            src={user}
                        />
                        {error.username && <span className={classes.error}>{error.username}</span>}
                </div>
                <div className={classes.row}>
                        <label className={classes.label}>PassWord:</label>
                        <InputField 
                            type="text" 
                            placeholder='nhập PassWord'
                            name="password" 
                            className={classes.input}
                            value={input.password}
                            onChange={onInputChange }
                            onBlur={validateInput}
                            height={'40px'}
                            status={true}
                            src={padLock}
                        />
                        {error.password && <span className={classes.error}>{error.password}</span>}                        
                </div>
                <div className={classes.row}>
                        <label className={classes.label}>Confirm Password:</label>
                        <InputField 
                            type="text" 
                            placeholder='Confirm Password' 
                            name="confirmPassword"
                            className={classes.input}
                            value={input.confirmPassword}
                            onChange={onInputChange }
                            onBlur={validateInput}
                            height={'40px'}
                            status={true}
                            src={padLock}
                        />
                        {error.confirmPassword && <span className={classes.error}>{error.confirmPassword}</span>}
                        
                </div>
            </div>
            <div className={classes.contentBtn}>
                <button className={classes.btn} onClick={HandleSubmit}>Register</button>
            </div>
       
        </div>
    )
}

export default FormRegister