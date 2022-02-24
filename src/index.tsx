import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"

import { Navbar } from "./templates/Navbar"
import { About } from "./templates/About"
import { Skills } from "./templates/Skills"
import { Works } from "./templates/Works"
import { Projects } from "./templates/Projects"
import { Footer } from "./templates/Footer"

import profile from "./assets/images/profile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

/*
IDEAS: https://github.com/emmabostian/developer-portfolios
   #1: https://abdulrahman.id/
   #2: https://s8sachin.github.io/
*/

document.title = "SYSMA"

const App = () => {
    return <>
        <Navbar />
        <div className="content">
            <header>
                <div className="description">
                    <label className="hi">Hello!</label>
                    <label className="myName">I'm <b>SYSMA</b> a software development</label>
                    <label className="interested">Very interested in blockchain technology and game development</label>
                </div>
                <img className="profile" src={profile} alt="profile" />
            </header>
            <About />
            <Skills />
            <Works />
            <Projects />
        </div>
        <a id="up" href="#">
            <FontAwesomeIcon icon={faArrowUp} />
        </a>
        <Footer />
    </>
}

const root = document.getElementById("root")
ReactDOM.render(<App />, root)