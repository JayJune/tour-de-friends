import React from 'react';

const YoutubeThumb = props => {
    return (
        <div className={"youtube-thumbnail-holder"}>
            {props.selected ? 
                <>
                    <img 
                    className={"youtube-thumbnail selected"}
                    src={`https://img.youtube.com/vi/${props.ID}/0.jpg`}
                    alt= "youtube thumbnail"
                    height="auto"
                    width="100%"/>
                    <div className="centered-overlay">Now Playing</div>
                </>
            :<img 
                className={"youtube-thumbnail"}
                onClick={props.onClick}
                src={`https://img.youtube.com/vi/${props.ID}/0.jpg`}
                alt= "youtube thumbnail"/>}
            <div className="bottom-center-overlay">{props.title}</div>
        </div>
    )
}
export default YoutubeThumb;