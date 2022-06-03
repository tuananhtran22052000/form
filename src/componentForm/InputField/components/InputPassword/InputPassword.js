import React,{useState} from 'react'
import classes from './InputPassword.module.scss'
import classNames from 'classnames'

import eye from '../../../icon/eye.svg'
import notEye from '../../../icon/notEye.svg'


const InputPassword = (props) =>{
    const {
        value,
        onChange,
        name,
        placeholder,
        paddingLeft,
        onKeyDown,
        src,
        width,
        height
    } = props


    const [inputType, setInputType] = useState('password')
    // const [inputDisabled, setInputDisabled] = useState=()

    const handleClickShow = () =>{
        setInputType(
            inputType ==='password' ? 'text' : 'password'
        )
    }
    return(
        <div className={classes.container}>
            <label className={classes.content}>
                {src && src ? <img src={src} alt='' className={classes.img} /> : <></>}
                <input 
                    style={{
                         paddingLeft: paddingLeft,
                         width: width,
                         height: height,
                    }}
                    className={classNames(classes.input)}
                    placeholder={placeholder}
                    type={inputType}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                        
                <div className={classes.showPass} onClick={handleClickShow}>
                    {inputType === 'password'
                        ?<>
                            <img src={notEye} alt="icon" className={classes.icon} />
                        </>
                        :<>
                            <img src={eye} alt="icon"  className={classes.icon}/>
                        </>
                    }
                </div>
            </label>
        </div>
    )
}

export default InputPassword