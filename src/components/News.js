import React, { useState, useEffect } from 'react';
import NewsThumb from "./NewsThumb";

function News(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        var requestUrl = 'http://newsapi.org/v2/everything?' +
        'qInTitle="tour de france"&' +
        'sources?language=en&' +
        'sortBy=popularity&' +
        `apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;
        fetch(requestUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setArticles(result.articles);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        

    },[])

    if (error) {
        return <div>Error: {error.message}</div>;
      } 
    else if (!isLoaded) {
        return <div>Loading...</div>;
    } 
    else {
        console.log(articles);
        var myNewsTiles = articles.map( (article, index) => {
            return ( 
                <NewsThumb 
                    key={index}
                    article={article}/>
            )
        })
        return(
            <div className={"article-holder container-lg"}>
                <div className={"page-content-holder"}>
                    <h1>Latest News</h1>
                    {myNewsTiles}
                </div>
                <div>Powered by <a href="https://newsapi.org/">newsapi.org</a></div>
            </div>
    )}
}
export default News;