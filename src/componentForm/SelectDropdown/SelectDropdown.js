import React, { useEffect, useState} from 'react'

import classes from './SelectDropdown.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import {removeVietnameseTones} from '../removeVietnameseTones/removeVietnameseTones'

import arrow from '../icon/arrow.svg'
import Box from '../icon/Box.svg'


const SelectDropdown = (props) =>{
    const {
        data,
        width,
        height,
        placeholder,
        
    } = props
   

    const [valueInput, setValueInput] = useState([]) // value dc chon
    const [search, setSearch] = useState("Nhập hoặc chọn option") // value search
    const [filterData, setFilterData] = useState([]) // data sau khi search
    const [show, setShow] = useState(false)
    const [ isToggle, setIsToggle] = useState(false)
  
    const HandleClickInput = () =>{
        setShow(!show)
    }
    // const HandleClick = () =>{
    //     setShow(!show)
    // }
    const HandleClickItem = (item) =>{
        const value = item.title;
            if(valueInput.includes(value) !== true){
                setValueInput(
                    [...valueInput, value]
                )
            }     
            setIsToggle(true)
            setSearch("")
            console.log(item)
    }
    const handleClear = (index) =>{
        const newValueInput = [...valueInput];
        newValueInput.splice(index, 1);
        setValueInput(newValueInput);
        setShow(true)
    }

    const HandleChangeSearch = (e) =>{
        const valueSearch = e.target.value
        const newData = data.filter((value) =>{
            const checkValueSearch = removeVietnameseTones(valueSearch).toLowerCase()//toLowerCase
            const checkValue = removeVietnameseTones(value.title).toLowerCase()
            return checkValue.includes(checkValueSearch)
        })
        if(valueSearch === ""){
            setFilterData([])
        }else{
            setFilterData(newData)
        }
        setSearch(valueSearch)
    }
    useEffect(()=>{
       
    })
    
     return(
            <div className={classes.container}>
                <div className={classes.content}>
                        <div className={classes.contentValue} 
                            
                            style={{
                                width: width,
                                minHeight: height,
                        }}> 
                            {valueInput.map((item, index) =>(
                                <p className={classes.item} 
                                    key={index} 
                                
                                >
                                    {item} 
                                    <span 
                                     className={classes.close}
                                     onClick={() =>handleClear(index)}
                                     >X</span>
                                </p>
                            ))}
                            {/* <input type={'text'} className={classes.testInput} /> */}
                            <input type={'text'} className={classes.input} 
                                value={search}
                                onChange={HandleChangeSearch}
                                onClick={HandleClickInput}
                                placeholder={placeholder}
                            />
                        </div>
                    
                    <div className={classes.contentOption}
                        style={{
                            width: width,
                        }}
                    >
                        {data.length !== 0
                            ?<>
                                {filterData.length !== 0 
                                    ?<>
                                        <div className={classNames(classes.contentData, show ===true ? classes.showData : classes.unShow)}>
                                            {filterData.slice(0,15).map((item) =>(
                                                <p className={classNames(classes.title,valueInput.includes(item.title) === true && classes.active)} 
                                                    key={item.id}    
                                                    onClick={()=>HandleClickItem(item)}
                                                >
                                                    {item.title}
                                                </p>
                                            ))}
                                            
                                        </div>
                                    </>
                                    :<>
                                        <div className={classNames(classes.contentData,show ===true ? classes.showData : classes.unShow)}>
                                            {data.map((item) =>(
                                                <div className={classNames(classes.title,valueInput.includes(item.title) === true && classes.active)} 
                                                    key={item.id}    
                                                    onClick={()=>HandleClickItem(item)}

                                                >
                                                    {item.title}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                }
                            </>
                            :<>
                                
                                <div className={classNames(classes.notData,show ===true ? classes.showData : classes.unShow)}>
                                    <div className={classes.contentNotData}>
                                        <div>
                                            <img src={Box} alt="" className={classes.img} />
                                            <p className={classes.text}>NOT DATA</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                </div>
                </div>
            </div>
    )
}


SelectDropdown.propTypes = {
    height: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
}
export default SelectDropdown