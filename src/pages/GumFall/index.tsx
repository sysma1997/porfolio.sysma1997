import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

import { Menu } from "../../components/gumFall/menu";

import "./index.css";

document.title = "Gum Fall";
{
    const link: any = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = "/images/gum-fall-icon.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}

const GumFall = () => {
    return <>
        <Menu />

        <div className="content">
            <img className="cover-image" src="/images/gum-fall-cover-image.jpg" alt="cover-image" />

            <div className="description">
                <p className="block">
                    Gum Fall is game where you move between platforms and avoids traps.
                </p>
                <p className="block">
                    Get ready for heart-pounding action with Gum Fall! This thrilling arcade game is a revamped version of the classic Rapid Roll, now featuring stunning graphics and addictive gameplay that will keep you glued to the screen.
                </p>
                <p className="block">
                    In Gum Fall, you'll guide a charismatic character as they jump and roll through constantly moving platforms. Make sure to dodge obstacles, collect power-ups, and beat your own high scores. With intuitive controls and progressively challenging levels, each stage offers a unique and exciting experience.
                </p>
                <p className="block">
                    Key Features:
                    <ul>
                        <li>Colorful and revamped graphics that will captivate your senses.</li>
                        <li>Fast-paced and dynamic gameplay that keeps you on your toes.</li>
                        <li>Simple and easy-to-use controls for players of all ages.</li>
                        <li>Global leaderboards to compete with friends and players around the world.</li>
                    </ul>
                </p>
                <p className="block">
                    Download Gum Fall now and discover why everyone is talking about this new arcade classic. Join the fun and show off your skills!
                </p>
            </div>

            <div className="links">
                <h2>Download Now</h2>
                <a className="button is-dark" href="https://play.google.com/store/apps/details?id=com.sysma1997.gumfall" target="_blank">
                    <FontAwesomeIcon icon={faGooglePlay} />
                    Play Store
                </a>
            </div>
        </div>

        <footer>
            <a href="/GumFall/PrivacyPolices">Privacy Polices</a>
            <h2>Created by <b>SYSMA</b></h2>
        </footer>
    </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GumFall />);