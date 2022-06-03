import React from "react";

const TestComponent = ({children, name}) => {
    return(
        <>
            <div>
                <p>{name}</p>
                <div>{children}</div>
            </div>
        </>
    )
}
export default TestComponent