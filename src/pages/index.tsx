import React from "react"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import { Navbar } from "./templates/Navbar"
import { About } from "./templates/About"
import { Skills } from "./templates/Skills"
import { Works } from "./templates/Works"
import { Projects } from "./templates/Projects"
import { Contact } from "./templates/Contact"
import { Footer } from "./templates/Footer"

import profile from "../assets/images/profile.jpg"

import "./index.scss"

document.title = "SYSMA"

const App = () => {
    return <>
        <Navbar />
        <div className="content">
            <header>
                <div className="description">
                    <label className="hi">Hello!</label>
                    <label className="myName">I'm <b>SYSMA</b> a software development</label>
                    <label className="interested">Very interested in game development and blockchain technology.</label>
                </div>
                <img className="profile" src={profile} alt="profile" />
            </header>
            <About />
            <Skills />
            {/* <Works /> */}
            <Projects />
            <Contact />
        </div>
        <a id="up" href="#">
            <FontAwesomeIcon icon={faArrowUp} />
        </a>
        <Footer />
    </>
}

const root = document.getElementById("root")
ReactDOM.render(<App />, root)