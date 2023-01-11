import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import stdPageStyles from '../styles/std_signup.module.css';

import stdImage from '../asset/login/forstudent.png';

export default function std_signup() {
    return (
        <div className={stdPageStyles.stdPage}>
            <Image
                src={stdImage}
                className={stdPageStyles.image}
                alt="Student Picture"
            >
            </Image>
            <div className={stdPageStyles.signupForm}>
                <div className={stdPageStyles.fStd}>For Student</div>
                <div className={stdPageStyles.signupText}>SIGN UP</div>
                <form className={stdPageStyles.form}>
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
                <div className={stdPageStyles.already}>
                    Already have an account? <Link href='#'>Login</Link>
                </div>
            </div>
        </div>
    );
}