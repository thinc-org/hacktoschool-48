// import styles from '../styles/header.css'
import React from 'react';
import { Container } from 'reactstrap';
import headerStyles from "../../styles/header.module.css";

export default function header() {
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
                                <li><a href="#">Games</a></li>
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