import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Hobbies.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Hobbies = () =>{

    const [state, setState] =useState({
        first: 0,
        second: 0,
        third: 0,
        forth: 0
    })


    let firstHobby = []
    let secondHobby = []
    let thirdHobby = []
    let forthHobby = []


    firstHobby.push(classes.first)
    secondHobby.push(classes.second)
    thirdHobby.push(classes.third)
    forthHobby.push(classes.forth)

    firstHobby.push(classes.hobby)
    secondHobby.push(classes.hobby)
    thirdHobby.push(classes.hobby)
    forthHobby.push(classes.hobby)
    if (state.first === 1){
        firstHobby.pop();
        secondHobby.pop();
        thirdHobby.pop();
        forthHobby.pop();
        firstHobby.push(classes.hobbyOpened)
        secondHobby.push(classes.hobbyClosed)
        thirdHobby.push(classes.hobbyClosed)
        forthHobby.push(classes.hobbyClosed)
    }
    if (state.second === 1){
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
        firstHobby.pop();
        secondHobby.pop();
        thirdHobby.pop();
        forthHobby.pop();
        firstHobby.push(classes.hobbyClosed)
        secondHobby.push(classes.hobbyClosed)
        thirdHobby.push(classes.hobbyClosed)
        forthHobby.push(classes.hobbyOpened)
    }

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
                    forth: 1
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
            <div className={classes.hobbyWrapper}>
                <div onMouseEnter={enterFirst} onMouseLeave={mouseOut}
                    className={firstHobby.join(" ")}>
                </div>
                <div onMouseEnter={enterSecond} onMouseLeave={mouseOut}
                    className={secondHobby.join(" ")}>
                </div>
                <div onMouseEnter={enterThird} onMouseLeave={mouseOut}
                    className={thirdHobby.join(" ")}>
                </div>
                <div onMouseEnter={enterForth} onMouseLeave={mouseOut}
                    className={forthHobby.join(" ")}>
                </div>
            </div>
        </div>
    )
}

export default Hobbies