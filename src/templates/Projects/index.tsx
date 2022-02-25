import * as React from "react"
const { useState } = React

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
            github: "https://github.com/sysma1997/template-webpack-react-multiple-page"
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
            github: "https://github.com/sysma1997/webpack-react-multiple-pages"
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
            github: "https://github.com/sysma1997/social_network_example"
        }
    ])

    return <div id="projects">
        <div className="projectsContent">
            <label className="title">Projects</label>
            <div className="projectsList">
                {projects.map(project => <div key={project.name} className="project">
                    <div className="content">
                        <label className="title">{project.name}</label>
                        <label className="description">{project.description}</label>
                        <div className="tags">
                            {project.tags.map(tag => <span className="tag">{tag}</span>)}
                        </div>
                        <a className="link" href={project.github} target="_blank">
                            <i className="devicon-github-original" />
                            {' '}
                            GitHub
                        </a>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}

export { Projects }