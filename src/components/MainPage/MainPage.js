import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./MainPage.module.scss"
import Menu from "../Menu/Menu.js"
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen"
import Profile from "../Profile/Profile.js"
import Education from "../Education/Education";
import SKills from "../skills/Skills"
import Footer from "../footer/Footer"

const MainPage = () => {

    const profileRef = useRef(null)
    const educationeRef = useRef(null)
    const skillsRef= useRef (null)
    const footerRef = useRef (null)
    const profileScroll = () =>{
        profileRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const educationScroll = () =>{
        educationeRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const skillScroll = () =>{
        skillsRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const footerScroll = () =>{
        footerRef.current.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <div >
            <Menu
                profileRef = {profileScroll}
                educationRef = {educationScroll}
                skillRef = {skillScroll}
                footerRef = {footerScroll}
            />
            <WelcomeScreen/>
            <div ref={profileRef}></div>
            <Profile />
            <div ref={educationeRef}>
            </div>
            <Education/>
            <div ref={skillsRef}>
            </div>
            <SKills/>
            <div ref={footerRef}></div>
            <Footer/>
        </div>
    )
}

export default  MainPage;