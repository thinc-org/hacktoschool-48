import React from 'react';
// import PageStyles from '../styles/std_signup.module.css';
import createCoursePageStyles from '../styles/create_course.module.css';
import radio_button from '../styles/radio_button.module.css';

export default function create_course() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const jsonData = {
            title: data.get('c_title'),
            description: data.get('c_desc'),
            level: data.get('level'),
            instructorName: data.get('instructorName'),
        }
        // const API_URL = "https://sour-times-scream-49-230-141-85.loca.lt/login"
        const API_URL = "http://localhost:4000/instcourse"
        const token = localStorage.getItem("token")
        fetch(API_URL, {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: token
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.message === 'Course created!') {
                    alert("Course created!");
                    window.location.pathname = "/";
                } else {
                    alert("Created failed.");
                }
            })
            .catch((error) => {
                alert("Created failed.");
                console.error('Error:', error);
            });
    };

    return (
        <div className={createCoursePageStyles.createCoursePage}>
            <div className={createCoursePageStyles.createCourse}>
                <span>Create Course</span>
            </div>
            <div>
                <form className={createCoursePageStyles.form} onSubmit={handleSubmit}>
                    <label >
                        <p>Course Title</p>
                        <input type="text" name="c_title" />
                    </label>
                    <label>
                        <p>Course Description</p>
                        <input type="text" name="c_desc" />
                    </label>
                    <label>
                        <p>Instructor Name</p>
                        <input type="text" name="instructorName" />
                    </label>

                    <div>
                        <label className={radio_button.container}>Easy
                            <input type="radio" name="level" value={'easy'}></input>
                            <span className={radio_button.checkmark}></span>
                        </label>
                        <label className={radio_button.container}>Medium
                            <input type="radio" name="level" value={'medium'}></input>
                            <span className={radio_button.checkmark}></span>
                        </label>
                        <label className={radio_button.container}>Hard
                            <input type="radio" name="level" value={'hard'}></input>
                            <span className={radio_button.checkmark}></span>
                        </label>
                    </div>
                    <input type="submit" id="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}