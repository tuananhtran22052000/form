import React,{useEffect, useRef} from 'react'
import UseImperativeHandleItem from './UseImperativeHandleItem'

const UseImperativeHandle = () =>{
    const videoRef = useRef()

    useEffect(() =>{
        console.log(videoRef.current)
    })

    const HandlePlay = () =>{
        videoRef.current.play()
    }

    const HandlePause = () =>{
        videoRef.current.pause()
    }

    return(
        <>
            <div>
                <UseImperativeHandleItem ref={videoRef}  />
                <button onClick={HandlePlay}>play</button>
                <button onClick={HandlePause}>pause</button>
            </div>
        </>
    )
}
export default UseImperativeHandle