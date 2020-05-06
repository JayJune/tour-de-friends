import React from 'react';
import tdfLogo from '../assets/tdfLogo.jpg';

const NewsThumb = props => {
    var myImg = props.article.urlToImage ? props.article.urlToImage : tdfLogo;
    return (
        <div className={"news-thumbnail-holder"}>
            <a href={props.article.url}>
                <img
                    className={"news-thumbnail"}
                    src={myImg}
                />
                <div className="top-overlay">
                    <div className="article-source-text">
                        {props.article.source.name}
                    </div>
                    {props.article.title}
                </div>
            </a>
        </div>
    )
}
export default NewsThumb;