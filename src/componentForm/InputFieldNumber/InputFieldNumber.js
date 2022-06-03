import React from 'react'
import classes from './InputFieldNumber.module.scss'
import classNames from 'classnames'

import FieldSelect from '../../componentForm/FieldSelect'
import SelectDropdown from '../../componentForm/SelectDropdown'

const InputFieldNumber = (props) =>{
    const {
        placeholder,
        value,
        onChange,
        numberMin,
        numberMax,
        step,
        notArrow,
        name,
        data,
        onChangeSelect,
        currency,
        valueCurrency,
        paddingLeft,
        width,
        height
    } = props


    return(
        <div className={classes.container}>
            <div className={classNames(classes.row)}>
                <input 
                   className={classNames(
                       classes.input,
                       notArrow && classes.notArrow,
                    )}
                    style={{
                        paddingLeft: paddingLeft,
                        width: width,
                        height: height,
                    }}
                    type={'number'}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    min={numberMin}
                    max={numberMax}
                    step={step}
                />
                
                {currency === true 
                ?<> 
                    <p className={classes.contentCurrency}>{valueCurrency}</p>
                    <div className={classes.content}>
                        <select className={classes.select}
                            onChange={onChangeSelect}
                        >
                            <option  disabled value={0}>money</option>
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
                </>
                : <></> 
            }
            </div>
        </div>
    )
}

export default InputFieldNumber