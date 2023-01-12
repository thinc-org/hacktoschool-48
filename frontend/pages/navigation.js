import React from 'react';
import navStyles from '../styles/nav.module.css';
import Link from 'next/link';

export default function navigation() {
    return (
        <div className={navStyles.nav}>
            <div className={navStyles.navitem}>
                <Link href='/'><h3>Main</h3></Link>
                <Link href='/courses'><h3>Courses</h3></Link>
                <h3>Statistics</h3>
            </div>
        </div>
    );
}