import React from "react";
import classes from './FormInputNumber.module.scss'

import  InputNumber  from "../../../componentForm/InputNumber";
import CustomSelect from '../../../componentForm/CustomSelect'


const data =[{
    id: 1,
    title: 'title1'
},{
    id: 2,
    title: 'title2'
},{
    id: 3,
    title: 'title3'
},{
    id: 4,
    title: 'title4'
}]
const FormInputNumber = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <InputNumber 
                        type={"number"}
                        step={1}
                        notArrow
                    />
                </div>
                <div className={classes.right}>
                    <CustomSelect 
                        data={data}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormInputNumber