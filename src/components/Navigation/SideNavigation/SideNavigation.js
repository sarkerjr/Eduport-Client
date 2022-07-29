import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import UserInfo from "./UserInfo/UserInfo";

const Toolbar = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    let sideNav = null;
    //If user authenticad, nav menu will be shown
    if (isAuth) {
        sideNav = (
            <div className="flex flex-col justify-between flex-wrap fixed top-0 left-0 h-full w-56 bg-side-drawer-bg z-10">
                <div className="p-5">
                    <UserInfo/>
                </div>

                <div className="p-5">
                    <div className="cursor-pointer no-underline text-white text-xl font-mono p-1 duration-100 hover:scale-110">
                        <Link
                            className="cursor-pointer no-underline text-white text-xl font-mono p-1 duration-100 hover:scale-110"
                            to="/dashboard"
                        >
                            Dashboard
                        </Link>
                    </div>
                    <div className="cursor-pointer no-underline text-white text-xl font-mono p-1 duration-100 hover:scale-110">
                        <Link
                            className="cursor-pointer no-underline text-white text-xl font-mono p-1 duration-100 hover:scale-110"
                            to="/pofile"
                        >
                            Profile
                        </Link>
                    </div>
                    <div className="cursor-pointer no-underline text-white text-xl font-mono p-1 duration-100 hover:scale-110">
                        <Link
                            className="cursor-pointer no-underline text-white text-xl font-mono p-1 duration-100 hover:scale-110"
                            to="/logout"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return <React.Fragment>{sideNav}</React.Fragment>;
};

export default Toolbar;
