import React,{useState} from 'react'

const Login = ({onClick,isLogin}) => {
    return(
        <>{isLogin === true
            ? <>
                <h1>Please sign up.</h1>
               <button onClick={onClick}>LOGIN</button>
             </>
             :<>
                <h1>Welcome back! </h1>
                <button onClick={onClick}>LOGOUT</button>
             </>

        }
            
        </>
    )
}


const ButtomComponent = () =>{
    const [ isLogin, setIsLogin ] = useState(true)

    const handleClick = () =>{
        setIsLogin( ! isLogin )
    }
  
    return(
        <>
            <Login isLogin={isLogin} onClick={handleClick} />
        </>
    )
}
export default ButtomComponent