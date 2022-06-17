import { useState } from 'react';
import VideoContainer from '../blocks/VideoContainer';
import VideoImage from '../blocks/VideoImage';
import VideioDescription from '../blocks/VideoDescription';
import EditIcon from './EditIcon';
import classes from './VideoEdit.module.css';
import { FAVORITE_IDS } from '../../data';


function VideoEdit(props) {

    // console.log(props.data);
    const handleChange = props.change_list;
    const passId = props.data.videoid;

    const [isLoved, setIsLoved] = useState(FAVORITE_IDS.all.includes(passId));
    function handleClick() {
        if (isLoved) {
            handleChange(isLoved, passId);
            setIsLoved(false);
        } else {
            handleChange(isLoved, passId);
            setIsLoved(true);
        }
    };

    return (
        <VideoContainer>
            <VideoImage data={props.data}/>
            <div className={classes.content}>
                <VideioDescription data={props.data}/>
                <div className={classes.icon} >
                    <EditIcon isLovedFunc={handleClick} is_loved={isLoved} data={props.data}/>
                </div> 
            </div> 
        </VideoContainer>
    );
}

export default VideoEdit;


