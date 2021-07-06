import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import LoginForm from "./components/Auth/LoginForm/LoginForm";
import Dashboard from './components/Dashboard/Dashboard';
import Logout from "./components/Auth/Logout";
import * as actions from './store/actions/index';

const App = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();

    const checkAuthState = useCallback(() => dispatch(actions.authCheckState()), [dispatch]);

    useEffect(() => {
        checkAuthState();
    }, [checkAuthState]);
    
    let routes = (
        <Switch>
            <Route path="/login" component={LoginForm}/>
            <Redirect to="/login" />
        </Switch>
    );
    
    if(isAuth){
        routes = (
            <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/logout" component={Logout} />
                <Redirect to="/dashboard" />
            </Switch>
        );
    }

    return (
        <div>
            <Layout>{routes}</Layout>
        </div>
    );
}

export default withRouter(App);
