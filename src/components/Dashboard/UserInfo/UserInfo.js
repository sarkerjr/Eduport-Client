import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./UserInfo.css";
import * as actions from "../../../store/actions/index";

import ProfilePicture from "../../../assets/images/profile-picture.png";

const UserInfo = () => {
    const dispatch = useDispatch();

    const getUserInfo = useCallback(
        () => dispatch(actions.getUserInfo()),
        [dispatch]
    );
    useEffect(() => {
        getUserInfo();
    }, [getUserInfo]);

    const user = useSelector((state) => state.userInfo.user);

    let renderUser = null;

    if (user) {
        renderUser = (
            <React.Fragment>
                <div className="user-picture-container">
                    <img
                        className="user-picture"
                        src={ProfilePicture}
                        alt="Profile"
                    />
                </div>

                <div className="user-details-container">
                    <ul>
                        <li>
                            <h2>{user.studentName}</h2>
                        </li>
                        <li>{`ID: ${user.studentId}`}</li>
                        <li>{ `Session: ${user.session}` }</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }

    return (
        <div className="user-info-container card">
            {renderUser}
        </div>
    );
};
export default UserInfo;
