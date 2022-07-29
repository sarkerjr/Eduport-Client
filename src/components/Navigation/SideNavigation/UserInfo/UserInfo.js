import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../../../store/actions/index";

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
                <p className="no-underline text-white text-xl font-mono p-1">
                    {user.studentName}
                </p>
                <p className="no-underline text-white text-xs font-mono p-1">
                    {`ID: ${user.studentId}`}
                </p>
                <p className="no-underline text-white text-xs font-mono p-1">
                    {`Session: ${user.session}`}
                </p>
            </React.Fragment>
        );
    }

    return renderUser;
};
export default UserInfo;
