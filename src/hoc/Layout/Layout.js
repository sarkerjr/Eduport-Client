import React from "react";
import SideNavigation from '../../components/Navigation/SideNavigation/SideNavigation';

const Layout = (props) => {
    return (
        <React.Fragment>
            <SideNavigation />
            <main className="ml-56">{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
