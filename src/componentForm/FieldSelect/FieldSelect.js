import React,{forwardRef} from "react";
import classes from './FieldSelect.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'


const FieldSelect = (props,ref) =>{
    const {
        height,
        width,
        placeholder,
        onChange,
        data,
        value,
        disabled
    } = props

  
    return(
        <div className={classes.container}>
            <div className={classes.content}
                style={{
                    height: height
                }}
            >
                <select className={classes.select} 
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    style={{
                        width: width,
                        height: height,
                    }}
                >
                    {placeholder ?<option selected disabled>{placeholder}</option> :<></>}
                    {data.map((item,key) =>(
                        <option 
                            className={classes.option}
                            key={key} 
                            value={item}
                        >
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}


FieldSelect.propTypes = {
        height: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        data: PropTypes.array.isRequired,
        value: PropTypes.string.isRequired,
}
export default forwardRef(FieldSelect)