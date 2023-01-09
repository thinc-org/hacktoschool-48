import React from 'react';
import Image from 'next/image';
import landingStyle from '../../styles/landing.module.css';
import 'remixicon/fonts/remixicon.css'

import person1 from '../../asset/person1.png';
import person2 from '../../asset/person2.png';
import person3 from '../../asset/person3.png';
import person4 from '../../asset/person4.png';



export default function landingPage() {
    return (
        <div className={landingStyle.homeLandingPage}>
            {/* Section 1 */}
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

            {/* Section 2 */}
            <div className={landingStyle.sec2}>
                <div>
                    <Image
                        src={person2}
                        className={landingStyle.personPic}
                        width={480}
                        alt="person2"
                    >
                    </Image>
                </div>
                <div>
                    <div className={landingStyle.mainText}><span className="DelaFont">Learn a language in a playful way</span></div>
                    <div className={landingStyle.normalText}>Make learning words more fun with mini-games</div>
                </div>
            </div>

            {/* Section 3 */}
            <div className={landingStyle.sec3}>
                <div>
                    <div className={landingStyle.mainText}><span className="DelaFont">Increase your vocabulary</span></div>
                    <div className={landingStyle.normalText}>Traditional and new effective approaches to word study</div>
                </div>
                <div className={landingStyle.sec3img}>
                    <Image
                        src={person3}
                        className={landingStyle.personPic}
                        width={612}
                        alt="person3"
                    >
                    </Image>
                </div>
            </div>

            {/* Section 4 */}
            <div className={landingStyle.sec2}>
                <div>
                    <Image
                        src={person4}
                        className={landingStyle.personPic}
                        width={530}
                        alt="person4"
                    >
                    </Image>
                </div>
                <div>
                    <div className={landingStyle.mainText}><span className="DelaFont">Watch your progress every day</span></div>
                    <div className={landingStyle.normalText}>Save statistics on your achievements, words learned, and mistakes</div>
                </div>
            </div>

        </div>

    );
}