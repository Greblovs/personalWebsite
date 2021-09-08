import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./SliderPhone.module.scss"


const Skills = ()=>{

    let title = ""
    const [state, setState] =useState({
        objects: 0
    })
    let magClasses = []
    magClasses.push(classes.magazine)
    magClasses.push(classes.active1)
    let firstButton = classes.button
    let secondButton = classes.button
    let thirdButton = classes.button
    let forthButton = classes.button
    if (state.objects === 0){
        title = "Photography"
        firstButton = classes.buttonActive
        magClasses.pop()
        magClasses.push(classes.active1)
    }
    if (state.objects === 1){
        title = "Sports"
        secondButton = classes.buttonActive
        magClasses.pop()
        magClasses.push(classes.active2)
    }
    if (state.objects === 2){
        title = "Yachting"
        thirdButton = classes.buttonActive
        magClasses.pop()
        magClasses.push(classes.active3)
    }
    if (state.objects === 3){
        title = "Traveling"
        forthButton = classes.buttonActive
        magClasses.pop()
        magClasses.push(classes.active4)
    }

    const openNext = useCallback(() =>{
        setState((prev)=>{
            if (prev.objects !== 3) {
                return {
                    objects: prev.objects + 1
                }
            }else{
                 return {
                     objects: 0
                 }
            }
        })

    },[])


    console.log(state.objects)
    return(
        <div className={classes.wrapper}>
            <div className={classes.title}>
                My  Hobbies
            </div>
            <div onClick={openNext} className={classes.slider}>
                <div className={classes.textTitle}>
                    {title}
                </div>
                <div className={classes.wrapperText}>
                </div>
                <div className={classes.buttons}>
                    <div className={firstButton}></div>
                    <div className={secondButton}></div>
                    <div className={thirdButton}></div>
                    <div className={forthButton}></div>
                </div>
                <div className={magClasses.join(" ")}>

                    <div className={classes.element + " " + classes.first}></div>
                    <div className={classes.element + " " + classes.second}></div>
                    <div className={classes.element + " " + classes.third}></div>
                    <div className={classes.element + " " + classes.forth}></div>
                </div>
            </div>
        </div>
    )
}


export default Skills