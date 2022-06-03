import React from 'react'
import Main from './components/Main'

import SelectDropdown from '../../../componentForm/SelectDropdown'
import CustomSelect from '../../../componentForm/CustomSelect'

const data = [{
    id:1,
    title:'anh1'
},{
    id:2,
    title:'anh2'
},{
    id:3,
    title:'anh3'
},{
    id:4,
    title:'anh4'
},{
    id:5,
    title:'anh5'
},{
    id:6,
    title:'anh6'
},{
    id:7,
    title:'anh1'
},{
    id:8,
    title:'anh7'
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
            <div style={{width:'500px'}}>
                select
                <SelectDropdown 
                    data={data}
                    height={'40px'}
                    placeholder={"nhập tên"}
                    // multiple
                />
            </div>
            <div style={{margin:' 0 auto'}}>
            <div style={{width:'200px',marginLeft:'300px'}}>
                <CustomSelect 
                    // dropTop
                    data={data}
                    defaultValue={'chọn Option'}
                />
            </div>
            </div>
            
        </>
    )
}

export default Mobx