import React from "react";
import classes from './Default.module.scss'

import Header from './Header'
import Effect from "../components/Effect";
import TestEffecct from '../../TestEffect'
import Home from '../Home'
import TestComponent from './TestComponent'
import MapComponent from '../HomeRouter/MapComponent'
import UseContext from '../components/UseContext/UseContext'
import ButtomComponent from './ButtomComponent'
import Practice from './Practice'
import Blog from './Blog'
import Mobx from './mobx/Mobx'
import CreateForm from '../createForm'
import TodoUser from '../createForm/TodoUser'
import FormRegister from '../createForm/FormRegister'
import FormUpload from '../createForm/FormUpload'
import SelectDropdown from '../../componentForm/SelectDropdown'
import CallApi from '../HomeRouter/CallApi'
import TestAntDesign from './TestAntDesign'


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'



const Default = () => {
    return(
        <>
            
            <Router>
                <div className={classes.header}>
                    <Header />
                </div>
                <div className={classes.Route}>
                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route  path='/product'><TestEffecct /></Route>
                        <Route  path='/about'><Effect  /></Route>
                        <Route  path='/map'><MapComponent  /></Route>
                        <Route  path='/useContext'><UseContext  /></Route>
                        <Route  path='/ButtomComponent'><ButtomComponent /></Route>
                        <Route  path='/Practice'><Practice /></Route>
                        <Route  path='/axios'><CallApi /></Route>
                        <Route  path='/Scss'><Blog /></Route>
                        <Route  path='/form'><CreateForm /></Route>
                        <Route  path='/todoUser'><TodoUser /></Route>
                        <Route  path='/form-upload'><FormUpload /></Route>
                        <Route  path='/select'><Mobx /></Route>
                        <Route  path='/AntDesign'><TestAntDesign /></Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}
export default Default