import React from 'react'
import classes from './InputType.module.scss'
import classNames from 'classnames'

import close from '../../../icon/close.svg'

const InputType = (props) =>{
    const {
        src,
        paddingLeft,
        placeholder,
        type,
        min,
        max,
        step,
        name,
        value,
        onChange,
        onKeyDown,
        onClose
    } = props
    return(
        <div className={classes.container}>
            <label className={classes.content}>
            {src? <img src={src} alt='' className={classes.img} /> : <></>}
                        <input 
                            style={{
                                paddingLeft: paddingLeft,
                            }}
                            className={classNames(classes.input)}
                            placeholder={placeholder}
                            type={type}
                            min={min}
                            max={max}
                            step={step}
                            name={name}
                            value={value}
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                        />
                        { value 
                            ? <img src={close}  
                                alt='' className={classes.imgClose} 
                                onClick={onClose}
                             /> 
                            : <></>
                        }
            </label>
        </div>
    )
}

export default InputType