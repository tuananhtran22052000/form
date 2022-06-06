import React, { useState } from 'react'
import classes from './TestSwitch.module.scss'
import Switch from '../../../componentForm/Switch'

import buld from '../../../../src/video/bulb.png'
import idea from '../../../../src/video/idea.png'

import Buld1 from '../../../../src/video/buil1.jpg'
import Idea1 from '../../../../src/video/Idea1.jpg'

const TestSwitch = () =>{
    const [isToggle, setIstoggle] = useState(false)
    const [describe, setDescribe] = useState()

    const HandleChangeCheck = () =>{
        setIstoggle(!isToggle)
        if(isToggle === false){
            return setDescribe( <img src={buld} alt="" className={classes.icon} />)
        }else{
            return setDescribe( <img src={idea} alt="" className={classes.icon} />)
        }
    }
    return(
        <div className={classes.container}>
            <Switch 
                checked={isToggle}
                onChange={HandleChangeCheck}
                describe={describe}

            />
            <div>
                {isToggle === false
                    ?<>
                        <img src={Buld1} alt="" className={classes.icon} />
                    </>
                    :<>
                         <img src={Idea1} alt="" className={classes.icon} />
                    </>
                }
            </div>
        </div>
    )
}

export default TestSwitch