import React, { useState,useRef } from 'react'
import classes from './SelectDropdown.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import arrow from '../icon/arrow.svg'
import Box from '../icon/Box.svg'


const SelectDropdown = (props) =>{
    const {
        data,
        height,
        placeholder,
        multiple
    } = props
    
    const InputRef = useRef()

    const [ valueSearch, setValueSearch] = useState('') 
    const [filterData, setFilterData] = useState([])
    const [show, setShow] = useState(false)
    

    const HandleChange = (e) =>{
        const search = e.target.value;
        const newData = data.filter((value) =>{
            return value.title.includes(search)
        })
        if(search===""){
            setFilterData([]);
          }else{
            setFilterData(newData);
          }
          setValueSearch(search)
    }

    const HandleShow = () =>{
        setShow(!show)
    }
    const HandleShowItem =(e) =>{
       
        setShow(true)
    }
    
    const HandleClick = (item )  =>{
        if(!multiple){
            setValueSearch(item.title)
        }else{
            setValueSearch([...valueSearch,item.title])
        }
        
        setShow(false)
    }

    

    return(
        <div className={classes.container}>
            <div className={classes.contentInput}>
                <input type={'text'}
                    style={{
                        height:height,
                    }} 
                    className={classes.input} 
                    value={valueSearch}
                    onChange={HandleChange}
                    onClick={HandleShowItem}
                    placeholder={placeholder}
                    ref={InputRef}
                    
                />
                
                <img src={arrow} alt='' className={classNames(classes.icon,show===true ? classes.IconShow : classes.IconUnShow)} onClick={HandleShow} />
            </div>
            <div className={classNames(classes.content)} >
                {data.length !==0 
                ? <>
                    {filterData.length !== 0
                        ?<>
                            <div className={classNames(classes.contentShow, show===true ? classes.show : classes.unShow)}  >
                                {filterData.slice(0,15).map((item,key) =>(
                                    <div className={classes.title} 
                                        key={key}
                                        onClick={()=>HandleClick(item)}
                                    >
                                        <p className={classes.resultItem}  onClick={()=>HandleClick(item)}>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                        :<>
                            <div className={classNames(classes.contentShow, show===true ? classes.show : classes.unShow)}  >
                                {data.map((item,key) =>(
                                    <div className={classes.title} 
                                        key={key}
                                        onClick={()=>HandleClick (item)}
                                    >
                                        <p className={classes.resultItem}  onClick={()=>HandleClick (item)}>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                 </> 
                 :<>
                    <div className={classNames(classes.contentNull, show===true ? classes.show : classes.unShow)}>
                        <div className={classes.row}>
                            <div className={classes.contentImg}>
                                <img src={Box} alt="" className={classes.iconBox} />
                            </div>
                            <p className={classes.title}>No Data</p>
                        </div>
                    </div>
                 </>}
                           
            </div>
        </div>
    )
}


SelectDropdown.propTypes = {
    height: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    multiple:  PropTypes.bool.isRequired
}
export default SelectDropdown