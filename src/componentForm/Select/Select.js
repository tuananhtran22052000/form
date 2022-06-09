import React from 'react'
import PropTypes from 'prop-types';

import CustomSelect from '../CustomSelect'
import SelectDropdown from '../SelectDropdown'

const Select = (props) =>{
    const {
        multiple
    } = props
    if(!multiple){
        return <CustomSelect {...props}/>
    }else{
        return <SelectDropdown {...props}/>
    }
}

Select.propTypes = {
    data: PropTypes.array.isRequired,
    multiple: PropTypes.bool.isRequired,
    // customSelect
    // dropTop: PropTypes.bool.isRequired,
    // selectDropdown
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}
export default Select