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
  const [type, setType] = useState([])

  const HandleClick  = () =>{
    
  }
    return(
        <div className={classes.container}>
            <div>
            
            </div>           
            <div>
                <button onclick={HandleClick}>ADD</button>
            </div>
        </div>
    )
}
export default FormUpload