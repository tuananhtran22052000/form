import React from "react";

const jobs = [{
    id: 1,
    title: 'CV1',
    time: '2h',
},{
    id: 2,
    title: 'CV2',
    time: '3h',
},{
    id: 3,
    title: 'CV3',
    time: '4h',
},{
    id: 4,
    title: 'CV4',
    time: '5h',
},{
    id: 5,
    title: 'CV5',
    time: '6h',
}]

const MapComponent = () =>{
    return(
        <div>
            <ul>
                {jobs.map((item,key) =>(
                    <li key={item.id}>
                        {item.title}
                        {console.log('key',key)}
                    </li>
                ))}
            </ul>
            <ul>
                {jobs.map((item,key) =>(
                    <li key={item.id}>
                        {item.time}--{item.title}
                        {console.log('key2',key)}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default MapComponent