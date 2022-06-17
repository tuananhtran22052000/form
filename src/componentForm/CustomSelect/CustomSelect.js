import React,{useEffect, useState} from 'react'
import classes from './CustomSelect.module.scss'
import classNames from 'classnames'

import arrow from '../icon/arrow.svg'
import Box from '../icon/Box.svg'

const CustomSelect = (props) =>{
    const {
        data,
        dropTop,
        status,
        disabled,
        border
    } = props
                                              
    const [value, setValue] = useState('')
    const [isToggle, setIsToggle] = useState(false)

    const[addData, setAddData] = useState([])
    const [title, setTitle] = useState("")


    const HandleClick = () =>{
        if(!disabled){
            setIsToggle(!isToggle)
        }
        
        console.log(isToggle)
    }
    const HandleClickValue = (item) =>{
        setValue(item.title)
        setIsToggle(!isToggle)
    }

    const HandleChange = (e) =>{
        setTitle(e.target.value)
    }

    const HandleAdd = () =>{
        if(!title){
            return 
        }else{
            setAddData(
                [...addData,{
                    id: Math.floor(Math.random() * 1001),
                    title:title,
                }]
            )
        } 
        
        setTitle('')
        // console.log(Math.floor(Math.random() * 1001))
    }
    return(
        <div className={classes.container}>
             <img src={arrow} alt='' className={classNames(classes.icon, isToggle===true ? classes.IconShow : classes.IconUnShow)}/>
                <div className={classNames(
                        classes.ContentValue,
                        status==="error" && classes.error,
                        status==="warning" && classes.warning,
                        disabled && classes.disabled
                    )}
                    style={{
                        border:border
                    }}
                    onClick={HandleClick}
                >
                {value ? value : "nhập hoặc chọn"}
            </div>
            {data.length !==0
                ?<>
                    <div className={classNames(classes.content, isToggle===true ? classes.show : classes.unShow, dropTop && classes.showTop)}>
                        <div>
                            {data.map((item,key) =>(
                                <p className={classNames(classes.title,value.includes(item.title)=== true && classes.active )} 
                                    key={key}
                                    onClick={() =>HandleClickValue(item)}
                                >{item.title}</p>
                            ))}
                        </div>
                        <div>
                            {addData.map((item,key) =>(
                                    <p className={classNames(classes.title,value.includes(item.title)=== true && classes.active )} 
                                        key={key}
                                        onClick={() =>HandleClickValue(item)}
                                    >{item.title}</p>
                                ))}
                        </div>
                        <div className={classes.contentAdd}>
                            <input value={title} onChange={HandleChange} type='text' placeholder='data' className={classes.inputAdd}/>
                            <div className={classes.btn}
                                onClick={HandleAdd}
                            >+ Add
                            </div>
                        </div>     
                    </div>
                </>
                :<>
                    <div className={classNames(classes.contentNull, isToggle===true ? classes.show : classes.unShow,  dropTop && classes.showTop)}>
                        <div className={classes.row}>
                            <div className={classes.contentImg}>
                                <img src={Box} alt="" className={classes.iconBox} />
                            </div>
                            <p className={classes.title}>No Data</p>
                        </div>
                    </div>
                </>
            }
            
        </div>
    )
}
export default CustomSelect