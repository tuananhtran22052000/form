import React,{useState, useEffect,useRef} from 'react'
import classes from './FormUpload.module.scss'


import FieldTextarea from '../../../componentForm/FieldTextarea'
import InputField from '../../../componentForm/InputField'
import InputSearch from '../../../componentForm/InputSearch'
import InputNumber from '../../../componentForm/InputNumber'

import mic from '../../../video/mic.png'
import search from '../../../video/search.svg'

const data = [{
    id:1,
    title:'tuananh'
},{
    id:2,
    title:'nguoi1'
},{
    id:3,
    title:'tuananh2'
},{
    id:4,
    title:'nguoi2'
},{
    id:5,
    title:'tuananh3'
}]
const FormUpload = () =>{
    const [ title, setTitle] = useState("")

    const RefTextarea = useRef()
    const HandleChange = () =>{

    }
    useEffect(() =>{
        console.log(RefTextarea.current.value)
    },[title])
    const [value,setValue] = useState('')
    const [height,setHeight] = useState(50)
  
    const handleKeyDown =(e) =>{
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    return(
        <div className={classes.container}>
            
            <div style={{marginBottom:'50px'}}>
                <FieldTextarea 
                    width={'200px'}
                    height={'100px'}
                    // maxLength={100}
                    ref={RefTextarea}
                    value={title}
                    onChange={e =>setTitle(e.target.value)}
                    // showCount
                />
            </div>
            <div>
                <InputField 
                    type={'date'}
                    height={'30px'}
                    width={'100px'}
                />
            </div>
            <div style={{width: '600px'}}>
                <InputField
                type={'search'}
                    height={'50px'}
                    mic
                    search
                    // titleSearch={'Search'}
                    brg={'red'}
                    border={'none'}
                    
                />
            </div>
            <textarea value={value} onChange={e =>setValue(e.target.value)}  className={classes.textarea} required
               onKeyDown={handleKeyDown}
              
            />
        </div>
    )
}
export default FormUpload