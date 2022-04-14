import React from 'react';

import './SideDrawerIcon.css';
import SideDrawerIcon from '../../../assets/images/ic_sideDrawer.png';

const SideDrawer = () => {
    return (
        <div className="LogoContainer">
            <img src={SideDrawerIcon} alt="DrawerIcon"/>
        </div>
    );
}

export default SideDrawer;
