import React from 'react';
import footerStyles from '../../styles/footer.module.css';

export default function footer() {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.allSection}>
                <div className={footerStyles.section}>
                    <div className={footerStyles.menu}>
                        <a href="#"><p>Home</p></a>
                        <a href="#"><p>Textbook</p></a>
                        <a href="#"><p>Statistics</p></a>
                        <a href="#"><p>Sprint</p></a>
                        <a href="#"><p>Audio-call</p></a>
                    </div>
                    <div className={footerStyles.menu}>
                        <a href="#"><p>Alex</p></a>
                        <a href="#"><p>Gabriel</p></a>
                        <a href="#"><p>Marcus</p></a>
                    </div>
                </div>
                <hr width="100%" size="2" color="#E0E0E0"></hr>
                <div className={footerStyles.lowersection}>
                    <div className={footerStyles.lowermenu}>
                        <span>Thinc icon</span>
                        <span>GT icon</span>
                        <span>YT icon</span>
                    </div>
                    <div>
                        <p>©2021 GlobalTalk. Project for GlobalTalk.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}