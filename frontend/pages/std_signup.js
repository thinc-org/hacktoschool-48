import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import stdPageStyles from '../styles/std_signup.module.css';

import stdImage from '../asset/login/forstudent.png';

export default function std_signup() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget.value);

        const jsonData = {
            name: data.get('name'),
            surname: data.get('surname'),
            email: data.get('email'),
            password: data.get('password'),
        }
        console.log(data.get("firstName"), data.get("lastName"),
            data.get("email"), data.get("password"));
        fetch('http://localhost:3000/std_signup', {
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
                if (data.status === 201) {
                    alert("register success")
                    window.location = "/login"
                } else {
                    alert("register failed")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className={stdPageStyles.stdPage}>
            <Image
                src={stdImage}
                className={stdPageStyles.image}
                alt="Student Picture"
            >
            </Image>
            <div className={stdPageStyles.signupForm} onSubmit={handleSubmit}>
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
                    <input type="submit" id="submit" value="Submit"/>
                </form>
                <div className={stdPageStyles.already}>
                    Already have an account? <Link href='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
}