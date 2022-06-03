import React,{createContext, useEffect, useState} from 'react'
import Item1 from './component/Item1'

export const bgrContext =  createContext()

const UseContext = () =>{
    const [ theme, setTheme] = useState('dark')

    const handleClick = ( ) =>{
        setTheme(theme === 'dark' ? 'shining' : 'dark')
        
    }

   
    return(
        <bgrContext.Provider value={theme}>
            <button onClick={handleClick}>
                {theme === 'dark'
                    ?<>shining</>
                    :<>Dark</>
                }
            </button>
            <p>item1</p>
            <Item1 />
        </bgrContext.Provider>
    )
}

export default UseContext