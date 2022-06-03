import React from 'react'
import PropTypes from 'prop-types';

import InputPass from './components/InputPass'
import InputText from './components/inputText'

const TestPropType = (props) =>{
    const {
        type,
        text,
        number,
    } = props
    if(type === 'password'){
        return <InputPass {...props} />
    }else{
        return <InputText {...props}/>
    }
}
TestPropType.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    
}

export default TestPropType