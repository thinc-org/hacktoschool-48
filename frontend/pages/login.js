import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageStyles from '../styles/std_signup.module.css';

import loginImage from '../asset/login/loginpage.jpeg';

export default function login_signup() {
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
                <form className={PageStyles.form}>
                    <label>
                        <p>Email</p>
                        <input type="text" name="email" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="text" name="password" />
                    </label>
                    <input type="submit" id="submit" value="Submit" />
                </form>
                <div className={PageStyles.already}>
                    Already have an account? <Link href='#'>Login</Link>
                </div>
            </div>
        </div>
    );
}