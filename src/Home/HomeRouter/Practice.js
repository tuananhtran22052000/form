import React from 'react'
import ComponentReducer from './ComponentReducer'
import ComponentMemo from './ComponentMemo'
import ComponentCallback from './ComponentCallback'
import UseImperativeHandle from './UseImperativeHandle'

const Practice = () =>{
    return(
        <>
            <div>
                <h1>useReducer</h1>
                <ComponentReducer />
            </div>
            <div>
                <h1>useMemo & useRef</h1>
                <ComponentMemo />
            </div>
            <div>
                <h1>useCallback</h1>
                <ComponentCallback />
            </div>
            <div>
                <h1>useImperativeHandle</h1>
                <UseImperativeHandle />
            </div>
        </>
    )
}

export default Practice