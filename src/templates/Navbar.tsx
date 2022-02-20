import * as React from "react"
import "./Navbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHome,
    faStar,
    faBriefcase,
    faCubes,
    faUser
} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return <nav id="navbar">
        <label>
            <a className="navbarTitle" href="#">SYSMA</a>
        </label>
        <div>
            <a className="navbarItem" href="#">
                <FontAwesomeIcon className="navbarItemIcon" icon={faHome} />
                Home
            </a>
            <a className="navbarItem" href="#skills">
                <FontAwesomeIcon className="navbarItemIcon" icon={faStar} />
                Skills
            </a>
            <a className="navbarItem" href="#">
                <FontAwesomeIcon className="navbarItemIcon" icon={faBriefcase} />
                Works
            </a>
            <a className="navbarItem" href="#">
                <FontAwesomeIcon className="navbarItemIcon" icon={faCubes} />
                Projects
            </a>
            <a className="navbarItem" href="#">
                <FontAwesomeIcon className="navbarItemIcon" icon={faUser} />
                Contact
            </a>
        </div>
    </nav>
}

export { Navbar }