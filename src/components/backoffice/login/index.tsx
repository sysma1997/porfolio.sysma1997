import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

import { GoogleDrive, gapi, google } from "../../../core/shared/domain/GoogleApi";

declare const gapi: gapi | undefined;
declare const google: google | undefined;

export const Login = (props: {
    isLogin: Dispatch<SetStateAction<boolean>>,
    drive: GoogleDrive
}) => {
    const { isLogin, drive } = props;

    const clickLogin = () => {
        drive.tokenClient.callback = async (resp: any) => {
            if (resp.error !== undefined) {
                throw (resp);
            }

            isLogin(true);
        };

        if (gapi.client.getToken() === null) {
            // Prompt the user to select a Google Account and ask for consent to share their data
            // when establishing a new session.
            drive.tokenClient.requestAccessToken({ prompt: 'consent' });
        } else {
            // Skip display of account chooser and consent dialog for an existing session.
            drive.tokenClient.requestAccessToken({ prompt: '' });
        }
    };

    return <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
            <header className="modal-card-head" style={{ backgroundColor: "var(--backgroundPrimary)" }}>
                <p className="modal-card-title" style={{ color: "white" }}>Login</p>
            </header>
            <section className="modal-card-body">
                <label className="label">Login with Google to update page</label>
            </section>
            <footer className="modal-card-foot is-flex is-justify-content-flex-end"
                style={{ padding: "1rem 2rem" }}>
                <button className="button" style={{ backgroundColor: "var(--backgroundPrimary)", color: "white" }}
                    onClick={clickLogin}>Login</button>
            </footer>
        </div>
    </div>;
};