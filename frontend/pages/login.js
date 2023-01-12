import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageStyles from '../styles/std_signup.module.css';
import loginImage from '../asset/login/loginpage.jpeg';

export default function login_signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const jsonData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        // const API_URL = "https://sour-times-scream-49-230-141-85.loca.lt/login"
        const API_URL = "http://localhost:4000/login"

        fetch(API_URL, {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data,"userLogin");
                if (data.token) {
                    if (jsonData.email !== "admin") {
                        window.localStorage.setItem("token", data.token)
                        alert("Login success!")
                    } else {
                        window.localStorage.setItem("token", data.token)
                        alert("Login success!")
                    }
                    window.location.pathname = "/";
                } else {
                    alert("login failed");
                }
            })
            .catch((error) => {
                alert("Login failed! Please sign up before logging in.");
                console.error('Error:', error);
            });
    };

    return (
        <div className={PageStyles.stdPage}>
            <Image
                src={loginImage}
                className={PageStyles.image}
                alt="Student Picture"
            >
            </Image>
            <div className={PageStyles.loginForm}>
                <div className={PageStyles.fStd}>Welcome</div>
                <div className={PageStyles.signupText}>LOG IN</div>
                <form className={PageStyles.form} onSubmit={handleSubmit}>
                    <label>
                        <p>Email</p>
                        <input type="text" name="email" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" id="submit" value="Submit" />
                </form>
                <div className={PageStyles.already}>
                    Need an account? <Link href='/std_signup'>Sign up</Link>
                </div>
            </div>
        </div>
    );
}