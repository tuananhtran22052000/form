import React from "react";
import classes from './Default.module.scss'
import Navbar from 'react-bootstrap/Navbar'

import {
    Link,
    NavLink,
} from 'react-router-dom'

const Header = () =>{
    return(
        <>
            <div className={classes.topNav}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} exact to="/">home</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to="/product">product</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to="/about">about</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to="/map">list</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to="/useContext">useContext</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to='/ButtomComponent'> ButtomComponent</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to='/Practice'> Practice</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to='/Scss'>Blog</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to='/form'>Form</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to='/todoUser'>Todo user</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to='/form-upload'>form upload</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to='/select'>select</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to='/axios'>Axios</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to='/AntDesign'>Test Ant Design</NavLink>
            </div>
        </>
    )
}
export default Header