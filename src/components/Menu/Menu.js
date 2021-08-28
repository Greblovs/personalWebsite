import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Menu.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook, faBars} from '@fortawesome/free-solid-svg-icons'


const Menu = (props) =>{
    const [state, setState] =useState({
        opened: false
    })
    let menuOpenClasses = []


    let width = window.innerWidth
    let menuClasses = []
    menuClasses.push(classes.menuTrigger)
    const openClose =
        useCallback( () =>{

            setState((prev) => {
                return{
                    ...prev,
                    opened: !prev.opened
                }
            })
        }, [])

    if (state.opened === true){
        menuClasses.push(classes.rotate)
    }else {
        if (menuClasses.length === 2){
            menuClasses.pop();
        }
    }
    menuOpenClasses.push(classes.menuTarget)

    if (state.opened === true){
        menuOpenClasses.push(classes.menuOpened)
    }else{
        if (menuOpenClasses.length === 2){
            menuOpenClasses.pop()
        }
    }
    return(
        <>
            {width > 1000 ?
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
                    <div onClick={props.projectRef} className={classes.menuButton}>
                        My Projects
                        <div className={classes.line}/>
                    </div>
                    <div onClick={props.hobbiesRef} className={classes.menuButton}>
                        Hobbies
                        <div className={classes.line}/>
                    </div>
                    <div onClick={props.footerRef} className={classes.menuButton}>
                        Contacts
                        <div className={classes.line}/>
                    </div>
                </div>
                :
                <div className={classes.menuPhone}>
                    <FontAwesomeIcon onClick = {openClose}  className={"fa-3x " + menuClasses.join(" ") } color={"white"} icon={faBars} />
                </div>
            }
            {width > 1023 ?
                <></>
                :
                <div className={menuOpenClasses.join(" ")}>
                    <div onClick = {
                        ()=>{
                            props.profileRef()
                            openClose()
                        }
                    }
                     className={classes.menButton}>
                        Profile
                    </div>
                    <div onClick = {
                        ()=>{
                            props.educationRef()
                            openClose()
                        }
                    }
                         className={classes.menButton}>
                        Education
                    </div>
                    <div onClick = {
                        ()=>{
                            props.skillRef()
                            openClose()
                        }
                    }
                         className={classes.menButton}>
                        My Skills
                    </div>
                    <div onClick = {
                                      ()=>{
                                          props.projectRef()
                                          openClose()
                                      }
                                  }
                                  className={classes.menButton}>
                        My Projects
                    </div>
                    <div onClick = {
                ()=>{
                    props.hobbiesRef()
                    openClose()
                }
            }
                className={classes.menButton}>
                        Hobbies
                    </div>
                    <div onClick = {
                        ()=>{
                            props.footerRef()
                            openClose()
                        }
                    }
                         className={classes.menButton}>
                        Contacts
                    </div>
                </div>
            }
        </>
    )

}


export default  Menu;