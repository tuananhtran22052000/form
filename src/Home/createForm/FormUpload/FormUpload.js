import React,{useState, useEffect,useRef} from 'react'
import classes from './FormUpload.module.scss'


import FieldTextarea from '../../../componentForm/FieldTextarea'
import InputField from '../../../componentForm/InputField'
import InputSearch from '../../../componentForm/InputSearch'

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
    
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <input type={'file'} onChange={HandleChange} />
            </div>
            <div>
                
            </div>
            <FieldTextarea 
                cols={100}
                rows={10}
                maxLength={10}
                ref={RefTextarea}
                value={title}
                onChange={e =>setTitle(e.target.value)}
                showCount
            />
            
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
            <div>
       
            </div>
        </div>
    )
}
export default FormUpload