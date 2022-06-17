import React,{useEffect, useRef, useState} from 'react'
import classes from './FormMethods.module.scss'
import FieldSelect from '../../../componentForm/FieldSelect'
import InputField from '../../../componentForm/InputField'

const data =['male', 'female','other']
const FormMethods = () =>{
    const [title, setTitle] = useState('')
    const [select, setSelect] = useState('')
    const [customGender, setCustomGender] = useState("")
    const [isToggle,setIsToggle] = useState(false)
    const RefSelect = useRef()
    const RefInput = useRef()

    const GrenderChange = (e) => {
        setSelect(e.target.value)  
    }

    const HandleReset = () =>{
        setTitle('')
        // RefInput.current.focus();
        setSelect('0')
    }

  useEffect(()=>{
    switch(select){
        case 'male' :
            setTitle('hi, boy')
            setIsToggle(false)
        break;
        case 'female':
            setTitle('hi, girl')
            setIsToggle(false)
        break;
        case 'other':
            setTitle('')
            setIsToggle(true)
        break;
        default:
            
    }
  },[select])

   const HandleSubmit = () =>{
       if(select === '0' || !title || !customGender){
           return alert('nhập và chọn đầy đủ')
        
       }
       setTitle('')
       setCustomGender('')
    console.log('grenDer',select)
    console.log('note',title)
    console.log('customGender',customGender)
   }

   const handleClear =()=>{
    setTitle('')
   }
  
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.row}>
                    <label className={classes.label}>Note:</label>
                    <InputField type='text'
                    onClose={handleClear} 
                        placeholder='nhập nội dung'
                        value={title}
                        onChange={e =>setTitle(e.target.value)}
                        h40
                        paddingLeft={'5px'}
                        // ref={RefInput}
                    />
                    
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>Grender:</label>

                    <FieldSelect 
                        width={'200px'}
                        height={'30px'}
                        placeholder={'chọn option'}
                        onChange={GrenderChange}
                        data={data}
                        
                    />
                </div>
                <div>
                    {isToggle === true
                        ?<>
                            <div className={classes.row}>
                                <label className={classes.label}>Customize Gender:</label>
                                <InputField type='text'
                                    onClose={handleClear} 
                                    placeholder='nhập nội dung'
                                    value={customGender}
                                    onChange={e =>setCustomGender(e.target.value)}
                                    h40
                                    paddingLeft={'5px'}
                    />
                            </div>
                        </>
                        :<></>
                    }
                </div>
            </div>
            <div>
                    
                </div>
            <div className={classes.contentBtn}>
                <button onClick={HandleSubmit}>Submit</button>
                <button onClick={HandleReset}>reset</button>
            </div>
            
        </div>
    )
}
export default FormMethods