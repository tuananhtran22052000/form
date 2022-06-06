import React,{ useState, useEffect }  from 'react'
import classes from './CustomButton.module.scss'

import LoaderButton from "loader-button";


const CustomButton =(props) =>{
    const {
        children
    } = props

    const [loading, setLoading] = useState(false)
    const [loadingSpeed] = useState(1);
    const [click,setClick] = useState('click')

    useEffect(() =>{
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 5000);
          }
    },[loading, loadingSpeed])
    return(
        <div className={classes.container}>
            <LoaderButton
                 variant="warning"
                 size={"lg"}
                 isLoading={loading}
                 onClick={() => setLoading(true)}
            >
                {children}
            </LoaderButton>
        </div>
    )
}

export default CustomButton
