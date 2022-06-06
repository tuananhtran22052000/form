import React,{useEffect, useRef, useState} from 'react'
import classes from './FormUrl.module.scss'
import classNames from 'classnames'

import Switch from '../../../componentForm/Switch'
import InputField from '../../../componentForm/InputField'
import FieldTextarea from '../../../componentForm/FieldTextarea'


const FormUrl = () =>{

    const [title, setTitle ] = useState('')
    const [ describe, setDescribe] = useState('textarea')

    const [isToggle, setIsToggle] = useState(false)
 
    const HandleClick = () =>{
        setTitle('https://taobao.com/')
    }

    const HandleSubmit = () =>{
        const res = title.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if(!res){
           return alert('error')
        }else{
            return alert('susscess')
        }
    }

   const HandleChangeCheck = () =>{
     setIsToggle(!isToggle)
    if(isToggle === true){
        setDescribe('textarea')
    }else{
        setDescribe('text')
    }
   }
   const HandleClear = () =>{
    setTitle('')
   }
   useEffect(() =>{
       console.log(isToggle)
   })

    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <label className={classes.label}>*URL</label>
                {/* <input type="url" placeholder='https://example.com'
                  className={classes.input}
                  value={title}
                  onChange={(e) =>{setTitle(e.target.value)}}
                /> */}
                <InputField 
                    onClose={HandleClear}
                    placeholder={'https://example.com'}
                    value={title}
                    onChange={(e) =>{setTitle(e.target.value)}}
                    h40
                />
            </div>
            <p>đường dẫn: {title}</p>
            <div>
                <Switch 
                    title={'Switch'}
                    checked={isToggle}
                    onChange={HandleChangeCheck }
                    describe={describe}
                    width={'51px;'}
                    height={'28px;'}
                />
                <div>
                    {isToggle === true
                        ?<>
                            <InputField 
                                padding={'0px'}
                            />
                        </>
                        :<>
                            <FieldTextarea />
                        </>
                    }
                </div>
            </div>
            <div className={classes.row}>
                <button onClick={HandleSubmit}>Submit</button>
                <button onClick={HandleClick}>Fill</button>
            </div>
               
        </div>
    )
}

export default FormUrl