import * as React from "react"
const { useState } = React

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons"

import "./index.css"

const Projects = () => {
    const [projects, _] = useState([
        {
            name: "Template webpack react multiple page",
            description: "Simple template to use React with multiple page for servers only static files.",
            tags: [
                "NodeJS",
                "Webpack",
                "Babel",
                "React",
                "Typescript"
            ],
            links: [
                {
                    icon: faGithub, 
                    text: "Github", 
                    href: "https://github.com/sysma1997/template-webpack-react-multiple-page"
                }
            ]
        },
        {
            name: "Webpack react multiple page with Backend",
            description: "Example the frontend with me template and Backend in apache with php.",
            tags: [
                "Docker",
                "Php",
                "NodeJS",
                "Typescript",
                "React",
                "MySQL"
            ],
            links: [
                {
                    icon: faGithub, 
                    text: "Github", 
                    href: "https://github.com/sysma1997/webpack-react-multiple-pages"
                }
            ]
        },
        {
            name: "Social network example",
            description: "Simple building for social network with Node and Express.",
            tags: [
                "Docker",
                "NodeJS",
                "Typescript",
                "ExpressJS",
                "NextJS"
            ],
            links: [
                {
                    icon: faGithub, 
                    text: "Github", 
                    href: "https://github.com/sysma1997/social_network_example"
                }
            ]
        }, 
        {
            name: "Pong", 
            description: "Pong is a table tennis–themed twitch arcade sports video game, featuring simple two-dimensional graphics, manufactured by Atari and originally released in 1972.",
            tags: [
                "GDScript", 
                "Godot engine"
            ], 
            links: [
                {
                    icon: faGithub, 
                    text: "Github", 
                    href: "https://github.com/sysma1997/Pong"
                },
                {
                    icon: faItchIo, 
                    text: "Itch.io", 
                    href: "https://sysma51.itch.io/pong"
                }
            ]
        }, 
        {
            name: "PacMan", 
            description: "PacMan is an arcade video game created by video game designer Toru Iwatani of the Namco company, and distributed by Midway Games to the American market in the early 1980s.", 
            tags: [
                "GDScript", 
                "Godot engine"
            ], 
            links: [
                {
                    icon: faGithub, 
                    text: "Github", 
                    href: "https://github.com/sysma1997/PacMan"
                },
                {
                    icon: faItchIo, 
                    text: "Itch.io", 
                    href: "https://sysma51.itch.io/pacman"
                }
            ]
        }
    ])

    return <div id="projects">
        <div className="projectsContent">
            <label className="title">Projects</label>
            <div className="projectsList">
                {projects.map(project => <div key={project.name} className="project">
                    <div className="content">
                        <div className="information">
                            <label className="title">{project.name}</label>
                            <label className="description">{project.description}</label>
                        </div>
                        <div className="tags">
                            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        {project.links && <div className="links">
                            {project.links.map(link => 
                                <a className="link" href={link.href} target="_blank">
                                    <FontAwesomeIcon icon={link.icon} />
                                    {' '}
                                    {link.text}
                                </a>)}
                        </div>}
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}

export { Projects }