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
            isMineLoaded: false,
            videosItems: [],
            playlistPlayingIndex: 0, //0 = new videos,
            videoPlayingIndex: 0
        }
    }

    componentDidMount(){
        const videoCount = 10;
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_GAPI_KEY}&channelId=UCSpycUnuU0IVF7gGIhGojhg&type=video&part=snippet,id&order=date&maxResults=${videoCount}`)
            .then(res => res.json())
            .then(
                (result) => {
                    var myNewVideoItems = [...this.state.videosItems];
                    myNewVideoItems[0] = result.items;
                    this.setState({
                        isLoaded: true,
                        videosItems: myNewVideoItems
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    })
                }
            )

        fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_GAPI_KEY}&q=tour+de+france&type=video&part=snippet,id&maxResults=${videoCount}`)
        .then(res => res.json())
        .then(
            (result) => {
                var myNewVideoItems = [...this.state.videosItems];
                myNewVideoItems[1] = result.items;
                this.setState({
                    isMineLoaded: true,
                    videosItems: myNewVideoItems
                })
            },
            (error) => {
                this.setState({
                    isMineLoaded: true,
                    error: error
                })
            }
        )
    }

    changeNowPlaying(playlistIndex, newIndex){
        this.setState({
            playlistPlayingIndex: playlistIndex,
            videoPlayingIndex: newIndex
        });
    }

    render(){
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 5,
                slidesToSlide: 4 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 2,
                slidesToSlide: 1 // optional, default to 1.
            }
        };

        if (this.state.isLoaded && this.state.isMineLoaded) {
            console.log(this.state.videosItems);
            var myVideosThumbnails = this.state.videosItems.map( (playlist, thisPIndex) =>{
                return playlist.map( (video, thisVIndex) => {
                    if(this.state.playlistPlayingIndex === thisPIndex && this.state.videoPlayingIndex === thisVIndex){
                        return (
                            <YoutubeThumb 
                                key={video.id.videoId}
                                ID={video.id.videoId} 
                                title={video.snippet.title}
                                selected={true} />)
                    }
                    else{
                        return (<YoutubeThumb 
                            key={video.id.videoId}
                            ID={video.id.videoId} 
                            title={video.snippet.title}
                            selected={false} 
                            onClick={() => this.changeNowPlaying(thisPIndex, thisVIndex)} />)
                    }
                })
            }) 
            
            return (
                <div className="page-content-holder container-xl">
                    <h2 className="stream-headings">Playing now</h2>
                    <YoutubeFrame ID={this.state.videosItems[this.state.playlistPlayingIndex][this.state.videoPlayingIndex].id.videoId} />
                    <h2 className="stream-headings">New videos</h2>
                    <Carousel
                        additionalTransfrom={0}
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={false}
                        infinite={true}
                        autoPlay={false}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {myVideosThumbnails[0]}
                    </Carousel>
                    <h2 className="stream-headings">For You</h2> 
                    
                    <Carousel
                        additionalTransfrom={0}
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={false}
                        infinite={true}
                        autoPlay={false}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {myVideosThumbnails[1]}
                    </Carousel>
                </div>
            )
        }
        else{
            return(
                <div className="page-content-holder"> loading...</div>
            )
        }
    }
}
export default Stream;