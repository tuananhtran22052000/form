import { type } from '@testing-library/user-event/dist/type'
import React,{useEffect, useReducer, useRef} from 'react'

const ComponentReducer = () =>{
    const InitState = {
        job: '',
        jobs: []
    }
    //action
    const SET_JOB ='setJob'
    const ADD_TODO = 'add'
    const CLEAR = 'clear'

    const setJob = (payload) =>{
        return{
            type: SET_JOB,
            payload
        }
    }
    
    const add = payload =>{
        return{
            type: ADD_TODO,
            payload
        }
    }

    const clear = payload =>{
        return{
            type: CLEAR,
            payload
        }
    }
    
    


    // reducer
    const Reducer = (state, action) =>{
        switch(action.type){
            case SET_JOB:
             return  {...state,job: action.payload}
             
             case ADD_TODO:
                return {
                    ...state,
                    jobs: [...state.jobs,action.payload]
                };
             break
             case CLEAR:
                 const newJobs = [...state.jobs]
                 newJobs.splice(action.payload,1)
                return {
                    ...state,
                    jobs: newJobs
                };
             break
             
            default:
                throw new Error('error');
        }
     
    }

    const [ state, dispatch] = useReducer(Reducer,InitState)
    const {job, jobs} = state

    const HandleOnchange = (e) =>{
        dispatch(setJob(e.target.value))
    }
    const inputRef = useRef()
    const HandleSubmit = ( ) =>{
        inputRef.current.focus();
        if(!job){
            return alert('nhập đầy đủ dữ liệu')
        }
        dispatch(add(job))
        dispatch(setJob(''))
        

    }
    const HandleCler = (index) =>{
        dispatch(clear(index))
    }
   

    return(
        <>
            <input ref={inputRef} type={'text'} value={job} onChange={HandleOnchange} />
            <button onClick={ HandleSubmit}>add</button>
            
            <ul>
                {jobs.map((item,index) =>(
                    <li key={index}>{item} <button onClick={HandleCler}>Clear</button></li>
                ))}
            </ul>
        </>       
    )
}

export default ComponentReducer