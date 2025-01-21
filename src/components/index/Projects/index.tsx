import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

export const Projects = () => {
    const [projects, setProjects] = useState<Array<any>>();

    useEffect(() => {
        fetch("/json/projects.json").then(response => response.json()).then(data => {
            setProjects(data);
        });
    }, []);

    return <div className="projectsContent">
        <div className="projectsList">
            {(projects) && projects.map((project) => <div key={project.name} className="project">
                <div className="title">
                    <img className="icon" src={project.icon} alt="Gum Fall icon" />
                    <label>{project.name}</label>
                </div>
                <div className="content">
                    <div className="information">
                        <img className="coverImage" src={project.coverImage} alt={project.name} />
                        <label className="description">{project.description}</label>
                    </div>
                    <div className="tags">
                        {project.tags.map((tag: any) => <span key={tag.name} className="tag">
                            <FontAwesomeIcon icon={[tag.icon.prefix, tag.icon.name]} />
                            {tag.name}
                        </span>)}
                    </div>
                </div>
                <div className="links">
                    {project.links.map((link: any) => <a key={link.url} className="link" href={link.url} target="_blank">
                        <FontAwesomeIcon icon={[link.icon.prefix, link.icon.name]} />
                        {link.name}
                    </a>)}
                </div>
            </div>)}
        </div>
    </div>;
};