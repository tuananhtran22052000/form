import React,{useState} from 'react'
import classes from './FormLayout.module.scss'
import classNames from 'classnames'

import InputField from '../../../componentForm/InputField'

const FormLayout = () =>{
    const [ formLayOut, setFormLayOut] = useState('Horizontal')
    return(
        <div className={classNames(classes.container, formLayOut==='Inline' && classes.containerRow)}>
            <div className={classes.row}>
                <div className={classNames(classes.content,formLayOut==='Horizontal' && classes.active)}
                    onClick={() => setFormLayOut('Horizontal')}
                >Horizontal</div>
                <div className={classNames(classes.content,formLayOut==='Vertical' && classes.active)}
                    onClick={() => setFormLayOut('Vertical')}
                >Vertical</div>
                <div className={classNames(classes.content,formLayOut==='Inline' && classes.active)}
                    onClick={() => setFormLayOut('Inline')}
                >Inline</div>
            </div>                
            <div className={classNames(classes.contentForm, formLayOut==='Inline' && classes.contentFormRow)}>
                <div className={classNames(formLayOut==='Vertical' && classes.content,
                    formLayOut==='Horizontal' && classes.contentRow               
                )}>
                    <label className={classes.label}>Field A:</label>               
                    <InputField
                         h40
                         paddingLeft={'5px'}                  
                         type={'text'}
                    />
                </div>
                <div className={classNames(formLayOut==='Vertical' && classes.content,
                    formLayOut==='Horizontal' && classes.contentRow
                )}>
                    <label className={classes.label}>Field B:</label>
                    <InputField
                         type={'text'}
                         h40                                      
                         paddingLeft={'5px'}
                         
                    />
                </div>
            </div>
        </div>
    )
}

export default FormLayout