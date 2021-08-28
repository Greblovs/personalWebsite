import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Skills.module.scss"


const skills = ()=>{


    const el = (num) =>{
        let arr = [];
        for (let i = 0; i<num; i++){
            arr.push(
                <div className={classes.mark}>
                </div>
            )
        }
        for (let i = 0; i< 5-num; i++){
            arr.push(
                <div className={classes.emptyMark}>

                </div>
            )
        }
        return(
            arr
        )
    }
    let width = window.innerWidth

    return(
        <div className={classes.skill}>
            <div className={classes.title}>
                Skills
            </div>
            <div className={classes.skill_wrapper}>
                <div className={classes.skills}>
                    <div className={classes.innerTitle}>
                        Web Development
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.Entery}>
                        HTML/CSS
                        <div className={classes.rating}>
                            {el(5)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        ReactJS
                        <div className={classes.rating}>
                            {el(4)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        SQL
                        <div className={classes.rating}>
                            {el(3)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        NodeJS
                        <div className={classes.rating}>
                            {el(3)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        PHP
                        <div className={classes.rating}>
                            {el(2)}
                        </div>
                    </div>
                    <div style ={{"marginTop": "30px"}} className={classes.innerTitle}>
                        Data Analysis
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.Entery}>
                        NumPy
                        <div className={classes.rating}>
                            {el(3)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        Matplotlib
                        <div className={classes.rating}>
                            {el(3)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        Processing
                        <div className={classes.rating}>
                            {el(2)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        R
                        <div className={classes.rating}>
                            {el(2)}
                        </div>
                    </div>
                    <div style ={{"marginTop": "30px"}} className={classes.innerTitle}>
                        Testing
                        <div className={classes.line}></div>
                    </div><div className={classes.Entery}>
                    Unittest
                    <div className={classes.rating}>
                        {el(4)}
                    </div>
                </div>
                    <div className={classes.Entery}>
                        JUnit
                        <div className={classes.rating}>
                            {el(2)}
                        </div>
                    </div>
                </div>
                <div className={classes.skills}>
                    <div className={classes.innerTitle}>
                        Programing Skills
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.Entery}>
                        C++
                        <div className={classes.rating}>
                            {el(5)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        JavaScript
                        <div className={classes.rating}>
                            {el(5)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        C
                        <div className={classes.rating}>
                            {el(4)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        Python
                        <div className={classes.rating}>
                            {el(4)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        MASM
                        <div className={classes.rating}>
                            {el(2)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        Java
                        <div className={classes.rating}>
                            {el(2)}
                        </div>
                    </div>
                    <div style ={{"marginTop": "30px"}} className={classes.innerTitle}>
                        Robotics
                        <div className={classes.line}></div>
                    </div>

                    <div className={classes.Entery}>
                        Arduino
                        <div className={classes.rating}>
                            {el(5)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        Raspberry PI
                        <div className={classes.rating}>
                            {el(4)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        OpenCV
                        <div className={classes.rating}>
                            {el(4)}
                        </div>
                    </div>
                    <div className={classes.Entery}>
                        ROS
                        <div className={classes.rating}>
                            {el(3)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skills