import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import { Navbar } from "./templates/Navbar"
import { About } from "./templates/About"
import { Skills } from "./templates/Skills"
/* import { Works } from "./templates/Works" */
import { Projects } from "./templates/Projects"
import { Contact } from "./templates/Contact"
import { Footer } from "./templates/Footer"

import profile from "../assets/images/profile.jpg"
import spanish from "../assets/es.json"
import english from "../assets/en.json"

import "./index.scss"

document.title = "SYSMA"

let locale = navigator.language
try {
    locale = locale.split("-")[0]
} catch { }

const App = () => {
    const [language, setLanguage] = useState<any>(english)

    useEffect(() => {
        if (locale === "en") setLanguage(english)
        else if (locale === "es") setLanguage(spanish)
    }, [])

    return <>
        {(language) && <>
            <Navbar language={language} setLanguage={setLanguage}
                english={english} spanish={spanish} />
            <div className="content">
                <header>
                    <div className="description">
                        <label className="hi">{language.about.description.hi}</label>
                        <label className="myName" dangerouslySetInnerHTML={{ __html: language.about.description.myName }} />
                        <label className="interested">{language.about.description.interested}</label>
                    </div>
                    <img className="profile" src={profile} alt="profile" />
                </header>
                <About language={language} />
                <Skills language={language} />
                {/* <Works /> */}
                <Projects language={language} />
                <Contact language={language} />
            </div>
            <a id="up" href="#">
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
            <Footer language={language} />
        </>}
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)