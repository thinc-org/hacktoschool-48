// import styles from '../styles/header.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import headerStyles from "../../styles/header.module.css";
import { useRouter } from 'next/router'

export default function header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isSignClicked, setSignClicked] = useState(false);
    const signToggle = () => setSignClicked(!isSignClicked);

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const setClickToFalse = () => setClick(false);

    return (
        // <div>Header</div>
        <div className={headerStyles.header}>
            <Container>
                <div className={headerStyles.content}>
                    <div className={headerStyles.navIcon} onClick={handleClick}>
                        <Link href={(!click) ? 'navigation' : '/'}>
                            <i className="ri-menu-2-line"></i>
                        </Link>
                    </div>

                    <div className={headerStyles.leftNav}>
                        <div className={headerStyles.logo}><Link href="/"><span className="DelaFont" onClick={setClickToFalse}>GlobalTalk</span></Link></div>
                        <div className={headerStyles.navbar}>
                            <div className={headerStyles.manu}>
                                <ul>
                                    <li><Link href="/">
                                        Home
                                    </Link></li>
                                    <li><Link href="/textbook">
                                        Textbook
                                    </Link></li>
                                    <li><Link href="#">
                                        Statistics
                                    </Link></li>
                                    <li className={headerStyles.dropdown}>
                                        <Link href="#" onClick={toggle}>
                                            <span>Games</span>
                                            <i className="ri-arrow-down-s-line"></i>
                                        </Link>
                                        {
                                            isOpen && (
                                                <ul className={headerStyles.dropdownContent}>
                                                    <li>
                                                        <Link href="#">
                                                            <span>Sprint</span>
                                                            <i className="ri-arrow-right-line"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <span>Audio-call</span>
                                                            <i className="ri-arrow-right-line"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={headerStyles.login}>
                        <div className={headerStyles.loginText}>
                            <Link href="#" >
                                <span>Log In</span>
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>

                        <div>
                            <div className={headerStyles.signupbtn} onClick={signToggle}>Sign up</div>
                            {/* {isSignClicked ? <p>True</p> : <p>False</p>} */}
                            {isSignClicked && (
                                <div className={headerStyles.dropSignInContent}>
                                    <Link href='#'>
                                        <div>For student</div>
                                    </Link >
                                    <Link href='#'>
                                        <div>For instructor</div>
                                    </Link>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}