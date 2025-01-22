import React, { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const Contact = (props: {
    styleList?: boolean,
}) => {
    const { styleList } = props;

    const [contcats, _] = useState<Array<{
        icon: IconProp,
        name: string,
        link: string
    }>>([
        {
            icon: ["fab", "github"],
            name: "GitHub",
            link: "https://github.com/sysma1997"
        },
        {
            icon: ["fab", "linkedin"],
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/sebastian-moreno-acero-0a3138187"
        },
        {
            icon: ["fas", "envelope"],
            name: "Email",
            link: "mailto: sysma1997@gmail.com"
        }
    ]);

    return <div className={(styleList === undefined || styleList === null || styleList === true) ?
        "contactList" : "contactList2"}>
        {contcats.map(contact => <a key={contact.name} className="contactItem"
            href={contact.link} target="_blank">
            <FontAwesomeIcon className="contactItemIcon" icon={contact.icon} />
            {contact.name}
        </a>)}
    </div>;
};

export { Contact };