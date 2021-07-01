import React from "react";
import { useSelector } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import LoginForm from "./components/Auth/LoginForm/LoginForm";
import Dashboard from './components/Dashboard/Dashboard';

function App() {
    const isAuth = useSelector(state => state.auth.isAuth);
    
    let routes = (
        <Switch>
            <Route path="/login" component={LoginForm}/>
            <Redirect to="/" />
        </Switch>
    );
    
    if(isAuth){
        routes = (
            <Switch>
                <Route path="/login" component={LoginForm}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Redirect to="/" />
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
