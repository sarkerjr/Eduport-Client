import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import "./LoginForm.css";
import * as actions from "../../../store/actions/index";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isAuth = useSelector((state) => state.auth.isAuth);

    const dispatch = useDispatch();
    const userAuthenticate = (email, password) =>
        dispatch(actions.authCheck(email, password));

    const inputHandler = (event, inputName) => {
        if (inputName === "loginEmail") setEmail(event.target.value);
        else if (inputName === "loginPassword") setPassword(event.target.value);
    };

    const authHandler = async (event) => {
        event.preventDefault();

        userAuthenticate(email, password);
    };
    
    let authRedirect = isAuth ? <Redirect to="/dashboard" /> : null;
    return (
        <React.Fragment>
            {authRedirect}
            <div className="container">
                <div className="wrapper">
                    <div className="title">
                        <span>Login</span>
                    </div>
                    <form onSubmit={authHandler}>
                        <div className="row">
                            <i className="input-username"></i>
                            <input
                                name="loginEmail"
                                type="text"
                                placeholder="Email"
                                onChange={(event) =>
                                    inputHandler(event, "loginEmail")
                                }
                            />
                        </div>
                        <div className="row">
                            <i className="input-password"></i>
                            <input
                                name="loginPassword"
                                type="password"
                                placeholder="Password"
                                onChange={(event) =>
                                    inputHandler(event, "loginPassword")
                                }
                            />
                        </div>
                        <div className="row button">
                            <input type="submit" value="Login"></input>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginForm;
