import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import { Navbar } from "./_content/Navbar"
import { About } from "./_content/About"
import { Skills } from "./_content/Skills"
/* import { Works } from "./_content/Works" */
import { Projects } from "./_content/Projects"
import { Contact } from "./_content/Contact"
import { Footer } from "./_content/Footer"

import spanish from "../assets/jsons/es.json"
import english from "../assets/jsons/en.json"

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
                        <Contact language={language} showTitle={false} styleList={false} />
                    </div>
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