import React from 'react';
import './LoginPage.css';
import axois from "axios";
import { Helmet } from 'react-helmet'


export default function LoginPage() {
    return (
        <div className="center">
            <Helmet>
                <style>{'body {background: linear-gradient(120deg, #2980b9, #8e44ad); padding: 0; margin: 0; font-family: Montserrat; height: 100vh; overflow: hidden }'}</style>

            </Helmet>
            <h1>Log In</h1>
            <form onSubmit={(e) => login(e)}>
                <div className="txt_field">
                    <input type="email" name='email' id='email' required />
                    <span></span>
                    <label htmlFor='email'>Your e-mail</label>
                </div>
                <div className="txt_field">
                    <input type="password" name='password' id='password' required />
                    <span></span>
                    <label htmlFor='password'>Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login" />
            </form>

        </div>
    );
}

function login(e) {
    e.preventDeFault();
    let request = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    axois.post('http://localhost:3000/login', request)

}

