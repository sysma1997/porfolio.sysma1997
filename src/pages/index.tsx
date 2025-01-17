import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser, faStar, faCubes, faInbox, 
    faArrowUp 
} from '@fortawesome/free-solid-svg-icons';

import { Skills } from "../components/index/Skills";
//import { Works } from "../components/index/Works";
import { Projects } from "../components/index/Projects";
import { Contact } from "../components/index/Contact";

import icon from "../assets/images/icon.png";
import spanish from "../assets/jsons/es.json";
import english from "../assets/jsons/en.json";

import "./index.css";

document.title = "SYSMA";

let locale = navigator.language;
try {
    locale = locale.split("-")[0];
} catch { }

const App = () => {
    const [language, setLanguage] = useState<any>(english);

    const [showItems, setShowItems] = useState<boolean>(false);
    
    const [currentYear, _] = useState<number>(new Date().getFullYear());
    
    useEffect(() => {
        if (locale === "en") setLanguage(english);
        else if (locale === "es") setLanguage(spanish);
    }, []);

    const _setShowItems = () => setShowItems(!showItems);

    const clickLanguage = (language: string) => {
        if (language === "en") setLanguage(english);
        else if (language === "es") setLanguage(spanish);
    };
    const clickItem = () => {
        if (screen.width > 1024) return;
        _setShowItems();
    };

    return (language) && <>
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

        <div className="content">
            <header>
                <div className="description">
                    <label className="hi">{language.about.description.hi}</label>
                    <label className="myName" dangerouslySetInnerHTML={{ __html: language.about.description.myName }} />
                    <label className="interested">{language.about.description.interested}</label>
                    <Contact styleList={false} />
                </div>
            </header>
            
            <div id="about">
                <div className="aboutContent">
                    <label className="title">{language.about.title}</label>
                    <label className="description">{language.about.me}</label>
                    <label className="description">
                        {language.about.experience.replace("{{years}}", (currentYear - 2018).toString())}
                    </label>
                    <label className="description">{language.about.interested}</label>
                </div>
            </div>

            <section id="skills" className="section">
                <h1 className="title">Skills</h1>
                <Skills language={language} />
            </section>
            {/* <Works /> */}
            <section id="projects" className="section">
                <h1 className="title">Projects</h1>
                <Projects language={language} />
            </section>

            <section id="contact" className="section">
                <h1 className="title">Contacts</h1>
                <Contact />
            </section>
        </div>

        <a id="up" href="#">
            <FontAwesomeIcon icon={faArrowUp} />
        </a>

        <footer>
            <p dangerouslySetInnerHTML={{ __html: language.footer }} />
        </footer>
    </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);