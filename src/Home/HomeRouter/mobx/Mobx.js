import React from 'react'
import Main from './components/Main'

import SelectDropdown from '../../../componentForm/SelectDropdown'
import CustomSelect from '../../../componentForm/CustomSelect'
import CustomInputNumber from '../../../componentForm/CustomInputNumber'

const data = [{
    id:1,
    title:'ánh1'
},{
    id:2,
    title:'tuan anh'
},{
    id:3,
    title:'tanh3'
},{
    id:4,
    title:'tuan anh tran'
},{
    id:5,
    title:'tanh5'
},{
    id:6,
    title:'tanh6'
},{
    id:7,
    title:'tanh1'
},{
    id:8,
    title:'tanh7'
},{
    id:8,
    title:'ánh1'
},{
    id:9,
    title:'nhật ánh'
},{
    id:10,
    title:'tuấn anh'
}]
// const data=[]
const Mobx = () =>{
    return(
        <>
            <div>
                {/* <Main /> */}
            </div>
           
            <div style={{margin:' 0 auto', display:'flex'}}>
            <div style={{width:'500px'}}>
                <SelectDropdown 
                    data={data}
                    height={'40px'}
                    placeholder={"nhập tên"}
                    // multiple
                />
            </div>
            <div style={{width:'500px',marginLeft:'300px'}}>
                <CustomSelect 
                    // dropTop
                    data={data}
                    defaultValue={'chọn Option'}

                />
            </div>
            </div>
            <div style={{width:'150px'}}>
                <CustomInputNumber 
                    // notArrow
                    placeholder={""}
                    minNumber={1}
                    maxNumber={10}
                    step={0.5}
                />
            </div>

        </>
    )
}

export default Mobx