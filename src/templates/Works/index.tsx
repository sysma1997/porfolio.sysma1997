import * as React from "react"
const { useState } = React

import "./index.css"

import fixmathIcon from "../../assets/images/projects/fixmath.jpg"

const Works = () => {
    const [works, _] = useState([
        {
            name: "FixMath",
            image: fixmathIcon,
            description: "It is an application that seeks to improve the way of organizing personal finances, in order to keep track of the budget. Registering daily the management of your income and thus optimize your savings and spending habits.",
            tags: [
                "Deno js",
                "Postgres SQL",
                "React js",
                "Finances",
                "Currencies"
            ],
            links: [
                {
                    type: "Page", 
                    href: "https://fixmath.deno.dev/"
                }
            ]
        }
    ])

    return <div id="works">
        <div className="worksContent">
            <label className="title">Works</label>
            <div className="worksList">
                {works.map(work => <div key={work.name} className="work">
                    <div className="content">
                        <div className="information">
                            <label className="title">{work.name}</label>
                            <label className="description">{work.description}</label>
                        </div>
                        <div className="tags">
                            {work.tags.map((tag, index) => <span key={index.toString()} className="tag">{tag}</span>)}
                        </div>
                        {work.links.map(link => <a 
                            key={link.type}
                            className="link"
                            href={link.href}
                            target="_blank">
                            {link.type}
                        </a>)}
                    </div>
                    <div className="contentImage">
                        <img className="image" src={work.image} alt={work.name} />
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}

export { Works }