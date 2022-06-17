import Link from 'next/link';
import { useState } from 'react';
import classes from './VideoThumbnail.module.css';

function VideoThumbnail (props) {

    const videoId = props.video_id;
    const videoTitle = props.video_title;
    const videoImg =  `video_thumbnail/${videoId}.png`;
    const linkPage = '/view-all/' + videoId;

    const [onVideo, setOnVideo] = useState(false);  // 初始值 
    const [isVideoId, setisVideoId] = useState("");  // 初始值 

    function handleMouseOver(event) {
        setOnVideo(true);
        setisVideoId(videoId);
    };

    function handleMouseLeave() {
        setOnVideo(false);
        setisVideoId("");
    };

    function getImgClassse() {
        if (onVideo) {
            return classes.thumbnail_hover
        } else {
            return classes.thumbnail
        }
    };

    function getTitleClassse() {
        if (onVideo) {
            return classes.title_hover
        } else {
            return classes.title
        }
    };

    function getHoverClassse() {
        if (onVideo) {
            return classes.hovertext_show
        } else {
            return classes.hovertext
        }
    };

    return (
        <Link href={`view-all/${videoId}`}>
            <div 
                onMouseOver={handleMouseOver} 
                onMouseLeave={handleMouseLeave}
                style={{'width': '100%', 'height': '100%', 'position': 'relative'}}
            >
                <img 
                    src={videoImg} 
                    alt={videoTitle} 
                    className={getImgClassse()} 
                />
                <span className={getHoverClassse()}>
                    Photo Credit: {props.credit ? props.credit : `Netflix`}
                </span>
                <p className={getTitleClassse()}>{videoTitle}</p>
            </div>
        </Link>
    );
};

export default VideoThumbnail;