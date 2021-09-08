import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Hobbies.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Hobbies = () =>{

    const [state, setState] =useState({
        first: 0,
        second: 0,
        third: 0,
        forth: 0,
        exit: 1,
        canReload: 1,
    })

    let titleText = ""

    let firstHobby = []
    let secondHobby = []
    let thirdHobby = []
    let forthHobby = []

    let titleWrapper = []
    let titleClasses = []

    titleWrapper.push(classes.titleUnique)
    titleClasses.push(classes.titleText)
    firstHobby.push(classes.first)
    secondHobby.push(classes.second)
    thirdHobby.push(classes.third)
    forthHobby.push(classes.forth)

    firstHobby.push(classes.hobby)
    secondHobby.push(classes.hobby)
    thirdHobby.push(classes.hobby)
    forthHobby.push(classes.hobby)
    if (state.first === 1){
        titleText = "Photography"
        firstHobby.pop();
        secondHobby.pop();
        thirdHobby.pop();
        forthHobby.pop();
        titleWrapper.push(classes.uniqueDisplayed)
        titleClasses.push(classes.titleDisplayed)
        firstHobby.push(classes.hobbyOpened)
        secondHobby.push(classes.hobbyClosed)
        thirdHobby.push(classes.hobbyClosed)
        forthHobby.push(classes.hobbyClosed)
    }
    if (state.second === 1){
        titleText = "Sports"
        titleWrapper.push(classes.uniqueDisplayed)
        titleClasses.push(classes.titleDisplayed)
        firstHobby.pop();
        secondHobby.pop();
        thirdHobby.pop();
        forthHobby.pop();
        firstHobby.push(classes.hobbyClosed)
        secondHobby.push(classes.hobbyOpened)
        thirdHobby.push(classes.hobbyClosed)
        forthHobby.push(classes.hobbyClosed)
    }
    if (state.third === 1){
        titleText = "Yachting"
        titleWrapper.push(classes.uniqueDisplayed)
        titleClasses.push(classes.titleDisplayed)
        firstHobby.pop();
        secondHobby.pop();
        thirdHobby.pop();
        forthHobby.pop();
        firstHobby.push(classes.hobbyClosed)
        secondHobby.push(classes.hobbyClosed)
        thirdHobby.push(classes.hobbyOpened)
        forthHobby.push(classes.hobbyClosed)
    }
    if (state.forth === 1){
        titleText = "Traveling"
        titleWrapper.push(classes.uniqueDisplayed)
        titleClasses.push(classes.titleDisplayed)
        firstHobby.pop();
        secondHobby.pop();
        thirdHobby.pop();
        forthHobby.pop();
        firstHobby.push(classes.hobbyClosed)
        secondHobby.push(classes.hobbyClosed)
        thirdHobby.push(classes.hobbyClosed)
        forthHobby.push(classes.hobbyOpened)
    }
    console.log(state.canReload)
    const clickRight1 =
        useCallback(() =>{


                setState((prev) => {
                    return {
                        ...prev,
                        first: 0,
                        second: 1,
                        canReload: 0
                    }
                })


        },[]
        )
    const clickRight2 =
        useCallback(() => {

                    setState((prev) => {
                        return {
                            ...prev,
                            second: 0,
                            third: 1,
                            canReload: 0
                        }
                    })


            },[]
        )
    const clickRight3 =
        useCallback(() => {

                    setState((prev) => {
                        return {
                            ...prev,
                            third: 0,
                            forth: 1,
                            canReload: 0
                        }
                    })


            },[]
        )
    const clickRight4 =
        useCallback(() => {

                    setState((prev) => {
                        return {
                            ...prev,
                            forth: 0,
                            first: 1,
                            canReload: 0
                        }
                    })


            },[]
        )



    const clickLeft1 =
        useCallback(() => {

                    setState((prev) => {
                        return {
                            ...prev,
                            first: 0,
                            forth: 1,
                            canReload: 0
                        }
                    })
            },[]
        )
    const clickLeft2 = useCallback(() => {

                setState((prev) => {
                    return {
                        ...prev,
                        second: 0,
                        first: 1,
                        canReload: 0
                    }
                })
        },[]
        )
    const clickLeft3 =
        useCallback(() => {

                    setState((prev) => {
                        return {
                            ...prev,
                            third: 0,
                            second: 1,
                            canReload: 0
                        }
                    })
            },[]
        )
    const clickLeft4 =
        useCallback(() => {

                    setState((prev) => {
                        return {
                            ...prev,
                            forth: 0,
                            third: 1,
                            canReload: 0
                        }
                    })
            },[]
        )

    const enterFirst =
        useCallback(()=>{
            console.log("dfdsf")
            setState((prev) =>{
                return{
                    ...prev,
                    first: 1,
                    second: 0,
                    third: 0,
                    forth: 0
                }
            })
        }, [])


    const enterSecond =
        useCallback(()=>{
            setState((prev) =>{
                return{
                    ...prev,
                    first: 0,
                    second: 1,
                    third: 0,
                    forth: 0
                }
            })
        }, [])


    const enterThird =
        useCallback(()=>{
            setState((prev) =>{
                return{
                    ...prev,
                    first: 0,
                    second: 0,
                    third: 1,
                    forth: 0
                }
            })
        }, [])


    const enterForth =
        useCallback(()=>{

                setState((prev) =>{
                    return{
                        ...prev,
                        first: 0,
                        second: 0,
                        third: 0,
                        forth: 1,
                        canReload: 0
                    }
                })
        }, [])


    const mouseOut =
        useCallback(()=>{
            setState((prev) =>{
                return{
                    ...prev,
                    first: 0,
                    second: 0,
                    third: 0,
                    forth: 0
                }
            })
        }, [])


    return(

        <div className={classes.hobbies}>
            <div className={classes.title}>
                My  Hobbies
            </div>
            <div onMouseLeave={mouseOut} className={classes.hobbyWrapper}>
                <FontAwesomeIcon onClick = {()=>{
                    if (state.first){
                        clickLeft1()
                    }
                    if (state.second){
                        clickLeft2()
                    }
                    if (state.third){
                        clickLeft3()
                    }
                    if (state.forth){
                        clickLeft4()
                    }
                }} className={"fa-5x " + classes.arrowLeft} color={"white"} icon={faAngleLeft} />
                <FontAwesomeIcon  onClick = {() =>{
                    if (state.first){
                        clickRight1()
                    }
                    if (state.second){
                        clickRight2()
                    }
                    if (state.third){
                        clickRight3()
                    }
                    if (state.forth){
                        clickRight4()
                    }
                }} className={"fa-5x " + classes.arrowRight} color={"white"} icon={faAngleRight} />
                <div className={titleWrapper.join(" ")}> </div>
                <div className={titleClasses.join(" ")}>{titleText}</div>
                <div onMouseEnter={enterFirst}
                    className={firstHobby.join(" ")}>
                </div>
                <div onMouseEnter={enterSecond}
                    className={secondHobby.join(" ")}>
                </div>
                <div onMouseEnter={enterThird}
                    className={thirdHobby.join(" ")}>
                </div>
                <div onMouseEnter={enterForth}
                    className={forthHobby.join(" ")}>
                </div>
            </div>
        </div>
    )
}

export default Hobbies