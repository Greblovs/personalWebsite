import React from "react"
import classes from "./Footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FaTelegram } from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {FaInstagram} from 'react-icons/fa'



const footer = () =>{

    return(
        <div className={classes.footer}>
            <div className={classes.circle}>
                <FontAwesomeIcon style={{"marginTop": "35px"}} className={"fa-5x"} color={"white"} icon={faAddressBook} />
            </div>
            <div className={classes.title}>
                Contacts
            </div>
            <div className={classes.line}></div>
            <div className={classes.contactsWrapper}>
                <div className={classes.cols}>
                    <div className={classes.entry}>
                        < FaTelegram color ={"white"} className={"fa-2x " + classes.contactItem}/>
                        <span className={classes.contactText}> @Skycat0001</span>
                    </div>
                    <div className={classes.entry}>
                        < FaLinkedin color ={"white"} className={"fa-2x " + classes.contactItem}/>
                        <span className={classes.contactText}> https://bit.ly/3hZRbpF</span>
                    </div>
                </div>
                <div  className={classes.cols}>
                    <div className={classes.entry}>
                        <FontAwesomeIcon  className={"fa-2x "  + classes.contactItem} color={"white"} icon={faEnvelope} />
                        <span className={classes.contactText}> greblovs@oregonstate.edu</span>
                    </div>
                    <div className={classes.entry}>
                        <FaInstagram color ={"white"} className={"fa-2x " + classes.contactItem}/>
                        <span className={classes.contactText}>s.greblov</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer