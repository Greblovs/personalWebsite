import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./MainPage.module.scss"
import Menu from "../Menu/Menu.js"
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen"
import Profile from "../Profile/Profile.js"
import Education from "../Education/Education";
import SKills from "../skills/Skills"
import Footer from "../footer/Footer"
import Projects from "../myProjects/MyProject.js"
import Hobbies from "../MyHobies/Hobbies";
import Slider from "../sliderphone/SliderPhone"

const MainPage = () => {
    const [state, setState] =useState({
        opened: false
    })

    let width = window.innerWidth
    const profileRef = useRef(null)
    const educationeRef = useRef(null)
    const skillsRef= useRef (null)
    const footerRef = useRef (null)
    const projectRef= useRef (null)
    const hobbiesRef = useRef (null)
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
    const projectScroll = () =>{
        projectRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const hobbiesScroll = () =>{
        hobbiesRef.current.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <div >
            <Menu
               // openMenu = {openMenu}
                profileRef = {profileScroll}
                educationRef = {educationScroll}
                skillRef = {skillScroll}
                footerRef = {footerScroll}
                projectRef = {projectScroll}
                hobbiesRef = {hobbiesScroll}
            />

            <WelcomeScreen/>
            <div ref={profileRef}/>
            <Profile />
            <div ref={educationeRef}>
            </div>
            <Education/>
            <div ref={skillsRef}>
            </div>
            <SKills/>
            <div ref={projectRef}/>
            <Projects/>

            {width < 1024 ?
                <>
                    <div ref={hobbiesRef}/>
                    <Slider/>
                </>
                :
                <>
                    <div ref={hobbiesRef}/>
                    <Hobbies/>
                </>
            }

            <div ref={footerRef}/>
            <Footer/>
        </div>
    )
}

export default  MainPage;