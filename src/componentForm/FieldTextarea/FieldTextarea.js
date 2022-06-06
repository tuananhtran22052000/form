import React,{forwardRef, useEffect} from 'react'
import classes from './FieldTextarea.module.scss'
import classNames from 'classnames'
import close from '../icon/close.svg'

const FieldTextarea = (props,ref) =>{
    const {
        rows,
        cols,
        maxLength,
        value,
        placeholder,
        onChange,
        showCount,
        status,
        width,
        height,
        onClick,
        onClear,
    } = props

    const handleKeyDown =(e) =>{
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
        console.log(e.target)
    }

    return(
        <div className={classes.container}>
            <div className={classes.content}
                 style={{
                    width: width,
                    height: height,
                }}>
                <textarea 
                    rows={rows}
                    cols={cols}
                    className={classNames(classes.textarea,
                        status ==='warning' && classes.warning,
                        status === "error" && classes.error    
                    )}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onClick={onClick}
                    onKeyDown={handleKeyDown}
                    ref={ref}
                />
                {showCount && <p className={classes.showCount}>{`${value.length}`}/{maxLength}</p>}
                { value 
                    ? <img src={close}  
                        alt='' className={classes.imgClose} 
                        onClick={onClear}
                        /> 
                    : <></>
                }
            </div>
        </div>
    )
}
export default forwardRef(FieldTextarea)