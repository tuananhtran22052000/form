import React from "react";
import classes from './Form.module.scss'

class Form extends React.Component{
    render(){
        return(
            <div className={classes.container}>
                <div className={classes.content}>
                    <label htmlFor="name">Tên:</label>
                    <input name="name" type='text' placeholder="nhập tên" />
                </div>
                <div className={classes.content}>
                    <label htmlFor="email">Tên:</label>
                    <input name="email" type='email' placeholder="nhập tên" />
                </div>
                <button> Gửi</button>
            </div>
        )
    }
}

export default Form