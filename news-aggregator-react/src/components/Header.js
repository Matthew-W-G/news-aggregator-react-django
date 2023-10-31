import React from 'react';
import styles from './Header.module.css'


function Header(props) {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const formattedDate = `${month} ${date.getDate()} ${date.getFullYear()}`

    return (
        <div className={styles.background}>
            <h2 className={styles.date}>{formattedDate}</h2>
            <h2 className={styles.title}>Top Headlines</h2>
        </div>
    )
}

export default Header;
