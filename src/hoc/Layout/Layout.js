import React from "react";

import './Layout.css';
import SideNavigation from '../../components/Navigation/SideNavigation/SideNavigation';

const Layout = (props) => {
    return (
        <React.Fragment>
            <SideNavigation />
            <main className="main-container">{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
