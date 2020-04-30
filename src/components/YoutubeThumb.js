import React from 'react';

const YoutubeThumb = props => {
    return (
        <div
            onClick={props.onClick}>
            <img 
                src={`https://img.youtube.com/vi/${props.ID}/0.jpg`}
                alt= "youtube thumbnail"
                height="inherit"
                width="inherit"
            />
        </div>
    )
}
export default YoutubeThumb;