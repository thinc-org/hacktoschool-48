import React from 'react';
import footerStyles from '../../styles/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Thinc from '../../asset/icons/thinc.png';
import GT from '../../asset/icons/GT.png';
import Youtube from '../../asset/icons/youtube.png';

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
                        <Link href="https://thinc.in.th/">
                            <Image
                                src={Thinc}
                                // className={image}
                                alt="Thinc icon"
                            >
                            </Image>
                        </Link>
                        
                        <Image
                            src={GT}
                            // className={image}
                            alt="GT icon"
                        >
                        </Image>
                        <Image
                            src={Youtube}
                            // className={image}
                            alt="Youtube icon"
                        >
                        </Image>
                    </div>
                    <div>
                        <p>©2021 GlobalTalk. Project for GlobalTalk.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}