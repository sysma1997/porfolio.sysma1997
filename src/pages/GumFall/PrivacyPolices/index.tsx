import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import icon from "../../../assets/GumFall/icon.png";

document.title = "Gum Fall Privacy Polices";
// Change shorcut icon
{
    const link: any = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = icon;
    document.getElementsByTagName('head')[0].appendChild(link);
}

const GumFallPrivacyPolices = () => {
    const [showItems, setShowItems] = useState(false);

    const _setShowItems = () => setShowItems(!showItems);

    return <>
        <nav id="menu" className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a id="title" className="navbar-item" href="#">
                    <img src={icon} alt="Gum Fall" />
                    <b style={{marginLeft: 10}}>GUM FALL</b>
                </a>

                <a role="button" className={`navbar-burger ${showItems && "is-active"}`} aria-label="menu"
                    aria-expanded="false" data-target="navbarBasicExample"
                    onClick={_setShowItems}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${showItems && "is-active"}`}>
                <div className="navbar-start">
                    <a className="navbar-item">
                            Privacy Polices
                    </a>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item" href="/">
                        <b>SYSMA</b>
                    </a>
                </div>
            </div>
        </nav>

        <div className="gumFallPP">
            <h1 className="title"><b>Privacy polices</b></h1>
            <div className="content">
                <div className="block">
                    The app Gum Fall is owned by <a href="/" target="_blank">SYSMA</a>, which is a data controller of your personal data.
                </div>
                <div className="block">
                    We have adopted this Privacy Policy, which determines how we process information collected by Gum Fall, which also provides the reasons why we should collect certain personal data about you. Therefore, you must read this Privacy Policy before using the app.
                </div>
                <div className="block">
                    We take care of your personal data and are committed to guaranteeing its confidentiality and security.
                </div>
                
                <h2><b>PERSONAL INFORMATION WE COLLECT:</b></h2>
                <div className="block">
                    When you enter Gum Fall, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. Additionally, as you navigate the site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the site, and how you interact with the site. We refer to this automatically collected information as "Device Information." Additionally, we may collect the personal data you provide to us (including, but not limited to, first name, last name, address, payment information, etc.) during registration in order to fulfill the agreement.
                </div>

                <h2><b>WHY DO WE PROCESS YOUR DATA?</b></h2>
                <div className="block">
                    Our top priority is the security of customer data and as such we may process only minimal user data, only to the extent absolutely necessary to maintain the website. The information collected automatically is used only to identify potential cases of abuse and establish statistical information about website usage. This statistical information is not aggregated in such a way as to identify any particular user of the system.
                </div>
                <div className="block">
                    You can visit the site without telling us who you are or revealing any information by which someone could identify you as a specific person. However, if you want to use some of the app's features, or want to receive our newsletter or provide other details by filling out a form, you can provide us with personal data, such as your email, first name, last name, city of residence, organization and number. of phone. You can choose not to provide your personal data, but you may not be able to take advantage of some of the app's features. For example, you will not be able to receive our newsletter or contact us directly from the app. Users who are unsure what information is required can contact us at <a href="mailto: sysma1997@gmail.com">sysma1997@gmail.com</a>.
                </div>

                <h2><b>YOUR RIGHTS:</b></h2>
                <div className="block">
                    You have the following rights related to your personal data:
                    <ul>
                        <li>The right to be informed.</li>
                        <li>The right of access.</li>
                        <li>The right to rectification.</li>
                        <li>The right to erase.</li>
                        <li>The right to restrict processing.</li>
                        <li>The right to data portability.</li>
                        <li>The right to object.</li>
                        <li>Rights in relation to automated decision making and profiling.</li>
                    </ul>
                </div>
                <div className="block">
                    If you wish to exercise this right, please contact us using the contact information below.
                </div>
                <div className="block">
                    We emphasize that we are processing your information to fulfill contracts we might have with you (for example if you place an order through the site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information may be transferred outside of Colombia, including Europe, Canada and the United States.
                </div>

                <h2><b>LINKS TO OTHER WEBSITES:</b></h2>
                <div className="block">
                    Our site may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such websites or the privacy practices of third parties. We encourage you to be aware when you leave our website and to read the privacy statements of each site that may collect personal information.
                </div>

                <h2><b>SECURITY OF THE INFORMATION:</b></h2>
                <div className="block">
                    We secure the information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. We maintain reasonable administrative, technical and physical security measures to protect against unauthorized access, use, modification and disclosure of personal data under its control and custody. However, data transmission over the Internet or wireless networks cannot be guaranteed.
                </div>

                <h2><b>LEGAL DISCLOSURE:</b></h2>
                <div className="block">
                    We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                </div>

                <h2><b>CONTACT INFORMATION:</b></h2>
                <div className="block">
                    If you wish to contact us to understand more about this Policy or wish to contact us regarding any matter regarding individual rights and your personal information, you may email us at <a href="mailto: sysma1997@gmail.com">sysma1997@gmail.com</a>.
                </div>

                <h2><b>OTHERS:</b></h2>
                <div className="block">
                    These policies also apply to the following applications:
                    <ul>
                        <li><a href="https://play.google.com/store/apps/details?id=com.sysma1997.gumfall" target="_blank">ANDROID</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GumFallPrivacyPolices />);