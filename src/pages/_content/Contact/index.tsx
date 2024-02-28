import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./index.scss"

const Contact = (props: {
    language: any,

    showTitle?: boolean,
    styleList?: boolean,
}) => {
    const { language, showTitle, styleList } = props

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

    return <div id={(showTitle === undefined || showTitle === null || showTitle === true) ?
        "contact" : "_contact"}>
        {(showTitle === undefined || showTitle === null || showTitle === true) &&
            <label className="title">{language.contacts}</label>}
        <div className={(styleList === undefined || styleList === null || styleList === true) ?
            "contactList" : "contactList2"}>
            {contcats.map(contact => <a key={contact.name} className="contactItem"
                href={contact.link} target="_blank">
                <FontAwesomeIcon className="contactItemIcon" icon={contact.icon} />
                {contact.name}
            </a>)}
        </div>
    </div>
}

export { Contact }