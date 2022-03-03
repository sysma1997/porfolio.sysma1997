import * as React from "react"
const { useState, useEffect } = React

import "./index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUser,
    faStar,
    faBriefcase,
    faCubes,
    faInbox,
    faBars
} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const [showItems, setShowItems] = useState(false)

    const _setShowItems = () => setShowItems(!showItems)

    const clickResponse = () => {
        const items = document.getElementById("items")

        if (showItems) {
            _setShowItems()
            items.style.display = "none"
        }
        else {
            _setShowItems()
            items.style.display = "flex"
        }
    }
    const clickItem = () => {
        if (screen.width > 1024) return;

        const items = document.getElementById("items")

        _setShowItems()
        items.style.display = "none"
    }

    return <nav id="navbar">
        <div className="navbarTitle">
            <a className="navbarTitleLink" href="#">SYSMA</a>
            <button className="navbarResponsive" onClick={clickResponse}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
        <div id="items" className="navbarItems">
            <a className="navbarItem" href="#about"
                onClick={clickItem}>
                <FontAwesomeIcon className="navbarItemIcon" icon={faUser} />
                About
            </a>
            <a className="navbarItem" href="#skills"
                onClick={clickItem}>
                <FontAwesomeIcon className="navbarItemIcon" icon={faStar} />
                Skills
            </a>
            <a className="navbarItem" href="#works"
                onClick={clickItem}>
                <FontAwesomeIcon className="navbarItemIcon" icon={faBriefcase} />
                Works
            </a>
            <a className="navbarItem" href="#projects"
                onClick={clickItem}>
                <FontAwesomeIcon className="navbarItemIcon" icon={faCubes} />
                Projects
            </a>
            <a className="navbarItem" href="#contact"
                onClick={clickItem}>
                <FontAwesomeIcon className="navbarItemIcon" icon={faInbox} />
                Contact
            </a>
        </div>
    </nav>
}

export { Navbar }