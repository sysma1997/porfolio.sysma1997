import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { GoogleDrive, gapi, google } from "../../core/shared/domain/GoogleApi";

import { Login } from "../../components/backoffice/login";

document.title = "Backoffice";

import "./index.css";

import icon from "../../assets/images/icon.png";

declare const gapi: gapi | undefined;
declare const google: google | undefined;

const drive: GoogleDrive = {
    client_id: "398749866662-nbko48dg2drdtmujmqr7nmn9lrcrjguo.apps.googleusercontent.com",
    api_key: "porfolio-sysma1997",
    discovery_doc: "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
    scopes: "https://www.googleapis.com/auth/drive.metadata.readonly",

    tokenClient: undefined,
    gapiInited: false,
    googleInited: false
};

const initializeGapiClient = async () => {
    await gapi.client.init({
        apiKey: drive.api_key,
        discoveryDocs: [drive.discovery_doc],
    });
    drive.gapiInited = true;
};
const gapiLoaded = () => {
    gapi.load('client', initializeGapiClient);
};
const gisLoaded = () => {
    drive.tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: drive.client_id,
        scope: drive.scopes,
        //callback: '', // defined later
    });
    drive.googleInited = true;
};

(() => {
    gapiLoaded();
    gisLoaded();
})();

library.add(fas, fab);

const Backoffice = () => {
    const [login, isLogin] = useState<boolean>(false);
    
    const [showItems, setShowItems] = useState<boolean>(false);

    const [projects, setProjects] = useState<Array<any>>();
    const [skills, setSkills] = useState<Array<any>>();
    const [works, setWorks] = useState<Array<any>>();

    const _setShowItems = () => setShowItems(!showItems);

    useEffect(() => {
        if (!login) return;

        gapi.client.drive.files.list({
            fields: "files(id, name, mimeType)", 
            q: "'1WGh4C4W0XVckkrp7GUwA9qiMVaHXV6xz' in parents"
        }).then(response => {
            const files = response.result.files;
            if (!files || files.length == 0) {
                console.error('No files found.');
                return;
            }

            console.log(files);
            files.forEach((file: any) => {
                let name = file.name;
                gapi.client.drive.files.download({
                    fileId: file.id
                }).then(response => {
                    console.log(response.result);
                }).catch(err => {
                    console.error('Error:', err);
                });
                /* switch (file.name) {
                    case "projects.json":
                        break;
                    case "skills.json":
                        break;
                    case "works.json":
                        break;
                } */
            })
        }).catch(err => {
            console.error('Error:', err);
        });
    }, [login]);

    const clickItem = () => {
        if (screen.width > 1024) return;
        _setShowItems();
    };
    const clickLogout = () => {
        clickItem();
        const token = gapi.client.getToken();
        if (token !== null) {
            google.accounts.oauth2.revoke(token.access_token);
            gapi.client.setToken('');
            isLogin(false);
        }
    };

    return <>
        {(!login) && <Login isLogin={isLogin} drive={drive} />}
        {(login) && <>
            <nav id="menu" className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a id="title" className="navbar-item" href="#">
                        <img src={icon} alt="SYSMA" />
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
                    <div className="navbar-end">
                        <a className="navbar-item" href="#contact"
                            onClick={clickLogout}>
                            <FontAwesomeIcon className="navbarItemIcon" icon={["fas", "right-from-bracket"]} />
                            Logout
                        </a>
                    </div>
                </div>
            </nav>
            <div className="content">
                <h1 className="title">Backoffice</h1>
            </div>
        </>}
    </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Backoffice />);