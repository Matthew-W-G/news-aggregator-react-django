import React from 'react'
import styles from './Tabs.module.css'

function Tabs(props) {
    function setHome() {
        props.switchTab("Home")
    }

    function setPolitics() {
        props.switchTab("Politics")
    }

    function setBusiness() {
        props.switchTab("Business")
    }

    function setWorld() {
        props.switchTab("World")
    }

    function setEntertainment() {
        props.switchTab("Entertainment")
    }

    function setOpinion() {
        props.switchTab("Opinion")
    }

    return (
        <div className={styles.background}>
            <button onClick={setHome} className={styles.category}>Home</button>
            <button onClick={setPolitics} className={styles.category}>Politics</button>
            <button onClick={setBusiness} className={styles.category}>Business</button>
            <button onClick={setWorld} className={styles.category}>World</button>
            <button onClick={setEntertainment} className={styles.category}>Entertainment</button>
            <button onClick={setOpinion} className={styles.category}>Opinion</button>
        </div>
    )
}

export default Tabs;
