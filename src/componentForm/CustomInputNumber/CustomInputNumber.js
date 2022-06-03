import React,{useState, useEffect} from 'react'
import classes from './CustomInputNumber.module.scss'
import classNames from 'classnames'

import downArrow from '../icon/downArrow.png'

const CustomInputNumber = (props) =>{
    const{
        placeholder,
        notArrow,
        minNumber,
        maxNumber,
        step,
    } = props

    const [number, setNumber] = useState(0)

    const HandleChange = (e) =>{
        setNumber(e.target.value)
    }

    const handleClickUp = () =>{
        setNumber( number + step)
    }

    const handleClickDown = () =>{
        if(number === 0){
            setNumber(0)
        }else{
            setNumber(number - step)
        }
    }
    useEffect(()=>{
        console.log('aaa')
    },[number])
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <input 
                    type={'number'} 
                    className={classNames(classes.input,
                        notArrow && classes.inputPbr
                    )}
                    min={minNumber} 
                    max={maxNumber}
                    placeholder={placeholder}
                    onChange={HandleChange}
                    value={number}
                />
                {notArrow 
                    ?<></>
                    :<>
                        <div className={classes.contentRow}>
                            <div className={classes.arrow}
                                onClick={handleClickUp}
                            >
                                <img src={downArrow} alt="" className={classNames(classes.icon, classes.iconUp)} />
                            </div>
                            <div className={classes.arrow}
                                onClick={handleClickDown}
                            >
                                <img src={downArrow} alt="" className={classes.icon} />
                            </div>
                        </div>
                    </>
                }
            </div>
            
        </div>
    )
}
export default CustomInputNumber