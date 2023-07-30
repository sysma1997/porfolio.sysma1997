import React from "react"

import "./index.scss"

const Projects = (props: {
    language: any
}) => {
    const { language } = props

    return <div id="projects">
        <div className="projectsContent">
            <label className="title">{language.projects.title}</label>
            <div className="projectsList">
                {language.projects.list.map((project: any) => <div key={project.name} className="project">
                    <div className="content">
                        <div className="information">
                            <label className="title">{project.name}</label>
                            <label className="description">{project.description}</label>
                        </div>
                        <div className="tags">
                            {project.tags.map((tag: string) => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        {project.links && <div className="links">
                            {project.links.map((link: any) =>
                                <a className="link" href={link.href} target="_blank">
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