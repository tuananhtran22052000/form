import React,{useState,useCallback} from 'react'
import ItemTest from './ItemTest'

const ComponentCallback = () =>{
    const [count, setCount] = useState(0)



    const HandleClick = useCallback(() =>{
        setCount(count =>count + 1)
    },[])
    // const HandleClick = () =>{
    //     setCount(count =>count + 1)
    // }

    const HandleReset = () =>{
        setCount(0)
    }
    
    return(
        <>
            <ItemTest onHandleClick={HandleClick} />
            <h1>{count}</h1>
            <button onClick={HandleReset}>reset</button>
            
        </>
    )
}

export default ComponentCallback 