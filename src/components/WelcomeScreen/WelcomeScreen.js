import classes from "./WelcomeScreen.module.scss";
import React from "react";


const welcomeScreen = () => {

    let width = window.innerWidth

    return(
        <div className={classes.opening}>

            <div className={classes.imgCover}>
            </div>
            <div className={classes.image}>
                {width > 1023 ?
                    <div className={classes.startText}>
                        <div className={classes.Title}>
                            <span>Sergiy Greblov</span>
                        </div>
                        <div className={classes.subTitle}>
                            <span>Computer Science Specialist</span>
                        </div>
                    </div>
                :
                    <div className={classes.phoneText}>
                        <div className={classes.phoneTitle}>
                            Sergiy Greblov

                        </div>
                        <div className={classes.line}></div>
                        <div className={classes.phoneSubTitle}>
                            Computer Science Specialist
                        </div>
                    </div>

                }
            </div>

        </div>
    )
}

export default welcomeScreen