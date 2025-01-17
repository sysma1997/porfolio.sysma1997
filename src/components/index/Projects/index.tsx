import React, { useState, useEffect } from "react";

import "./index.css";

const Projects = (props: {
    language: any
}) => {
    const { language } = props;

    const [projects, setProjects] = useState<Array<any>>();

    useEffect(() => {
        fetch("/json/projects.json").then(response => response.json()).then(data => {
            setProjects(data);
        });
    }, []);

    return <div className="projectsContent">
        <div className="projectsList">
            {(projects) && projects.map((project: any) => <div key={project.name} className="project">
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
    </div>;
};

export { Projects };