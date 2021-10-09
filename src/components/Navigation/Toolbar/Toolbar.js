import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import "./Toolbar.css";
import SideDrawerIcon from "../SideDrawer/SideDrawerIcon";

const Toolbar = () => {
    const isAuth = useSelector(state => state.auth.isAuth);

    let navItems = null;
    //If user authenticad, nav menu will be shown
    if(isAuth) {
        navItems = (
            <nav className="nav-link__container">
                <SideDrawerIcon className="nav-link__drawer"/>
                <ul className="nav-link__items">
                    <li>
                        <Link to="/dashboard" className="nav-links">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" className="nav-links">
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }

    return (
        <React.Fragment>
            {navItems}
        </React.Fragment>
    );
};

export default Toolbar;
