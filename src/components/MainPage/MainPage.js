import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./MainPage.module.scss"
import Menu from "../Menu/Menu.js"
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen"
import Profile from "../Profile/Profile.js"
import Education from "../Education/Education";
import SKills from "../skills/Skills"


const mainPage = () => {




    return(
        <div >
            <Menu/>
            <WelcomeScreen/>
            <Profile/>
            <Education/>
            <SKills/>
        </div>
    )
}

export default  mainPage;