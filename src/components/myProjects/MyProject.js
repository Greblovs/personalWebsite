import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./MyProject.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faTools } from '@fortawesome/free-solid-svg-icons'


const Projects = () => {

    let width = window.innerWidth


    return(
        <div className={classes.project}>
            <div className={classes.circle}>
                <FontAwesomeIcon style={{"marginTop": "35px"}} className={"fa-5x"} color={"white"} icon={faTools} />
            </div>
            <p className={classes.title}>My Projects</p>
            <div className={classes.line}></div>
            <div className={classes.projectsWrapper}>
                <div className={classes.entery}>
                    <div className={classes.enteryText}>
                        <br/>
                        <span className={classes.innerTitle}>
                            Personal Website
                        </span>
                        <div className={classes.line}></div>
                        <div className={classes.wrapper}>
                            <div style={{"background-color": "red"}} className={classes.text}>JavaScript</div>
                            <div style={{"background-color": "blue"}} className={classes.textSecond}>React</div>
                            <div style={{"background-color": "green"}}className={classes.textSecond}>CSS</div>
                            <div style={{"background-color": "purple"}}className={classes.text}>HTML</div>
                        </div>
                    </div>
                </div>
                {width < 1024 ?
                <div style={{marginTop: "50px"}} className={classes.entery}>
                    <div className={classes.enteryText}>
                        <br/>
                        <span className={classes.innerTitle}>
                            University Rover Challenge
                        </span>
                        <div className={classes.line}></div>
                    </div>
                </div>
                    :
                    <div  className={classes.entery}>
                        <div className={classes.enteryText}>
                            <br/>
                            <span className={classes.innerTitle}>
                                University Rover Challenge
                            </span>
                            <div className={classes.line}></div>
                            <div className={classes.wrapper}>
                                <div style={{"background-color": "red"}} className={classes.text}>Python</div>
                                <div style={{"background-color": "blue"}} className={classes.textSecond}>C++</div>
                                <div style={{"background-color": "green"}}className={classes.textSecond}>ROS</div>
                                <div style={{"background-color": "purple"}}className={classes.text}>OpenCV</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className={classes.projectsWrapper}>
                <div className={classes.entery}>
                    <div className={classes.enteryText}>
                        <br/>
                        <span className={classes.innerTitle}>
                            Self Driving Car
                        </span>
                        <div className={classes.line}></div>
                        <div className={classes.wrapper}>
                            <div style={{"background-color": "red"}} className={classes.text}>Arduino</div>
                            <div style={{"background-color": "blue"}} className={classes.textSecond}>Filtering</div>
                            <div style={{"background-color": "green"}}className={classes.textSecond}>C++</div>
                            <div style={{"background-color": "purple"}}className={classes.text}>Sensors</div>
                        </div>
                    </div>
                </div>
                {width < 1024 ?
                    <div style={{marginTop: "50px"}} className={classes.entery}>
                        <div className={classes.enteryText}>
                            <br/>
                            <span className={classes.innerTitle}>
                                Linux-like console
                            </span>
                            <div className={classes.line}></div>

                        </div>
                    </div>
                    :
                    <div className={classes.entery}>
                        <div className={classes.enteryText}>
                            <br/>
                            <span className={classes.innerTitle}>
                                Linux-like console
                            </span>
                            <div className={classes.line}></div>
                            <div className={classes.wrapper}>
                                <div style={{"background-color": "red"}} className={classes.text}>C</div>
                                <div  style={{"background-color": "blue", "width": "130px"}} className={classes.textSecond}>Multithreading</div>
                                <div style={{"background-color": "green"}}className={classes.textSecond}>Git</div>
                                <div style={{"background-color": "purple"}}className={classes.text}>Signals</div>
                                <div style={{"background-color": "orange"}}className={classes.textSecond}>Forks</div>
                            </div>
                        </div>
                    </div>
                }
            </div>


        </div>
    )
}

export default Projects;