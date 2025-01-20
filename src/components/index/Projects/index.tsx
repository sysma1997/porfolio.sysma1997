import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faMobile, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

import "./index.css";

import gumFallIcon from "../../../assets/GumFall/icon.png";
import gumFallCover from "../../../public/images/gum-fall-cover-image.jpg";

export const Projects = () => {
    return <div className="projectsContent">
        <div className="projectsList">
            <div className="project">
                <div className="title">
                    <img className="icon" src={gumFallIcon} alt="Gum Fall icon" />
                    <label>Gum Fall</label>
                </div>
                <div className="content">
                    <div className="information">
                        <img className="coverImage" src={gumFallCover} alt="Gum Fall cover" />
                        <label className="description">
                            In Gum Fall, you'll guide a charismatic character as they jump and roll through constantly moving platforms. Make sure to dodge obstacles, collect power-ups, and beat your own high scores. With intuitive controls and progressively challenging levels, each stage offers a unique and exciting experience.
                        </label>
                        <label>
                        <FontAwesomeIcon icon={['fab', 'apple']} />
                        <FontAwesomeIcon icon={['fab', 'microsoft']} />
                        <FontAwesomeIcon icon={['fab', 'google']} />
                        </label>
                    </div>
                    <div className="tags">
                        <span className="tag">
                            {/* <FontAwesomeIcon icon={faGamepad} /> */}
                            <FontAwesomeIcon icon={"gamepad"} />nt
                            Game
                        </span>
                        <span className="tag">
                            <FontAwesomeIcon icon={faMobile} />
                            Mobile
                        </span>
                    </div>
                </div>
                <div className="links">
                    <a className="link" href="/GumFall" target="_blank">
                        <FontAwesomeIcon icon={faGlobe} />
                        Web page
                    </a>
                    <a className="link" href="https://play.google.com/store/apps/details?id=com.sysma1997.gumfall" target="_blank">
                        <FontAwesomeIcon icon={faAndroid} />
                        Android
                    </a>
                </div>
            </div>
        </div>
    </div>;
};