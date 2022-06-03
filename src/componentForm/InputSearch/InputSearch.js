import React from 'react'
import classes from './InputSearch.module.scss'
import iconSearch from '../icon/search.svg'
import iconMic from '../icon/mic.png'

const InputSearch = (props) =>{
    const {
        titleSearch,
        height,
        brg,
        border,
        value,
        onChange,
        onClick,
        width,
        paddingLeft,
        mic,
        search,
    } = props
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <label className={classes.label}>
                    <input type={'text'} 
                        style={{
                            paddingLeft: paddingLeft,
                            width: width,
                            height: height,
                        }}
                        className={classes.input} 
                        value={value}
                        onChange={onChange}
                    />
                    
                    {mic
                        ?
                            <div className={classes.contentMic}>
                                <img src={iconMic} alt='' className={classes.icon} />
                            </div>
                        : <></> 
                    }
                </label>
                
                <div className={classes.row} 
                    onClick={onClick}
                >
                    {search 
                        ?
                            <div className={classes.contentIcon} style={{height: height,  backgroundColor:brg, border:border}}>
                                <img src={iconSearch} alt='' className={classes.icon} />
                            </div>
                        : <></> 
                    }
                    {titleSearch
                        ?   <button className={classes.btn} 
                                style={{height: height,backgroundColor:brg}} 
                                onClick={onClick}
                            >
                                {titleSearch}
                            </button> 
                        :   <></>
                    }
                </div>
            </div>
        </div>
    )
}
export default InputSearch