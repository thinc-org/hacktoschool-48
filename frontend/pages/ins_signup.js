import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stdPageStyles from '../styles/std_signup.module.css';
import insImage from '../asset/login/forinstructor.png';

export default function ins_signup() {
    return (
        <div className={stdPageStyles.stdPage}>
            <Image
                src={insImage}
                className={stdPageStyles.image}
                alt="Student Picture"
            >
            </Image>
            <div className={stdPageStyles.signupForm}>
                <div className={stdPageStyles.fStd}>For Instructor</div>
                <div className={stdPageStyles.signupText}>Sign Up</div>
                <form className={stdPageStyles.form}>
                    <label>
                        <p>Name</p>
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <p>Surname</p>
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <p>Email Address</p>
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <p>Create password</p>
                        <input type="text" name="name" />
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