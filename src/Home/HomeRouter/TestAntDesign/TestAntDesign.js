import React, { useState } from 'react'
import { Input} from 'antd'
import InputField from '../../../componentForm/InputField'

const TestAntDesign= () =>{
    const [valueInput, setValueInput] = useState('nhập dữ liệu')

    const HandleChange = (e) =>{
        setValueInput(e.target.value)
       
    }
    const HandleEnter = (e) =>{
        if(e.keyCode === 13){
            setValueInput('')
            console.log('data',valueInput)
        }
        
    }
    return(
        <div>
            <Input addonBefore="http://"  defaultValue="mysite" 
                  addonAfter="https://tuananh"
                  id={'123'}

            />
            <div style={{width:'400px'}}>
                <InputField 
                    addonAfter={"anh"}
                    addonBefore={"tuananh"}
                    is={12313}
                    onKeyDown={HandleEnter}
                    value={valueInput}
                    onChange={HandleChange}
                />
            </div>
        </div>
    )
}
export default TestAntDesign