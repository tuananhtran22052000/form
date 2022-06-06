import React,{useState} from 'react'
import classes from './InputField.module.scss'
import PropTypes from 'prop-types';

import InputPassword from './components/InputPassword'
import InputType from './components/InputType'
import InputFieldNumber from '../InputFieldNumber'
import InputSearch from '../InputSearch'
import FieldTextarea from '../FieldTextarea'

const InputField = (props) =>{
    const {
        type,
    } = props
    if(type === 'password'){
        return <InputPassword {...props} />
    }else if(type ==='number'){
        return <InputFieldNumber {...props}/>
    }else if(type ==='search'){
        return <InputSearch {...props}/>
    }else if(type ==='textarea'){
        return <FieldTextarea {...props}/>
    }else{
        return <InputType {...props} />
    }
}

InputField.propTypes = {
        type:PropTypes.string.isRequired,
        status:PropTypes.string.isRequired, // warning, error thì có border-color khác nhau
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        onKeyDown: PropTypes.func.isRequired,
        paddingLeft: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
    //input number
        numberMax: PropTypes.number.isRequired,
        numberMin: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
        notArrow: PropTypes.bool.isRequired, // true ẩn arrow tăng giản number
        onChangeSelect: PropTypes.func.isRequired,
        data: PropTypes.array.isRequired, // data map vao select
        currency: PropTypes.bool.isRequired, // true hiện select chọn loại tiền
        valueCurrency: PropTypes.string.isRequired, // loại tiền
    //input search
        mic: PropTypes.bool.isRequired, // true hiện icon mic
        search: PropTypes.bool.isRequired, // true hiện icon search
        titleSearch: PropTypes.string.isRequired, 
        brg: PropTypes.string.isRequired,
    //input textarea
        rows:PropTypes.number.isRequired,
        cols:PropTypes.number.isRequired,
        maxLength:PropTypes.number.isRequired,
        showCount: PropTypes.bool.isRequired,
}

export default InputField