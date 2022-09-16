import React from 'react'
import styles from './Article.module.css'

function Article(props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.blurb}>Blurb Blurb Blurb Blurb Blurb</div>
        </div>
    )
}

export default Article;