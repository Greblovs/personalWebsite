import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Menu.module.scss"




const menu = () =>{

    return(
        <>
            <div className={classes.menu}>
                <div style={{"marginLeft": 150}} className={classes.menuButton}>
                    About myself
                    <div className={classes.line}/>
                </div>
                <div className={classes.menuButton}>
                    My Interests
                    <div className={classes.line}/>
                </div>
                <div className={classes.menuButton}>
                    My skills
                    <div className={classes.line}/>
                </div>

            </div>
        </>
    )

}


export default  menu;