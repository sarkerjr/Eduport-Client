import React from "react";
import { Link } from "react-router-dom";

import "./Toolbar.css";
import SideDrawerIcon from "../SideDrawer/SideDrawerIcon";

const Toolbar = () => {
    return (
        <nav class="nav-link__container">
            <SideDrawerIcon class="nav-link__drawer"/>
            <ul class="nav-link__items">
                <li>
                    <Link to="/" class="nav-links">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/login" class="nav-links">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="#contact" class="nav-links">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="#about" class="nav-links">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Toolbar;
