import React, { useEffect, useState } from 'react'
import styles from './Body.module.css'
import Article from './Article';

import axios from "axios";
import { API_URL } from "../constants";


function Body(props) {
    const [articleData, setArticleData] = useState([])
    const [filteredArticleData, setFilteredArticleData] = useState([])
    const [valuesCaptured, setValuesCaptured] = useState(false)

    useEffect(() => {
        axios.get(API_URL).then(response => setArticleData(articleData => [response.data]));
        setValuesCaptured(true)
    }, []);

    console.log(articleData)
    console.log(filteredArticleData)

    useEffect(() => {
        setFilteredArticleData([])
        var tempArticles = []
        articleData.forEach(val => val.category=="Home" && tempArticles.push(val))
        setFilteredArticleData([tempArticles])
        console.log(tempArticles)

    }, [props.selectedTab])
        
    return (
        /*
        <div>
        {
            articleData.data.map(x =>
            (<div className={styles.background}>
                <Article title={x.title}></Article>
            </div>))
        }
        </div>
        */
        valuesCaptured ?
        filteredArticleData.map(x => <Article title={x.title} blurb={x.blurb}></Article>)
        :
        <div></div>
    )
}

export default Body;
