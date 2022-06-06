import React from 'react'
import classes from './InputNumber.module.scss'
import CustomInputNumber from '../CustomInputNumber'
import InputFieldNumber from '../CustomInputNumber'

const InputNumber  = (props) =>{
    const {
        type,
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
        height,
        status,
        minNumber,
        maxNumber,
        
  
    } = props;

    if(type === 'number'){
        return <CustomInputNumber {...props}/>
    }else if(type==='currency'){
        return <InputFieldNumber {...props}/>
    }
}

export default InputNumber