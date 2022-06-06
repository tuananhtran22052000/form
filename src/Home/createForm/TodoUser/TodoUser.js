import React,{useState,useRef ,createContext} from 'react'
import classes from './TodoUser.module.scss'
import iconUser from '../../../video/user.png'
import padLock from '../../../video/padlock.png'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import ListUser from './ListUser'
import InputField from '../../../componentForm/InputField';


export const listUsers = createContext()

const TodoUser = () =>{
    const [UserName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState([])


    const RefInput = useRef()
    
 

    const HandleSubmit = () =>{
        if(!UserName || !password){
            return toast.error('nhập đầy đủ',{
                autoClose: 2000,
            })
        }
        setUser([...user,{
            UserName:UserName,
            password: password,
        }])
        toast.success("Thêm thành công",{
            autoClose: 2000,
        })
        setUserName('')
        setPassword('')
        console.log(user)
        
    }

    return(
        <listUsers.Provider value={user}>
            <div className={classes.container}>
                <p className={classes.title}>Add user</p>
                <div className={classes.content}>
                    <div className={classes.row}>
                    <img src={iconUser} alt='' className={classes.icon} />
                    <InputField 
                            placeholder={'UserName'}
                            value={UserName}
                            onChange={e => setUserName(e.target.value)}
                            h40
                        />
                    
                    </div>
                    <div className={classes.row}>
                        <img src={padLock} alt='' className={classes.icon} />
                        <InputField 
                            type={'password'}
                            placeholder={'password' }
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                           h40
                        />
                        
                    </div>
                </div>
                <div className={classes.contentBtn}>
                    <button className={classes.btn} onClick={HandleSubmit}>Add</button>
                </div>
                <div className={classes.listUser}>
                    <ListUser />
                </div>
                <ToastContainer />
            </div>
        </listUsers.Provider>
    )
}

export default TodoUser