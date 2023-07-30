import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./index.scss"

const Contact = (props: {
    language: any
}) => {
    const { language } = props

    const [contcats, _] = useState([
        {
            icon: faGithub,
            name: "GitHub",
            link: "https://github.com/sysma1997"
        },
        {
            icon: faLinkedin,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/sebastian-moreno-acero-0a3138187"
        },
        {
            icon: faEnvelope,
            name: "Email",
            link: "mailto: sysma1997@gmail.com"
        }
    ])

    return <div id="contact">
        <label className="title">{language.contacts}</label>
        <div className="contactList">
            {contcats.map(contact => <a key={contact.name} className="contactItem"
                href={contact.link} target="_blank">
                <FontAwesomeIcon className="contactItemIcon" icon={contact.icon} />
                {contact.name}
            </a>)}
        </div>
    </div>
}

export { Contact }