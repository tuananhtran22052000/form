import React,{forwardRef} from 'react'
import classes from './FieldTextarea.module.scss'

const FieldTextarea = (props,ref) =>{
    const {
        rows,
        cols,
        maxLength,
        value,
        placeholder,
        onChange,
        showCount
    } = props
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <textarea 
                className={classes.textarea}
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