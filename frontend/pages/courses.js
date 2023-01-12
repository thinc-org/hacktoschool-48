import React from 'react';
import coursePageStyles from '../styles/textbook.module.css';
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link';

import Card from '../components/product_card/card';
import img1 from '../asset/courses/courseimg1.jpg';
import img2 from '../asset/courses/courseimg2.jpg';
import img3 from '../asset/courses/courseimg3.jpg';
import card from '../components/product_card/card';

const data = [
    // Use alt+z to wrap the code (window), comand+z (macOs)
    {
        image: img1,
        courseName: 'Introduction to Programming',
        level: 'Easy',
        instructor: 'Mr. James Smith',
        detail: 'Learn the basics of programming through HTML, CSS, Python, and JavaScript. Get extensive practice with hands-on exercises and projects that demonstrate your grasp of coding fundamentals, and build confidence in your ability to think and problem-solve like a programmer.',
    },
    {
        image: img2,
        courseName: 'Advanced Mathematics',
        level: 'Medium',
        instructor: 'Mr. Lee and Ms. Kim',
        detail: 'Learn everything about advanced mathematics with proof of theorems and solution of exercises',
    },
    {
        image: img3,
        courseName: 'Data Structures',
        level: 'Hard',
        instructor: 'Thinc',
        detail: 'In this course, you will learn how these data structures are implemented in different programming languages and will practice implementing them in our programming assignments.',
    }
]

export default function course() {

    

    return (
        <div className={coursePageStyles.textbook}>
            <div className={coursePageStyles.topSection}>
                <div className={coursePageStyles.whiteBox}>
                    <div className={coursePageStyles.leftSideBox}>
                        <div className={coursePageStyles.leftSideText}>
                            <div className={coursePageStyles.icon}>
                                <i className="ri-book-2-fill"></i>
                            </div>
                            <div>Courses</div>
                        </div>
                        <hr className={coursePageStyles.hr}></hr>

                    </div>
                    <div className={coursePageStyles.rightSideBox}>
                        <Link href='#'>
                            <div className={coursePageStyles.sprint}><span className={coursePageStyles.sprintText}>Sprint</span></div>
                        </Link>
                        <Link href='#'>
                            <div className={coursePageStyles.audioCall}><span className={coursePageStyles.audioCallText}>Audio-Call</span></div>
                        </Link>

                        <div className={coursePageStyles.settingBtn}>
                            <div className={coursePageStyles.settingsIcon}>
                                <i className="ri-settings-5-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={coursePageStyles.levels}>
                    <div className={coursePageStyles.valid_levelItem}>
                        <span>ALL</span>
                    </div>
                    <div className={coursePageStyles.levelItem}>
                        <span>Easy</span>
                        <div className={coursePageStyles.batchEasy}><p>Easy</p></div>
                    </div>
                    <div className={coursePageStyles.levelItem}>
                        <span>Medium</span>
                        <div className={coursePageStyles.batchMedium}><p>Medium</p></div>
                    </div>
                    <div className={coursePageStyles.levelItem}>
                        <span>Hard</span>
                        <div className={coursePageStyles.batchHard}><p>Hard</p></div>
                    </div>
                </div>
            </div>

            <div className={coursePageStyles.courseSection}>
                {data.map((item) => (
                    <div className={coursePageStyles.cardAlignment}>
                        <Card item={item}/>
                    </div>
                ))}
            </div>

        </div>
    );
}