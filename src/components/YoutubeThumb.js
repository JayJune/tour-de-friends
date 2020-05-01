import React from 'react';

const YoutubeThumb = props => {
    if(props.selected){
        return(
                <img 
                    className={"youtube-thumbnail selected"}
                    src={`https://img.youtube.com/vi/${props.ID}/0.jpg`}
                    alt= "youtube thumbnail"
                    height="auto"
                    width="100%"
                />
        )
    }else{
        return (
            // <div className={"youtube-thumbnail"}
                
                <img 
                    className={"youtube-thumbnail"}
                    onClick={props.onClick}
                    src={`https://img.youtube.com/vi/${props.ID}/0.jpg`}
                    alt= "youtube thumbnail"
                />
            // </div>
        )
    }
}
export default YoutubeThumb;