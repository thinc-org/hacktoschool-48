// import styles from '../styles/header.css'
import React, { useState } from 'react';
import { Container } from 'reactstrap';
import headerStyles from "../../styles/header.module.css";

export default function header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        // <div>Header</div>
        <div className={headerStyles.header}>
            <Container>
                <div className={headerStyles.content}>
                    <div className={headerStyles.leftNav}>
                        <div className={headerStyles.logo}><a href="#"><span className="DelaFont">GlobalTalk</span></a></div>
                        <div className={headerStyles.manu}>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Textbook</a></li>
                                <li><a href="#">Statistics</a></li>
                                <li className={headerStyles.dropdown}>
                                    <a href="#" onClick={toggle}>
                                        <span>Games</span>
                                        <i className="ri-arrow-down-s-line"></i>
                                    </a>
                                    {
                                        isOpen && (
                                            <ul className={headerStyles.dropdownContent}>
                                                <li className={headerStyles.contentItem}>
                                                    <a href="#">
                                                        <span>Sprint</span>
                                                        <i className="ri-arrow-right-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span>Audio-call</span>
                                                        <i className="ri-arrow-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={headerStyles.login}>
                        <div className={headerStyles.loginText}><a href="#">Login</a></div>
                        <a href="#">
                            <div className={headerStyles.signupbtn}>Sign up</div>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
}