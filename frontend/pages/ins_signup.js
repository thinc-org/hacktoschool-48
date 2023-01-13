import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import pageStyles from '../styles/std_signup.module.css';
import insImage from '../asset/login/forinstructor.png';

export default function ins_signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const jsonData = {
            name: data.get('name'),
            surname: data.get('surname'),
            email: data.get('email'),
            password: data.get('password'),
        }
        console.log(data.get("name"), data.get("name"),
            data.get("email"), data.get("password"));
        fetch('http://localhost:4000/ins_signup', {
            method: 'POST',
            crossDomail: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.message === "Signup success! Please signin") {
                    alert("Register success!")
                    window.location = "/login"
                } else {
                    alert("Register failed")
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

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
                <form className={pageStyles.form} onSubmit={handleSubmit}>
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
                    Already have an account? <Link href='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
}