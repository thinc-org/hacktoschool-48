import React from "react";
import Image from "next/image";
import landingStyle from "../../styles/landing.module.css";
import "remixicon/fonts/remixicon.css";

import person1 from "../../asset/persons/person1.png";
import person2 from "../../asset/persons/person2.png";
import person3 from "../../asset/persons/person3.png";
import person4 from "../../asset/persons/person4.png";

export default function landingPage() {
  return (
    <div className={landingStyle.homeLandingPage}>
      {/* Section 1 */}
      <div className={landingStyle.sec1}>
        <div className={landingStyle.leftSide}>
          <div className={landingStyle.upperFrane}>
            <div className={landingStyle.eCourse}>E-COURSE PLATFORM</div>
            <div className={landingStyle.mainText}>
              <span className="DelaFont">
                Learning and teaching online, made easy.
              </span>
            </div>
            <div className={landingStyle.normalText}>
              Practice your English and learn new things with the platfrom.
            </div>
            <a href="#">
              <div className={landingStyle.about}>
                About platform <i className="ri-arrow-right-line"></i>
              </div>
            </a>
          </div>

          <div className={landingStyle.botFrame}>
            <div>
              <div>
                <span className={landingStyle.toTheBlue}>
                  <i className="ri-flashlight-fill"></i>
                </span>
                <span className="DelaFont">
                  600<span className={landingStyle.toTheBlue}>+</span>
                </span>
              </div>
              <div className={landingStyle.subTitle}>Popular words</div>
            </div>
            <div>
              <div>
                <span className={landingStyle.toTheBlue}>
                  <i className="ri-gamepad-line"></i>
                </span>
                <span className="DelaFont">
                  2<span className={landingStyle.toTheBlue}>+</span>
                </span>
              </div>
              <div className={landingStyle.subTitle}>Mini-games</div>
            </div>
          </div>
        </div>
        <div className={landingStyle.rightSide}>
          <Image
            src={person1}
            className={landingStyle.person1Pic}
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
            className={landingStyle.person2Pic}
            width={480}
            alt="person2"
          ></Image>
        </div>
        <div className={landingStyle.leftSide}>
          <div className={landingStyle.mainText}>
            <span className="DelaFont">Learn a language in a playful way</span>
          </div>
          <div className={landingStyle.normalText}>
            Make learning words more fun with mini-games
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className={landingStyle.sec3}>
        <div className={landingStyle.leftSide}>
          <div className={landingStyle.mainText}>
            <span className="DelaFont">Increase your vocabulary</span>
          </div>
          <div className={landingStyle.normalText}>
            Traditional and new effective approaches to word study
          </div>
          <div className={landingStyle.about}>
            Textbook<i className="ri-arrow-right-line"></i>
          </div>
        </div>
        <div className={landingStyle.sec3img}>
          <Image
            src={person3}
            className={landingStyle.person3Pic}
            width={612}
            alt="person3"
          ></Image>
        </div>
      </div>

      {/* Section 4 */}
      <div className={landingStyle.sec4}>
        <div>
          <Image
            src={person4}
            className={landingStyle.person4Pic}
            width={530}
            alt="person4"
          ></Image>
        </div>
        <div className={landingStyle.leftSide}>
          <div className={landingStyle.mainText}>
            <span className="DelaFont">Watch your progress every day</span>
          </div>
          <div className={landingStyle.normalText}>
            Save statistics on your achievements, words learned, and mistakes
          </div>
          <div className={landingStyle.about}>
            Statistics <i className="ri-arrow-right-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
