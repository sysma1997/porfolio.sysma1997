import React from "react"

import "./index.scss"

const About = (props: {
    language: any
}) => {
    const { language } = props

    const currentYear = new Date().getFullYear()

    return <div id="about">
        <div className="aboutContent">
            <label className="title">{language.about.title}</label>
            <label className="description">{language.about.me}</label>
            <label className="description">
                {language.about.experience.replace("{{years}}", (currentYear - 2018).toString())}
            </label>
            <label className="description">{language.about.interested}</label>
        </div>
    </div>
}

export { About }