import * as React from "react"
import { useState } from "react"
import "./Skills.css"

const Skills = () => {
    const [skillsLanguages, _sl] = useState([
        {
            language: "Javascript",
            icon: "skillIcon devicon-javascript-plain"
        },
        {
            language: "Typescript",
            icon: "skillIcon devicon-typescript-plain"
        },
        {
            language: "C#",
            icon: "skillIcon devicon-csharp-plain"
        },
        {
            language: "Php",
            icon: "skillIcon devicon-php-plain"
        },
        {
            language: "Java",
            icon: "skillIcon devicon-java-plain"
        },
        {
            language: "Kotlin",
            icon: "skillIcon devicon-kotlin-plain"
        }
    ])
    const [skillsDatabases, _sdb] = useState([
        {
            language: "MySQL",
            icon: "skillIcon devicon-mysql-plain"
        },
        {
            language: "Postgres SQL",
            icon: "skillIcon devicon-postgresql-plain"
        },
        {
            language: "Microsoft SQL Server",
            icon: "skillIcon devicon-microsoftsqlserver-plain"
        }
    ])
    const [skillsFrameworks, _sf] = useState([
        {
            language: "Node JS",
            icon: "skillIcon devicon-nodejs-plain"
        },
        {
            language: "Webpack",
            icon: "skillIcon devicon-webpack-plain"
        },
        {
            language: "React",
            icon: "skillIcon devicon-react-plain"
        },
        {
            language: "Express JS",
            icon: "skillIcon devicon-express-original"
        },
        {
            language: "Jest",
            icon: "skillIcon devicon-jest-plain"
        },
        {
            language: "Composer",
            icon: "skillIcon devicon-composer-plain"
        },
        {
            language: ".Net Core",
            icon: "skillIcon devicon-dotnetcore-plain"
        },
        {
            language: "Firebase",
            icon: "skillIcon devicon-firebase-plain"
        }
    ])
    const [skillsOthers, _so] = useState([
        {
            language: "Docker",
            icon: "skillIcon devicon-docker-plain"
        },
        {
            language: "Android",
            icon: "skillIcon devicon-android-plain"
        },
        {
            language: "React Native",
            icon: "skillIcon devicon-react-plain"
        },
        {
            language: "Git",
            icon: "skillIcon devicon-git-plain"
        },
        {
            language: "GitHub",
            icon: "skillIcon devicon-github-plain"
        },
        {
            language: "GitLab",
            icon: "skillIcon devicon-gitlab-plain"
        },
        {
            language: "Bash",
            icon: "skillIcon devicon-bash-plain"
        },
        {
            language: "linux",
            icon: "skillIcon devicon-linux-plain"
        },
    ])
    const [interesting, _in] = useState([
        {
            language: "C++",
            icon: "skillIcon devicon-cplusplus-plain"
        },
        {
            language: "Godot",
            icon: "skillIcon devicon-godot-plain"
        },
        {
            language: "Haskell",
            icon: "skillIcon devicon-haskell-plain"
        },
        {
            language: "OpenGL",
            icon: "skillIcon devicon-opengl-plain"
        },
        {
            language: "electron",
            icon: "skillIcon devicon-electron-original"
        },
        {
            language: "Heroku",
            icon: "skillIcon devicon-heroku-original"
        }
    ])

    return <div id="skills">
        <div className="skillsContent">
            <label className="title">My skills</label>
            <label className="subtitle">Languages</label>
            <div className="skillsList">
                {skillsLanguages.map(skill => <div key={skill.language} className="skillItem">
                    <i className={skill.icon} />
                    <label className="skillLanguage">{skill.language}</label>
                </div>)}
            </div>
            <label className="subtitle">Data bases</label>
            <div className="skillsList">
                {skillsDatabases.map(skill => <div key={skill.language} className="skillItem">
                    <i className={skill.icon} />
                    <label className="skillLanguage">{skill.language}</label>
                </div>)}
            </div>
            <label className="subtitle">Frameworks</label>
            <div className="skillsList">
                {skillsFrameworks.map(skill => <div key={skill.language} className="skillItem">
                    <i className={skill.icon} />
                    <label className="skillLanguage">{skill.language}</label>
                </div>)}
            </div>
            <label className="subtitle">Others</label>
            <div className="skillsList">
                {skillsOthers.map(skill => <div key={skill.language} className="skillItem">
                    <i className={skill.icon} />
                    <label className="skillLanguage">{skill.language}</label>
                </div>)}
            </div>
            <label className="subtitle">Interesting</label>
            <div className="skillsList">
                {interesting.map(item => <div key={item.language} className="skillItem">
                    <i className={item.icon} />
                    <label className="skillLanguage">{item.language}</label>
                </div>)}
            </div>
        </div>
    </div>
}

export { Skills }