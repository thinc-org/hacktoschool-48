import React from 'react';
import Image from 'next/image';
import cardStyles from '../../styles/card.module.css';

export default function card(props) {
    const { image, courseName, level, instructor, detail } = props.item;
    const getBatch = (level) => {
        if (level === 'Easy'){
            return cardStyles.batchEasy;
        }
        else if (level === 'Medium'){
            return cardStyles.batchMedium;
        }
        else {
            return cardStyles.batchHard;
        }
    }

    return (
        <div className={cardStyles.card}>
            <Image 
                src={image}
                className={cardStyles.image}
                alt="course image"
            ></Image>
            <div className={cardStyles.rightSide}>
                <div>
                    <div className={cardStyles.courseName}>{courseName}</div>
                    <div className={cardStyles.batch}>
                        <span>Level</span>
                        <div className={getBatch(level)}>{level}</div>
                    </div>
                    <div className={cardStyles.insName}>
                        <div><span className={cardStyles.blackText}>Instructor Name : </span>{instructor}</div>
                        <div></div>
                    </div>
                    <hr></hr>
                    <div className={cardStyles.detail}>{detail}</div>
                </div>
                <div><span className={cardStyles.enroll_btn}>Enroll this course</span></div>
            </div>
        </div>
    );
};