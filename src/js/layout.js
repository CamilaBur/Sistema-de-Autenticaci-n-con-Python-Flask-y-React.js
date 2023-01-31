import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import {
    Home
} from "./views/home.jsx";
import {
    Demo
} from "./views/demo";
import {
    Single
} from "./views/single";
import {
    ViewCharacters
} from "./views/viewCharacters.jsx";
import {
    ViewVehicles
} from "./views/viewVehicles.jsx";
import {
    ViewPlanets
} from "./views/viewPlanets.jsx";
import {
    Login
} from "./views/login.jsx";
import {
    SignUp
} from "./views/signup.jsx";
import injectContext from "./store/appContext";

import {
    Navbar
} from "./component/navbar.jsx";
import {
    Footer
} from "./component/footer.jsx";

// create your first component
const Layout = () => {
        // the basename is used when your project is published in a subdirectory and not in the root of the domain
        // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
        const basename = process.env.BASENAME || "";

        return ( <
            div > {
                " "
            } <
            BrowserRouter basename = {
                basename
            } > {
                " "
            } <
            ScrollToTop > {
                " "
            } <
            Navbar / > {
                " "
            } <
            Routes > {
                " "
            } <
            Route path = "/"
            element = {
                < Home / >
            }
            />{" "} <
            Route path = "/demo"
            element = {
                < Demo / >
            }
            />{" "} <
            Route path = "/login"
            element = {
                < Login / >
            }
            />{" "} <
            Route path = "/signup"
            element = {
                < SignUp / >
            }
            />{" "} <
            Route path = "/viewCharacters/:theid"
            element = {
                < ViewCharacters / >
            }
            />{" "} <
            Route path = "/viewVehicles/:theid"
            element = {
                < ViewVehicles / >
            }
            />{" "} <
            Route path = "/viewPlanets/:theid"
            element = {
                < ViewPlanets / >
            }
            />{" "} <
            Route path = "*"
            element = {
                < h1 > Not found! < /h1>} / > {
                    " "
                } <
                /Routes>{" "} <
                Footer / > {
                    " "
                } <
                /ScrollToTop>{" "} <
                /BrowserRouter>{" "} <
                /div>
            );
        };

        export default injectContext(Layout);