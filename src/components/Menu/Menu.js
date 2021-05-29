import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Menu.module.scss"




const menu = (props) =>{

    return(
        <>
            <div className={classes.menu}>
                <div onClick={props.profileRef} style={{"marginLeft": 150}} className={classes.menuButton}>
                    Profile
                    <div className={classes.line}/>
                </div>
                <div onClick={props.educationRef} className={classes.menuButton}>
                    Education
                    <div className={classes.line}/>
                </div>
                <div onClick={props.skillRef} className={classes.menuButton}>
                    My skills
                    <div className={classes.line}/>
                </div>
                <div onClick={props.footerRef} className={classes.menuButton}>
                    Contacts
                    <div className={classes.line}/>
                </div>
            </div>
        </>
    )

}


export default  menu;