import React from 'react';
import Card from '../components/product_card/card';
import img1 from '../asset/courses/courseimg1.jpg';
import Link from 'next/link';

import dashboardStyles from '../styles/dashboard.module.css';

const data = [
    // Use alt+z to wrap the code (window), comand+z (macOs)
    {
        image: img1,
        courseName: 'Introduction to Programming',
        level: 'Easy',
        instructor: 'Mr. James Smith',
        detail: 'Learn HTML, CSS, Python, and JavaScript. Get projects that demonstrate your grasp of coding fundamentals, and build confidence in your ability to think and problem-solve like a programmer.',
    },
]

export default function dashboard() {
    return (
        <div className={dashboardStyles.Card}>
            <div className={dashboardStyles.topSection}>
                <span className={dashboardStyles.yourCourse}>Your Courses</span>
                <Link href={'/create_course'} className={dashboardStyles.rightSide}>
                    <div className={dashboardStyles.rightSideItem}>
                        <i class="ri-add-circle-fill"></i>
                        <span className={dashboardStyles.createCourse}>CREAT COURSE</span>
                    </div>
                </Link>
            </div>
            <div>
                <Card item={data[0]} />
            </div>
        </div>
    );
}