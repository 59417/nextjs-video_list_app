import VideoContainer from './VideoContainer';
import VideoImage from './VideoImage';
import VideioDescription from './VideoDescription';
import classes from './Video.module.css';


function Video(props) {
    return (
        <VideoContainer className={classes.container}>
            <VideoImage data={props.data} />
            <div className={classes.content}>
                <VideioDescription data={props.data} />
            </div>       
        </VideoContainer>
    );
}

export default Video;


