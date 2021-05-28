import classes from "./WelcomeScreen.module.scss";
import React from "react";


const welcomeScreen = () => {

    return(
        <div className={classes.opening}>
            <div className={classes.imgCover}>
            </div>
            <div className={classes.image}>
                <div className={classes.startText}>
                    <div className={classes.Title}>
                        <span>Sergiy Greblov</span>
                    </div>
                    <div className={classes.subTitle}>
                        <span>Computer Science Specialist</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default welcomeScreen