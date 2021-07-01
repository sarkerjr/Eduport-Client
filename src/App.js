import "./App.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import LoginForm from "./components/Auth/LoginForm";

function App() {
    let routes = (
        <Switch>
            <Route path="/login" component={LoginForm}/>
            <Redirect exact to="/" />
        </Switch>
    );

    return (
        <div>
            <Layout>{routes}</Layout>
        </div>
    );
}

export default withRouter(App);
