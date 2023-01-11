import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import pageStyles from '../styles/std_signup.module.css';
import insImage from '../asset/login/forinstructor.png';

export default function ins_signup() {
    return (
        <div className={pageStyles.stdPage}>
            <Image
                src={insImage}
                className={pageStyles.image}
                alt="Student Picture"
            >
            </Image>
            <div className={pageStyles.signupForm}>
                <div className={pageStyles.fStd}>For Instructor</div>
                <div className={pageStyles.signupText}>SIGN UP</div>
                <form className={pageStyles.form}>
                    <label>
                        <p>Name</p>
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <p>Surname</p>
                        <input type="text" name="surname" />
                    </label>
                    <label>
                        <p>Email Address</p>
                        <input type="text" name="email" />
                    </label>
                    <label>
                        <p>Create password</p>
                        <input type="text" name="password" />
                    </label>
                    <input type="submit" id="submit" value="Submit" />
                </form>
                <div className={pageStyles.already}>
                    Already have an account? <Link href='#'>Login</Link>
                </div>
            </div>
        </div>
    );
}