import React from 'react';
import styles from './Header.module.css'


function Header(props) {
    return (
        <div className={styles.background}>
            <h2 className={styles.title}>News Aggregator</h2>
        </div>
    )
}

export default Header;
