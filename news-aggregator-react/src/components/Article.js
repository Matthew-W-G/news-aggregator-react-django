import React from 'react'
import styles from './Article.module.css'

function Article(props) {
    return (
        <div className={styles.containerRow}>
            <a href={props.linkLeft} className={styles.containerLeft}>
                <div className={styles.title}>{props.titleLeft}</div>
                <img
                    className={styles.image}
                    src={props.imageLeft}
                    alt="new"
                />
            </a>
            <a href={props.linkRight} className={styles.containerRight}>
                <div className={styles.title}>{props.titleRight}</div>
                <img
                    className={styles.image}
                    src={props.imageRight}
                    alt="new"
                />
            </a>
        </div>
    )
}

export default Article;