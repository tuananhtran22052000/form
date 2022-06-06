import React from 'react'
import classes from './Switch.module.scss'
import classNames from 'classnames'

const Switch = (props) =>{
    const {
        title,
        checked,
        onChange,
        describe,
        height,
        width
    } = props;

    return(
        <div className={classes.container}>
            <div className={classes.row}>
                <p className={classes.title}>{title}</p>
                <label className={classes.switch}
                    style={{
                        width: width,
                        height: height,
                    }}
                >
                    <input type="checkbox" 
                        checked={checked} 
                        onChange={onChange}
                    />
                    <span 
                        className={classNames(classes.slider, classes.round, checked ===true ? classes.text : classes.textarea)}
                    >
                        {describe}
                    </span>
                </label>

            </div> 
        </div>
    )
}

export default Switch