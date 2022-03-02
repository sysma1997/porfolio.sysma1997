import * as React from "react"
const { useState } = React

import "./index.css"

import fixmathIcon from "../../assets/images/projects/fixmath.jpg"

const Works = () => {
    const [works, _] = useState([
        {
            name: "FixMath",
            image: fixmathIcon,
            description: "Personal project for improve the way of organizing personal finances, is currently in development, but I plan add more functions and filters, also to track all cryptocurrencies.",
            tags: [
                "React Native",
                "Android",
                "Redux",
                "SQLite",
                "Finances",
                "Currencies",
                "Cryptocurrencies"
            ],
            link: {
                type: "Play Store",
                href: "https://play.google.com/store/apps/details?id=com.sysma&hl=es_CO&gl=US"
            }
        }
    ])

    return <div id="works">
        <div className="worksContent">
            <label className="title">Works</label>
            <div className="worksList">
                {works.map(work => <div key={work.name} className="work">
                    <div className="content">
                        <label className="title">{work.name}</label>
                        <label className="description">{work.description}</label>
                        <div className="tags">
                            {work.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        <a className="link" href={work.link.href} target="_blank">
                            {work.link.type}
                        </a>
                    </div>
                    <div className="contentDivition" />
                    <div className="contentImage">
                        <img className="image" src={work.image} alt={work.name} />
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}

export { Works }