import React, { Dispatch, SetStateAction, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUser,
    faStar,
    faBriefcase,
    faCubes,
    faInbox,
    faBars
} from "@fortawesome/free-solid-svg-icons"

import "./index.scss"

const Navbar = (props: {
    language: any,
    setLanguage: Dispatch<SetStateAction<any>>,

    spanish: any,
    english: any
}) => {
    const {
        language, setLanguage,

        spanish,
        english
    } = props

    const [showItems, setShowItems] = useState(false)

    const _setShowItems = () => setShowItems(!showItems)

    const clickLanguage = (language: string) => {
        if (language === "en") setLanguage(english)
        else if (language === "es") setLanguage(spanish)
    }
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

    return <nav id="menu" className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a id="title" className="navbar-item" href="/">
                SYSMA
            </a>

            <a role="button" className={`navbar-burger ${showItems && "is-active"}`} aria-label="menu"
                aria-expanded="false" data-target="navbarBasicExample"
                onClick={_setShowItems}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${showItems && "is-active"}`}>
            <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        {language.navbar.language}
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item"
                            onClick={() => clickLanguage("en")}>
                            {language.navbar.english}
                        </a>
                        <a className="navbar-item"
                            onClick={() => clickLanguage("es")}>
                            {language.navbar.spanish}
                        </a>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <a className="navbar-item" href="#about"
                    onClick={clickItem}>
                    <FontAwesomeIcon className="navbarItemIcon" icon={faUser} />
                    {language.navbar.about}
                </a>
                <a className="navbar-item" href="#skills"
                    onClick={clickItem}>
                    <FontAwesomeIcon className="navbarItemIcon" icon={faStar} />
                    {language.navbar.skills}
                </a>
                {/* <a className="navbar-item" href="#works"
                    onClick={clickItem}>
                    <FontAwesomeIcon className="navbarItemIcon" icon={faBriefcase} />
                    Works
                </a> */}
                <a className="navbar-item" href="#projects"
                    onClick={clickItem}>
                    <FontAwesomeIcon className="navbarItemIcon" icon={faCubes} />
                    {language.navbar.projects}
                </a>
                <a className="navbar-item" href="#contact"
                    onClick={clickItem}>
                    <FontAwesomeIcon className="navbarItemIcon" icon={faInbox} />
                    {language.navbar.contacts}
                </a>
            </div>
        </div>
    </nav>
}

export { Navbar }