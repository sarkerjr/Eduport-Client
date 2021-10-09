import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./SideNavigation.css";

const Toolbar = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    let sideNav = null;
    //If user authenticad, nav menu will be shown
    if (isAuth) {
        sideNav = (
            <div className="sidebar">
                {/* This section is at the top */}
                <div className="sidebar-section">
                    <div className="sidebar-section__item">
                        <Link className="sidebar-section__item" to="/dashboard">Dashboard</Link>
                    </div>
                </div>
                
                {/* This section is at the bottom */}
                <div className="sidebar-section">
                    <div className="sidebar-section__item">
                        <Link className="sidebar-section__item" to="/logout">Logout</Link>
                    </div>
                </div>
            </div>
        );
    }

    return <React.Fragment>{sideNav}</React.Fragment>;
};

export default Toolbar;
