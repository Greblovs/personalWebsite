import classes from "./Profile.module.scss";
import React from "react";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";


const profile = () =>{
return(
    <div>

        <div className={classes.profile}>
            <p className={classes.title}>About Me</p>
            <p className={classes.subTitle}>Sophomore student at Oregon State University</p>
            <p className={classes.subTitle}> majoring in Computer science, Artificial Intelligence and Robotics</p>
            <div className={classes.line}></div>
            <div className={classes.biography}>
                An ambitious sophomore student with very strong analytical and interpersonal skills studying computer science & robotics. Have experience in programming and web development, participated in multiple international robotics competitions. Looking of internship opportunities in relevant spheres.
            </div>
            <div className={classes.circleWrapper}>
                <div className={classes.circle}>
                </div>
            </div>
            <div className={classes.info}>
                <p className={classes.innerTitle}>Information</p>
                <p className={classes.innerSubTitle}>Location</p>
                Corvallis, Oregon 97333
                <p className={classes.innerSubTitle}>Age</p>
                18 years
                <p className={classes.innerSubTitle}>Email</p>
                greblovs@oregonstate.edu
            </div>
        </div>
    </div>
    )
}

export default profile