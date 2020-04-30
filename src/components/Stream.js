import React, { Component } from 'react';
import YoutubeFrame from "./YoutubeFrame";
import YoutubeThumb from "./YoutubeThumb";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Stream extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            error: null,
            isLoaded: false,
            videoItems: [],
            videoPlayingIndex: 0
        }
    }

    componentDidMount(){
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_GAPI_KEY}&channelId=UCSpycUnuU0IVF7gGIhGojhg&part=snippet,id&order=date&maxResults=50`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        videoItems: result.items
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    })
                }
            )
    }

    changeNowPlaying(newIndex){
        this.setState({
            videoPlayingIndex: newIndex
        });
    }

    render(){
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };

        if (this.state.isLoaded) {
            console.log(this.state.videoItems);
            var myThumbnails = this.state.videoItems.map( (video, index) => {
                if(index !== this.state.videoPlayingIndex && index < 8){
                    return <YoutubeThumb ID={video.id.videoId} onClick={() => this.changeNowPlaying(index)} />
                }
            })
            return (
                <>
                    Playing now
                    <YoutubeFrame ID={this.state.videoItems[this.state.videoPlayingIndex].id.videoId} />
                    New videos
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={false} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {myThumbnails}
                    </Carousel>
                </>
            )
        }
        else{
            return(
                <div>loading...</div>
            )
        }
    }
}
export default Stream;