import React, { useState, useEffect } from "react";

export const Menu = () => {
    const [showItems, setShowItems] = useState(false);

    const _setShowItems = () => setShowItems(!showItems);

    return <nav id="menu" className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a id="title" className="navbar-item" href="/GumFall">
                <img src="/images/gum-fall-icon.png" alt="Gum Fall" />
                <b style={{ marginLeft: 10 }}>GUM FALL</b>
            </a>

            <a role="button" className={`navbar-burger ${showItems && "is-active"}`} aria-label="menu"
                aria-expanded="false" data-target="navbarBasicExample"
                onClick={_setShowItems}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${showItems && "is-active"}`}>
            <div className="navbar-start">
                <a className="navbar-item" href="/GumFall/PrivacyPolices">
                    Privacy Polices
                </a>
            </div>
            <div className="navbar-end">
                <a className="navbar-item" href="/">
                    <img src="/images/icon.png" alt="sysma" />
                </a>
            </div>
        </div>
    </nav>;
};