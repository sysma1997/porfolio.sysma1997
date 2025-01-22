import React, { useState, useEffect } from "react";

import "./index.css";

export const Works = () => {
    const [works, setWorks] = useState<Array<any>>();

    useEffect(() => {
        fetch("/json/works.json").then(response => response.json()).then(data => {
            setWorks(data);
        }).catch(error => console.error(error));
    }, []);

    return <div className="worksContent">
        <div className="worksList">
            {(works) && works.map((work: any) => <div key={work.name} className="work">
                <div className="title">
                    <label>{work.name}</label>
                </div>
                <div className="content">
                    <div className="information">
                        <label className="description">{work.description}</label>
                    </div>
                    <div className="tags">
                        {work.tags.map((tag: any, index: number) => <span key={index} className="tag">
                            <i className={tag.icon} />
                            {tag.text}
                        </span>)}
                    </div>
                    {work.links && <div className="links">
                        {work.links.map((link: any, index: number) =>
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