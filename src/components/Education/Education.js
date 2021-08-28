import classes from "./Education.module.scss"
import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'


const education = () =>{
        let width = window.innerWidth
        return (
            <>
            {width > 1023 ?
                <div className={classes.education}>
                    <div className={classes.circle}>
                        <FontAwesomeIcon style={{"marginTop": "35px"}} className={"fa-5x"} color={"white"}
                                         icon={faUniversity}/>
                    </div>
                    <p className={classes.title}>Education</p>
                    <div className={classes.line}>
                    </div>
                    <div style={{"marginTop": "50px"}} className={classes.educationEnt}>
                        <div className={classes.leftPart}>
                            Sep 2019 - present
                        </div>
                        <div className={classes.rightPart}>
                            <b>Oregon State University</b>, OR, Corvallis <br/>
                            BS in Computer Science, current GPA 3.98
                        </div>
                    </div>
                    <div className={classes.educationEnt}>
                        <div className={classes.leftPart}>
                            Sep 2015 - May 2019
                        </div>
                        <div className={classes.rightPart}>
                            <b>Lyceum “Leader”</b>, Ukraine, Kyiv <br/>
                            Top 5 high school in Ukraine with focus on STEM
                        </div>
                    </div>
                </div>
                :
                <>
                    <div className={classes.education}>
                        <div className={classes.circle}>
                            <FontAwesomeIcon style={{"marginTop": "35px"}} className={"fa-5x"} color={"white"}
                                             icon={faUniversity}/>
                        </div>
                        <div  style={{marginTop: "260px"}} className={classes.phoneEntry}>
                            <div className={classes.leftPhone}>
                                Sep 2019 - present
                            </div>
                            <div className={classes.rightPhone}>
                                <b>Oregon State University</b>, OR, Corvallis <br/>
                                BS in Computer Science, current GPA 3.98
                            </div>
                        </div>
                        <div  style={{marginTop: "40px"}} className={classes.phoneEntry}>
                            <div className={classes.leftPhone}>
                                Sep 2015 - May 2019
                            </div>
                            <div className={classes.rightPhone}>
                                <b>Lyceum “Leader”</b>, Ukraine, Kyiv <br/>
                                Top 5 high school in Ukraine with focus on STEM
                            </div>
                        </div>
                    </div>
                </>
            }
            </>
        )

}

export default education