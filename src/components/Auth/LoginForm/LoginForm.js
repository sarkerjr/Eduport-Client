import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginForm.css';
import * as actions from '../../../store/actions/index';

const LoginForm = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth.isAuth);

    const userAuthenticate = () => dispatch(actions.addAuth());

    
    const authHandler = event => {
        event.preventDefault();
        
        if(!isAuth)
            userAuthenticate();
    }
    
    let authRedirect = isAuth ? <Redirect to="/dashboard"/> : null;
    
    return (
        <React.Fragment>
            {authRedirect}
            <div class="container">
                <div class="wrapper">
                    <div class="title"><span>Login</span></div>
                    <form onSubmit={authHandler}>
                        <div class="row">
                            <i class="input-username"></i>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div class="row">
                            <i class="input-password"></i>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div class="row button">
                            <input type="submit" value="Login"></input>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginForm;