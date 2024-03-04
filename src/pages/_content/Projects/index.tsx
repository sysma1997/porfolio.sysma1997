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
                    <div className="title">
                        <label>{project.name}</label>
                    </div>
                    <div className="content">
                        <div className="information">
                            <label className="description">{project.description}</label>
                        </div>
                        <div className="tags">
                            {project.tags.map((tag: any, index: number) => <span key={index} className="tag">
                                <i className={tag.icon} />
                                {tag.text}
                            </span>)}
                        </div>
                        {project.links && <div className="links">
                            {project.links.map((link: any, index: number) =>
                                <a key={index} className="link" href={link.href} target="_blank">
                                    {(link.icon) && <i className={link.icon} />}
                                    {(link.image) && <img src={link.image} alt={link.text} />}
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