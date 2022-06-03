import React,{forwardRef} from 'react'
import classes from './FieldTextarea.module.scss'
import classNames from 'classnames'

const FieldTextarea = (props,ref) =>{
    const {
        rows,
        cols,
        maxLength,
        value,
        placeholder,
        onChange,
        showCount,
        status
    } = props
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <textarea 
                className={classNames(classes.textarea,
                    status ==='warning' && classes.warning,
                    status === "error" && classes.error    
                )}
                    rows={rows}
                    cols={cols}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    ref={ref}
                />
                {showCount && <p className={classes.showCount}>{`${value.length}`}/{maxLength}</p>}
            </div>
        </div>
    )
}
export default forwardRef(FieldTextarea)