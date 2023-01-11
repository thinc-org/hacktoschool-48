import React from 'react';
import textbookStyles from '../styles/textbook.module.css';
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link';

export default function textbook() {

    return (
        <div className={textbookStyles.textbook}>
            <div className={textbookStyles.topSection}>
                <div className={textbookStyles.whiteBox}>
                    <div className={textbookStyles.leftSideBox}>
                        <Link href='#'>
                            <div className={textbookStyles.leftSideText}>
                                <div className={textbookStyles.icon}>
                                    <i className="ri-book-2-fill"></i>
                                </div>
                                <div>Textbook</div>
                            </div>
                        </Link>
                        <hr id="hr"></hr>
                        <Link href='#'>
                            <div className={textbookStyles.leftSideText}>
                            <div className={textbookStyles.icon}>
                                <i className="ri-book-open-fill"></i>
                            </div>
                            <div>Dictionary</div>
                            </div>
                        </Link>
                        
                    </div>
                    <div className={textbookStyles.rightSideBox}>
                        <Link href='#'>
                            <div className={textbookStyles.sprint}><span className={textbookStyles.sprintText}>Sprint</span></div>
                        </Link>
                        <Link href='#'>
                            <div className={textbookStyles.audioCall}><span className={textbookStyles.audioCallText}>Audio-Call</span></div>
                        </Link>

                        <div className={textbookStyles.settingBtn}>
                            <div className={textbookStyles.settingsIcon}>
                                <i className="ri-settings-5-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={textbookStyles.levels}>
                    <div className={textbookStyles.valid_levelItem}>
                        <span>A1</span>
                        <div className={textbookStyles.valid_batchEasy}><p>Easy</p></div>
                    </div>
                    <div className={textbookStyles.levelItem}>
                        <span>A2</span>
                        <div className={textbookStyles.batchEasy}><p>Easy</p></div>
                    </div>
                    <div className={textbookStyles.levelItem}>
                        <span>B1</span>
                        <div className={textbookStyles.batchMedium}><p>Medium</p></div>
                    </div>
                    <div className={textbookStyles.levelItem}>
                        <span>B2</span>
                        <div className={textbookStyles.batchMedium}><p>Medium</p></div>
                    </div>
                    <div className={textbookStyles.levelItem}>
                        <span>C1</span>
                        <div className={textbookStyles.batchHard}><p>Hard</p></div>
                    </div>
                    <div className={textbookStyles.levelItem}>
                        <span>C2</span>
                        <div className={textbookStyles.batchHard}><p>Hard</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}