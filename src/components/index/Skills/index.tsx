import React, { useState, useEffect } from "react";

import "./index.css";

const Skills = (props: {
    language: any
}) => {
    const { language } = props;

    const [skills, setSkills] = useState<Array<any>>();

    useEffect(() => {
        fetch("/json/skills.json").then(response => response.json()).then(data => setSkills(data));
    }, [])

    return <div className="skillsContent">
        {(skills) && skills.map((skill, index) => <div key={index.toString()}>
            <div className="is-flex">
                <label className="subtitle">{skill.name}</label>
            </div>
            <div className="skillsList">
                {skill.items.map((item: any, index: number) => <div key={index.toString()} className="skillItem">
                    <i className={`skillIcon ${item.icon}`} />
                    <label className="skillLanguage">{item.text}</label>
                </div>)}
            </div>
        </div>)}
    </div>;
};

export { Skills };