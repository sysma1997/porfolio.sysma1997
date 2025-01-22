import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    fas, faUser, faStar, faCubes, faInbox, faFolder, 
    faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Projects } from "../components/index/Projects";
import { Skills } from "../components/index/Skills";
import { Works } from "../components/index/Works";
import { Contact } from "../components/index/Contact";

import icon from "../assets/images/icon.png";
/* import spanish from "../assets/jsons/es.json";
import english from "../assets/jsons/en.json"; */

import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";

document.title = "SYSMA";

let locale = navigator.language;
try {
    locale = locale.split("-")[0];
} catch { }

library.add(fas, fab);

const App = () => {
    /* const [language, setLanguage] = useState<any>(english); */

    const [showItems, setShowItems] = useState<boolean>(false);
    
    const [currentYear, _] = useState<number>(new Date().getFullYear());
    
    useEffect(() => {
        /* if (locale === "en") setLanguage(english);
        else if (locale === "es") setLanguage(spanish); */
    }, []);

    const _setShowItems = () => setShowItems(!showItems);

    /* const clickLanguage = (language: string) => {
        if (language === "en") setLanguage(english);
        else if (language === "es") setLanguage(spanish);
    }; */
    const clickItem = () => {
        if (screen.width > 1024) return;
        _setShowItems();
    };

    return <>
        <nav id="menu" className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a id="title" className="navbar-item" href="#">
                    <img src={icon} alt="SYSMA" />
                </a>
    
                <a role="button" className={`navbar-burger ${showItems && "is-active"}`} aria-label="menu"
                    aria-expanded="false" data-target="navbarBasicExample"
                    onClick={_setShowItems}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
    
            <div id="navbarBasicExample" className={`navbar-menu ${showItems && "is-active"}`}>
                {/* <div className="navbar-start">
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
                </div> */}
                <div className="navbar-end">
                    <a className="navbar-item" href="#about"
                        onClick={clickItem}>
                        <FontAwesomeIcon className="navbarItemIcon" icon={faUser} />
                        About
                    </a>
                    <a className="navbar-item" href="#projects"
                        onClick={clickItem}>
                        <FontAwesomeIcon className="navbarItemIcon" icon={faFolder} />
                        Projects
                    </a>
                    <a className="navbar-item" href="#skills"
                        onClick={clickItem}>
                        <FontAwesomeIcon className="navbarItemIcon" icon={faStar} />
                        Skills
                    </a>
                    <a className="navbar-item" href="#works"
                        onClick={clickItem}>
                        <FontAwesomeIcon className="navbarItemIcon" icon={faCubes} />
                        Works
                    </a>
                    <a className="navbar-item" href="#contact"
                        onClick={clickItem}>
                        <FontAwesomeIcon className="navbarItemIcon" icon={faInbox} />
                        Contacts
                    </a>
                </div>
            </div>
        </nav>

        <div className="content">
            <header>
                <div className="description">
                    <label className="hi">Hello!</label>
                    <label className="myName">I'm <b>SYSMA</b> a software development</label>
                    <label className="interested">Very interested in game development engines.</label>
                    <Contact styleList={false} />
                </div>
            </header>
            
            <div id="about">
                <div className="aboutContent">
                    <label className="title">About me</label>
                    <label className="description">Hi! My name is Sebastian Moreno Acero, I'm from Colombia and I work as a software developer.</label>
                    <label className="description">
                        I have {currentYear - 2018} years experience, which I have developed skills mostly in Web API in .Net Core and Node js, building static web pages and mobile apps.
                    </label>
                    <label className="description">I'm currently very interested in development of engines with C++, OpenGL, Vulkan, DirectX and video games.</label>
                </div>
            </div>

            <section id="projects">
                <h1 className="title">Projects</h1>
                <Projects />
            </section>
            <section id="skills">
                <h1 className="title">Skills</h1>
                <Skills />
            </section>
            <section id="works">
                <h1 className="title">Works</h1>
                <Works />
            </section>

            <section id="contact">
                <h1 className="title">Contacts</h1>
                <Contact />
            </section>
        </div>

        <a id="up" href="#">
            <FontAwesomeIcon icon={faArrowUp} />
        </a>

        <footer>
            <p dangerouslySetInnerHTML={{ __html: "Created by <b>SYSMA</b>" }} />
        </footer>
    </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);