import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"

import { Navbar } from "./templates/Navbar"
import { Skills } from "./templates/Skills"
import { Works } from "./templates/Works"
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
            <div id="about">
                <div className="aboutContent">
                    <label className="title">About me</label>
                    <label className="description">
                        Hi! My name is Sebastian Moreno Acero, I'm from Colombia and I work as a software developer.
                    </label>
                    <label className="description">
                        I have 5 years experence, I which I have developed skills mostly in web api in .Net Core and Node js, building static web pages and apps moviles.
                    </label>
                    <br />
                    <label className="description">
                        I'm currently very interested in blockchain technology and cryptocurrencies and how they can positively change our lives.
                    </label>
                    <label className="description">
                        Another of my interests is the development of video games.
                    </label>
                </div>
            </div>
            <Skills />
            <Works />
        </div>
        <a id="up" href="#">
            <FontAwesomeIcon icon={faArrowUp} />
        </a>
        <Footer />
    </>
}

const root = document.getElementById("root")
ReactDOM.render(<App />, root)