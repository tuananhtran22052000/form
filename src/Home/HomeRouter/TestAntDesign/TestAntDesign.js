import React, { useState } from 'react'
import classes from './TestAntdeisgn.module.scss'

const data = [{
    id:1,
    title:'ánh1'
},{
    id:2,
    title:'tuấn anh'
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
    id:9,
    title:'ánh1'
},{
    id:10,
    title:'nhật ánh'
},{
    id:11,
    title:'tuan anh'
}]

const TestAntDesign= (props) =>{
    // const {
    //     multiple
    // } = props
    const [valueInput, setValueInput] = useState([])
    const [valueSearch, setValueSearch] = useState("")
    const [show, setShow] = useState(false)
    const multiple = false
    const HandleClickInput = () =>{
        setShow(!show)
    }
    const HandleClick = () =>{
        setShow(!show)
    }
    const HandleClickItem = (item) =>{
        const value = item.title;
            if(valueInput.includes(value) !== true){
                setValueInput(
                    [...valueInput, value]
                )
            }
        
        
    }
    const handleClear = (index) =>{
        const newValueInput = [...valueInput];
        newValueInput.splice(index, 1);
        setValueInput(newValueInput);
        setShow(true)
    }


     return(
            <div className={classes.container}>
                <div className={classes.content}>
                        <div className={classes.contentValue} onClick={HandleClick}>
                            {valueInput.map((item, index) =>(
                                <p className={classes.item} key={index} >
                                    {item} 
                                    <span 
                                     className={classes.close}
                                     onClick={() =>handleClear(index)}
                                     >X</span>
                                </p>
                            ))}
                            {/* <input type={'text'} className={classes.testInput} /> */}
                            <input type={'text'} className={classes.input} 
                                value={valueSearch}
                                onChange={e => setValueSearch(e.target.value)}
                                onClick={HandleClickInput}
                            />
                        </div>
                    
                    <div className={classes.contentOption}>
                        {show === true
                            ?<>
                                {data.map((item) =>(
                                    <p className={classes.title} key={item.id}    
                                        onClick={()=>HandleClickItem(item)}
                                    >
                                        {item.title}
                                    </p>
                                ))}
                            </>
                            :<></>
                        }
                    
                </div>
                </div>
            </div>
    )
}
export default TestAntDesign