import * as React from "react"
import "./index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUser,
    faStar,
    faBriefcase,
    faCubes,
    faInbox
} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return <nav id="navbar">
        <label>
            <a className="navbarTitle" href="#">SYSMA</a>
        </label>
        <div>
            <a className="navbarItem" href="#about">
                <FontAwesomeIcon className="navbarItemIcon" icon={faUser} />
                About
            </a>
            <a className="navbarItem" href="#skills">
                <FontAwesomeIcon className="navbarItemIcon" icon={faStar} />
                Skills
            </a>
            <a className="navbarItem" href="#works">
                <FontAwesomeIcon className="navbarItemIcon" icon={faBriefcase} />
                Works
            </a>
            <a className="navbarItem" href="#projects">
                <FontAwesomeIcon className="navbarItemIcon" icon={faCubes} />
                Projects
            </a>
            <a className="navbarItem" href="#contact">
                <FontAwesomeIcon className="navbarItemIcon" icon={faInbox} />
                Contact
            </a>
        </div>
    </nav>
}

export { Navbar }