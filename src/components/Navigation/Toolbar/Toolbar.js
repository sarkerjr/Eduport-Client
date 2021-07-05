import React from "react";
import { Link } from "react-router-dom";

import "./Toolbar.css";
import SideDrawerIcon from "../SideDrawer/SideDrawerIcon";

const Toolbar = () => {
    return (
        <nav className="nav-link__container">
            <SideDrawerIcon className="nav-link__drawer"/>
            <ul className="nav-link__items">
                <li>
                    <Link to="/" className="nav-links">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/login" className="nav-links">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="nav-links">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="#about" className="nav-links">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Toolbar;
