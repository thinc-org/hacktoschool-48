import React from 'react';
import navStyles from '../styles/nav.module.css';
import Link from 'next/link';

export default function navigation() {
    return (
        <div className={navStyles.nav}>
            <div className={navStyles.navitem}>
                <Link href='/'><h3>Main</h3></Link>
                <h3>Textbook</h3>
                <h3>Statistics</h3>
                <h3>Sprint</h3>
                <h3>Audio-call</h3>
            </div>
            
        </div>
    );
}