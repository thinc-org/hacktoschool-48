import React from 'react';
// import PageStyles from '../styles/std_signup.module.css';
import createCoursePageStyles from '../styles/create_course.module.css';
import radio_button from '../styles/radio_button.module.css';

export default function create_course() {
    return (
        <div className={createCoursePageStyles.createCoursePage}>
            <div className={createCoursePageStyles.createCourse}>
                <span>Create Course</span>
            </div>
            <div>
                <form className={createCoursePageStyles.form} onSubmit={''}>
                    <label >
                        <p>Course Title</p>
                        <input type="text" name="c_title" />
                    </label>
                    <label>
                        <p>Course Description</p>
                        <input type="text" name="c_desc" />
                    </label>

                    <div>
                        <label className={radio_button.container}>Easy
                            <input type="radio" name="radio" value={'easy'}></input>
                            <span className={radio_button.checkmark}></span>
                        </label>
                        <label className={radio_button.container}>Medium
                            <input type="radio" name="radio" value={'medium'}></input>
                            <span className={radio_button.checkmark}></span>
                        </label>
                        <label className={radio_button.container}>Hard
                            <input type="radio" name="radio" value={'hard'}></input>
                            <span className={radio_button.checkmark}></span>
                        </label>
                    </div>
                    <input type="submit" id="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}