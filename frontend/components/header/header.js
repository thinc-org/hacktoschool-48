// import styles from '../styles/header.css'
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import headerStyles from "../../styles/header.module.css";

export default function header() {

  const [isSignClicked, setSignClicked] = useState(false);
  const signToggle = () => setSignClicked(!isSignClicked);
  const setSignFalse = () => setSignClicked(false);

  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const setClickToFalse = () => setClick(false);

  // let menuRef = useRef();
  let signupRef = useRef();

  // click outside to close Sign Up
  useEffect(() => {
    let signuphandler = (event) => {
      if (!signupRef.current.contains(event.target)) {
        setSignClicked(false);
      }
    };
    document.addEventListener("mousedown", signuphandler);

    return () => {
      document.removeEventListener("mousedown", signuphandler);
    };
  });

  const [tokenExists, setTokenExists] = useState(false);
  useEffect(() => {
    // Perform localStorage action
    localStorage.getItem('token') === null ? setTokenExists(false) : setTokenExists(true);
  }, [])

  const signout = () => {
    localStorage.removeItem('token');
    location.reload();
  }

  // const tokenExists = () => {
  //   if (typeof window !== 'undefined') {
  //     console.log('You are on the browser')
  //     // 👉️ can use localStorage here
    
  //     return localStorage.getItem('token');
  //   }
  //   else return localStorage.getItem('token');
  // }

  return (
    // <div>Header</div>
    <div className={headerStyles.header}>
      <Container>
        <div className={headerStyles.content}>
          <div className={headerStyles.navIcon} onClick={handleClick}>
            <Link href={!click ? "navigation" : "/"}>
              <i className="ri-menu-2-line"></i>
            </Link>
          </div>

          <div className={headerStyles.leftNav}>
            <div className={headerStyles.logo}>
              <Link href="/">
                <span className="DelaFont" onClick={setClickToFalse}>
                  GlobalTalk
                </span>
              </Link>
            </div>
            <div className={headerStyles.navbar}>
              <div className={headerStyles.manu}>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link href="#">Statistics</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={headerStyles.login}>
            <div className={tokenExists ? "" : headerStyles.displayNone}>
              {/* {tokenExists ? <p>True</p> : <p>False</p>} */}
              <div className={headerStyles.userIcon}>
                <Link href='/user_details'><i class="ri-account-circle-fill"></i></Link>
              </div>
              <div>
                <span className={headerStyles.signoutbtn} onClick={signout}>Log out</span>
              </div>
            </div>

            <div className={tokenExists ? headerStyles.displayNone : ""}>
              <div className={headerStyles.loginSection}>
                <div className={headerStyles.loginText}>
                  <Link href="/login">
                    <span>Log In</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>

                <div ref={signupRef}>
                  <div className={headerStyles.signupbtn} onClick={signToggle}>
                    Sign up
                  </div>
                  {/* {isSignClicked ? <p>True</p> : <p>False</p>} */}
                  {isSignClicked && (
                    <div className={headerStyles.dropSignInContent}>
                      <Link href="/std_signup" onClick={setSignFalse}>
                        <div>For student</div>
                      </Link>
                      <hr className={headerStyles.hr}></hr>
                      <Link href="/ins_signup" onClick={setSignFalse}>
                        <div>For instructor</div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
