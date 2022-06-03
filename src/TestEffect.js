import React,{useState, useEffect} from 'react'
import Test from './Test'

const TestEffecct = () =>{

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

   const handlecl = () =>{
        if(count ===0){
            return count
        }else{
           setCount(count - 1)
        }
   }


    useEffect(() =>{
        console.log('mount')
    },[])

    useEffect(() =>{
        console.log('update-count',count)
        return () =>{
        }
    },[count])

    useEffect(() =>{
        console.log('update-number',number)
        return () =>{
        }
    },[number])

    return(
        <div>
            <div>
                <p>
                    count:{count}
                    number:{number}
                </p>
                <button onClick={() =>setCount(count + 1)}>click + 1</button> 
                <button  onClick={handlecl}>click - 1</button> 
                <button  onClick={() =>setNumber(number - 1)}>number</button>
            </div> 
            <div>
                
            </div>   
            <>
                <Test />
            </>    
        </div>
    )
}


export default TestEffecct