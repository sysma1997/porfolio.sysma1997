import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import GoTrue from "gotrue-js";

import { gapi, google } from "../../../core/shared/domain/GoogleApi";

declare const gapi: gapi | undefined;
declare const google: google | undefined;

export const Login = (props: {
    isLogin: Dispatch<SetStateAction<boolean>>
}) => {
    const { isLogin } = props;

    const [auth, _] = useState<GoTrue>(new GoTrue({
        APIUrl: "https://sysma1997.netlify.app/.netlify/identity",
        setCookie: false
    }));
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [gapiInited, isGapiInited] = useState<boolean>(false);
    const [googleInited, isGoogleInited] = useState<boolean>(false);
    const [token, setToken] = useState<any>();

    /* useEffect(() => {
        if (!auth) return;

        if (auth.currentUser()) isLogin(true);
    }, [auth]); */
    useEffect(() => {
        if (!gapi || !google) return;

        const initGapiClient = async () => {
            await gapi.client.init({
                apiKey: "porfolio-sysma1997",
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]
            });
            isGapiInited(true);
        }
        gapi.load("client", initGapiClient);

        const token = google.accounts.oauth2.initTokenClient({
            client_id: "398749866662-nbko48dg2drdtmujmqr7nmn9lrcrjguo.apps.googleusercontent.com",
            scope: "https://www.googleapis.com/auth/drive.metadata.readonly"
        });
        if (token) {
            setToken(token);
            isGoogleInited(true);
        }

    }, [gapi, google]);

    const init = async (gToken: any) => {
        gapi.client.setToken(gToken.access_token);
        await getList();
    }
    const clickLogin = () => {
        /* if (username === "" || password === "") {
            alert("Username and password are required.");
            return;
        }

        auth.login(username, password, true)
            .then(response => {
                console.log(response);
                isLogin(true);
            })
            .catch(error => {
                console.error(error.message)
                alert(error.message);
            }); */

        if (!token) return;

        token.callback = async (response: any) => {
            if (response.error) {
                console.error(response.error);
                return;
            }

            console.log(response);
            await init(response);
            isLogin(true);
        };

        if (gapi.client.getToken() === null) token.requestAccessToken({ prompt: "consent" });
        else token.requestAccessToken({ prompt: "" });
    };

    const getList = async () => {
        let response;
        try {
            response = await gapi.client.drive.files.list({
                'pageSize': 10,
                'fields': 'files(id, name)',
            });
        } catch (err) {
            console.error(err);
            return;
        }
        const files = response.result.files;
        if (!files || files.length == 0) {
            console.log("no files");
            return;
        }
        // Flatten to string to display
        console.log(files);
    };

    return (gapiInited && googleInited) && <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
            <header className="modal-card-head" style={{ backgroundColor: "var(--backgroundPrimary)" }}>
                <p className="modal-card-title" style={{ color: "white" }}>Login</p>
            </header>
            {/* <section className="modal-card-body">
            <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Username" 
                            value={username} onChange={event => setUsername(event.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Password" 
                            value={password} onChange={event => setPassword(event.target.value)} />
                    </div>
                </div>
            </section> */}
            <footer className="modal-card-foot is-flex is-justify-content-flex-end"
                style={{ padding: "1rem 2rem" }}>
                <button className="button" style={{ backgroundColor: "var(--backgroundPrimary)", color: "white" }}
                    onClick={clickLogin}>Login</button>
            </footer>
        </div>
    </div>;
};