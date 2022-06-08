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
        onClose,
        status,
        id,
        addonAfter,
        addonBefore,
        close
    } = props
    return(
        <div className={classes.container}>
            <label className={classes.content}>
            {src? <img src={src} alt='' className={classes.img} /> : <></>}
                        <p className={classes.text}>{addonAfter}</p>
                        <input 
                            style={{
                                paddingLeft: paddingLeft,
                            }}
                            className={classNames(classes.input,
                                status ==='warning' && classes.warning,
                                status === "error" && classes.error
                            )}
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
                        <p className={classes.text}>{addonBefore}</p>
                        {close && value 
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