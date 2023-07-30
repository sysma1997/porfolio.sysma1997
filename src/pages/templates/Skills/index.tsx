import React, { useState } from "react"

import "./index.scss"

const Skills = (props: {
    language: any
}) => {
    const { language } = props

    const [skillsLanguages] = useState([
        {
            icon: "skillIcon devicon-javascript-plain",
            text: "Javascript"
        },
        {
            icon: "skillIcon devicon-typescript-plain",
            text: "Typescript"
        },
        {
            icon: "skillIcon devicon-godot-plain",
            text: "GDScript"
        },
        {
            icon: "skillIcon devicon-csharp-plain",
            text: "C#"
        },
        {
            icon: "skillIcon devicon-php-plain",
            text: "Php"
        },
        {
            icon: "skillIcon devicon-java-plain",
            text: "Java"
        },
        {
            icon: "skillIcon devicon-kotlin-plain",
            text: "Kotlin"
        }
    ])
    const [skillsDatabases] = useState([
        {
            icon: "skillIcon devicon-postgresql-plain",
            text: "Postgres SQL"
        },
        {
            icon: "skillIcon devicon-sqlite-plain",
            text: "SQLite"
        },
        {
            icon: "skillIcon devicon-mysql-plain",
            text: "MySQL"
        },
        {
            icon: "skillIcon devicon-microsoftsqlserver-plain",
            text: "Microsoft SQL Server"
        }
    ])
    const [skillsFrameworks] = useState([
        {
            icon: "skillIcon devicon-nodejs-plain",
            text: "Node JS"
        },
        {
            icon: "skillIcon devicon-webpack-plain",
            text: "Webpack"
        },
        {
            icon: "skillIcon devicon-react-plain",
            text: "React"
        },
        {
            icon: "skillIcon devicon-express-original",
            text: "Express JS"
        },
        {
            icon: "skillIcon devicon-jest-plain",
            text: "Jest"
        },
        {
            icon: "skillIcon devicon-dotnetcore-plain",
            text: ".Net Core"
        },
        {
            icon: "skillIcon devicon-denojs-original",
            text: "Deno js"
        }
    ])
    const [skillsOthers] = useState([
        {
            icon: "skillIcon devicon-godot-plain",
            text: "Godot"
        },
        {
            icon: "skillIcon devicon-docker-plain",
            text: "Docker"
        },
        {
            icon: "skillIcon devicon-android-plain",
            text: "Android"
        },
        {
            icon: "skillIcon devicon-react-plain",
            text: "React Native"
        },
        {
            icon: "skillIcon devicon-git-plain",
            text: "Git"
        },
        {
            icon: "skillIcon devicon-bash-plain",
            text: "Bash"
        },
        {
            icon: "skillIcon devicon-linux-plain",
            text: "linux"
        },
    ])
    const [interesting] = useState([
        {
            icon: "skillIcon devicon-cplusplus-plain",
            text: "C++"
        },
        {
            icon: "skillIcon devicon-cmake-plain",
            text: "CMake"
        },
        {
            icon: "skillIcon devicon-opengl-plain",
            text: "OpenGL"
        },
        {
            icon: "skillIcon",
            text: "ImGUI"
        },
        {
            icon: "skillIcon devicon-solidity-plain",
            text: "Solidity"
        },
        {
            icon: "skillIcon devicon-electron-original",
            text: "electron"
        },
        {
            icon: "skillIcon devicon-rust-plain",
            text: "Rust"
        }
    ])

    return <div id="skills">
        <div className="skillsContent">
            <label className="title">{language.skills.title}</label>
            <label className="subtitle">{language.skills.language}</label>
            <div className="skillsList">
                {skillsLanguages.map((skill, index) => <div key={index.toString()} className="skillItem">
                    <i className={skill.icon} />
                    <label className="skillLanguage">{skill.text}</label>
                </div>)}
            </div>
            <label className="subtitle">{language.skills.databases}</label>
            <div className="skillsList">
                {skillsDatabases.map((skill, index) => <div key={index.toString()} className="skillItem">
                    <i className={skill.icon} />
                    <label className="skillLanguage">{skill.text}</label>
                </div>)}
            </div>
            <label className="subtitle">{language.skills.frameworks}</label>
            <div className="skillsList">
                {skillsFrameworks.map((skill, index) => <div key={index.toString()} className="skillItem">
                    <i className={skill.icon} />
                    <label className="skillLanguage">{skill.text}</label>
                </div>)}
            </div>
            <label className="subtitle">{language.skills.others}</label>
            <div className="skillsList">
                {skillsOthers.map((skill, index) => <div key={index.toString()} className="skillItem">
                    <i className={skill.icon} />
                    <label className="skillLanguage">{skill.text}</label>
                </div>)}
            </div>
            <label className="subtitle">{language.skills.interesting}</label>
            <div className="skillsList">
                {interesting.map((item, index) => <div key={index.toString()} className="skillItem">
                    <i className={item.icon} />
                    <label className="skillLanguage">{item.text}</label>
                </div>)}
            </div>
        </div>
    </div>
}

export { Skills }