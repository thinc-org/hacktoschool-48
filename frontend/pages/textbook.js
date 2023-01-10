import React from 'react';
import textbookStyles from '../styles/textbook.module.css';

export default function textbook() {

    return (
        <div className={textbookStyles.textbook}>
            <div className={textbookStyles.whiteBox}>
                <div className={textbookStyles.leftSideBox}>
                    <div>Textbook</div>
                    <div>Dictionary</div>
                </div>
                <div className={textbookStyles.rightSideBox}>
                    <div>Sprint</div>
                    <div>Audio-Call</div>
                    <div>Settings</div>
                </div>
            </div>

            <div className={textbookStyles.levels}>
                <div>A1</div>
                <div>A2</div>
                <div>B1</div>
                <div>B2</div>
                <div>C1</div>
                <div>C2</div>
            </div>
        </div>
    );
}