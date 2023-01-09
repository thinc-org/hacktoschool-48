import React from 'react';
import Image from 'next/image';
import landingStyle from '../../styles/landing.module.css';
import person1 from '../../asset/person1.png';
import 'remixicon/fonts/remixicon.css'

export default function landingPage() {
    return (
        <div className={landingStyle.sec1}>
            <div className={landingStyle.leftSide}>
                <div>
                    <div className={landingStyle.eCourse}>E-COURSE PLATFROM</div>
                    <div className={landingStyle.mainText}><span className="DelaFont">Learning and teaching online, made easy.</span></div>
                    <div className={landingStyle.normalText}>Practice your English and learn new things with the platfrom.</div>
                    <a href="#">
                        <div className={landingStyle.about}>
                            About platform
                        </div>
                    </a>

                </div>

                <div className={landingStyle.botFrame}>
                    <div>
                        <div>
                            <span><i className="ri-flashlight-fill"></i></span>
                            <span className="DelaFont">600+</span>
                        </div>
                        <div className={landingStyle.subTitle}>Popular words</div>
                    </div>
                    <div>
                        <div>
                            <span><i className="ri-gamepad-line"></i></span>
                            <span className="DelaFont">2+</span>
                        </div>
                        <div className={landingStyle.subTitle}>Mini-games</div>
                    </div>
                </div>

            </div>

            <div className={landingStyle.rightSide}>
                <Image
                    src={person1}
                    className={landingStyle.personPic}
                    width={480}
                    alt="person1"
                ></Image>
            </div>
        </div>
    );
}