import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {Logout} from "../actions";
import {AppBar,
        SearchIcon,
        Button,
        TextField,
        makeStyles
        } from '@material-ui/core';
import App from "../App";

const navStyle = makeStyles(theme => {
    //styles for the nav bar 
});


export const NavMenu = props => {

     Logout = e => {
    e.preventDefault();
    props.logout();
    props.history.push(`/`);
    }

    return(
        <AppBar>
            
        </AppBar>
    )
}





