import React,{useEffect, useState} from 'react'
import classes from './CallApi.module.scss'
import axios from 'axios'

import InputFieldNumber from '../../../componentForm/InputFieldNumber'



const dataMoney = ["Dola","Euro","yên"]

// const dataTest = [{
//     id:1,
//     title: "Dola"
// },{
//     id:2,
//     title: "Euro"
// },{
//     id:3,
//     title: "yên"
// }]

const CallApi = () =>{
    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    const [select, setSelect] = useState("Dola")
    const [currency, setCurrency] = useState("$")
    const[valueText,setValueText] = useState("")

    // useEffect(() =>{
    //     axios.get('https://reqres.in/api/users?page=2')
    //     .then((res) =>{
    //         setData(res.data.data)
    //     })
        
    // },[])
    
    const HandleChange = (e) =>{
        setTitle(e.target.value)

    }  
    
    const HandleChangeSelect = (e)=>{
        setSelect(e.target.value)
    }
    
    useEffect(()=>{
        switch(select){
            case "Dola":
                setValueText(Intl.NumberFormat('en-US',{
                    style:'currency',
                    currency: 'USD',
                   }).format(title))
                   setCurrency("$")
            break;
            case "Euro":
                  setValueText(Intl.NumberFormat('de-DE',{
                    style:'currency',
                    currency: 'EUR',
                   }).format(title))
                   setCurrency("€")
            break;
            case "yên":
                 setValueText(Intl.NumberFormat('ja-JP',{
                    style:'currency',
                    currency: 'JPY',
                   }).format(title))
                   setCurrency("￥")
            break;
            default:
        }
    },[title,select])
    return(
        <div className={classes.container}>
            {/* {data && data.map((item,key) =>(
                <p key={key}>{item.email}</p>
            ))} */}

            <div className={classes.content} style={{width:'300px'}}>
                <InputFieldNumber 
                    currency
                    numberMin={0}
                    step={1}
                    value={title}
                    valueCurrency={currency}
                    onChange={HandleChange}
                    onChangeSelect={HandleChangeSelect}
                    notArrow
                    data={dataMoney}
                    height={'40px'}
                />
                
            </div>
            {/* <SelectDropdown 
                data={dataTest}
            /> */}
        </div>
    )
}
export default CallApi