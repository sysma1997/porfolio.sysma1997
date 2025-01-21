import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Login } from "../../components/backoffice/login";

document.title = "Backoffice";

import "./index.css";

const Backoffice = () => {
    const [login, isLogin] = useState<boolean>(false);

    return <>
        {(!login) && <Login isLogin={isLogin} />}
        {(login) && <>
            <div className="content">
                <h1 className="title">Backoffice</h1>
            </div>
        </>}
    </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Backoffice />);