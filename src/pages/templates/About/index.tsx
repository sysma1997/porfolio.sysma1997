import React from "react"

import "./index.scss"

const About = () => {
    return <div id="about">
        <div className="aboutContent">
            <label className="title">About me</label>
            <label className="description">
                Hi! My name is Sebastian Moreno Acero, I'm from Colombia and I work as a software developer.
            </label>
            <label className="description">
                I have 4 years experience, I which I have developed skills mostly in Web API in .Net Core and Node js, building static web pages and mobile apps.
            </label>
            <br />
            <label className="description">
                I'm currently very interested in development of video games and blockchain technology.
            </label>
        </div>
    </div>
}

export { About }