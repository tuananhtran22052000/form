import React,{forwardRef, useImperativeHandle,useRef,useEffect} from 'react'
import video from '../../video/video.mp4'

const useImperativeHandleItem = (props,ref) =>{

    useEffect(() =>{
        console.log('qq',videoRef.current)
    })

    const videoRef = useRef()

    useImperativeHandle(ref, ()=>({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))


    return(
        <>
            <video 
                ref={videoRef}
                width={'300px'}
                height={'300px'}
                src={video}
            />
        </>
    )
}

export default forwardRef(useImperativeHandleItem)