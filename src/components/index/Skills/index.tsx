import React, { useState, useEffect } from "react";

import "./index.css";

const Skills = () => {
    const [skills, setSkills] = useState<Array<any>>();

    useEffect(() => {
        const url = "https://drive.google.com/uc?id=1UM9gj5tQtKmcQpIBWWh7ALexMkNfkXqO&export=download";
        fetch(url).then(response => response.json()).then(data => setSkills(data))
            .catch(error => console.error(error));
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