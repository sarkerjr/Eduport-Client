import React from "react";
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div class="container">
            <div class="wrapper">
                <div class="title"><span>Login</span></div>
                <form>
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
    );
};

export default LoginForm;
