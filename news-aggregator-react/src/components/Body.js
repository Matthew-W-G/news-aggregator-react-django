import React, { useEffect, useState } from 'react'
import styles from './Body.module.css'
import Article from './Article';

import axios from "axios";
import { API_URL } from "../constants";
import ReactLoading from "react-loading";



function Body(props) {
    const [articleData, setArticleData] = useState([])
    const [filteredArticleData, setFilteredArticleData] = useState([])

    useEffect(() => {
        axios.get(API_URL).then(
            response =>  {
                setArticleData(articleData => response.data)
                var tempArticles = []
                response.data.forEach(val => val.category == props.selectedTab && tempArticles.push(val))
                setFilteredArticleData(data => tempArticles)
            });
    }, []);


    useEffect(() => {
        if(articleData != []) {
            var tempArticles = []
            articleData.forEach(val => val.category == props.selectedTab && tempArticles.push(val))
            console.log('tempArticles', tempArticles)
            setFilteredArticleData(data => tempArticles)
        }
    }, [props.selectedTab])

    let filteredArticleDataLeft = filteredArticleData.slice(0, filteredArticleData.length / 2)
    let filteredArticleDataRight = filteredArticleData.slice(filteredArticleData.length / 2 + 1, filteredArticleData.length);
    filteredArticleDataLeft = filteredArticleDataLeft.slice(0, filteredArticleDataRight.length)

    return (
        <div>
            {filteredArticleData && filteredArticleData.length
                ? (<div>
                    {
                        filteredArticleDataLeft.map((x, index) => <Article
                            linkLeft={x.url}
                            titleLeft={x.title}
                            imageLeft={x.image}
                            linkRight={filteredArticleDataRight[index].url}
                            titleRight={filteredArticleDataRight[index].title}
                            imageRight={filteredArticleDataRight[index].image}
                        ></Article>)
                    }
                </div>
                )
                : <ReactLoading
                type={"cubes"}
                color={"red"}
                height={100}
                width={200}
              />
            }
        </div>
    )
}

export default Body;