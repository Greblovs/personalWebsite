import React from "react"
import classes from "./Footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FaTelegram } from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {FaInstagram} from 'react-icons/fa'



const footer = () =>{
    let width = window.innerWidth
    return(
        <div className={classes.footer}>
            <div className={classes.circle}>
                <FontAwesomeIcon style={{"marginTop": "35px"}} className={"fa-5x"} color={"white"} icon={faAddressBook} />
            </div>
            <div className={classes.title}>
                Contacts
            </div>
            <div className={classes.line}></div>
            {width > 1023 ?
                <div className={classes.contactsWrapper}>
                    <div className={classes.cols}>
                        <div className={classes.entry}>
                            < FaTelegram color={"white"} className={"fa-2x " + classes.contactItem}/>
                            <a href = " https://t.me/Skycat0001">
                                <span className={classes.contactText}> @Skycat0001</span>
                            </a>
                        </div>
                        <div className={classes.entry}>
                            < FaLinkedin color={"white"} className={"fa-2x " + classes.contactItem}/>
                            <span className={classes.contactText}>
                                < a href ="https://bit.ly/3hZRbpF"> https://bit.ly/3hZRbpF
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className={classes.cols}>
                        <div className={classes.entry}>
                            <FontAwesomeIcon className={"fa-2x " + classes.contactItem} color={"white"}
                                             icon={faEnvelope}/>
                            <span className={classes.contactText}>
                                 <a href="mailto:greblovs@oregonstate.edu">greblovs@oregonstate.edu</a>
                            </span>
                        </div>
                        <div className={classes.entry}>
                            <FaInstagram color={"white"} className={"fa-2x " + classes.contactItem}/>
                            <span className={classes.contactText}>
                                <a href = "https://www.instagram.com/s.greblov/ "> s.greblov
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                :
                <div  className={classes.phoneWrapper}>
                    <div style={{width: "260px"}} className={classes.phoneEntry}>
                        < FaLinkedin color={"white"} className={"fa-2x " + classes.contactItem}/>
                        <span  style={{marginLeft: "10px"}} className={classes.contactText}>
                            <a href ="https://bit.ly/3hZRbpF"> https://bit.ly/3hZRbpF
                            </a>
                        </span>
                    </div>
                    <div style={{width: "280px"}}  className={classes.phoneEntry}>
                        <FontAwesomeIcon className={"fa-2x " + classes.contactItem} color={"white"}
                                         icon={faEnvelope}/>
                        <span  style={{marginLeft: "10px"}} className={classes.contactText}>
                            <a href = "mailto:greblovs@oregonstate.edu">
                                greblovs@oregonstate.edu
                            </a>
                        </span>
                    </div>
                    <div style={{width: "125px"}}  className={classes.phoneEntry}>
                        <FaInstagram color={"white"} className={"fa-2x " + classes.contactItem}/>
                         <a href = "https://www.instagram.com/s.greblov/ ">
                            <span  style={{marginLeft: "10px"}} className={classes.contactText}>s.greblov</span>
                        </a>
                    </div>
                    <div style={{width: "160px"}}  className={classes.phoneEntry}>
                        < FaTelegram color={"white"} className={"fa-2x " + classes.contactItem}/>
                        <span style={{marginLeft: "10px"}} className={ classes.contactText}>
                            <a href = " https://t.me/Skycat0001">@Skycat0001
                            </a>
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default footer