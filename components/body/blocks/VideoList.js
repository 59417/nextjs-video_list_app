//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Fragment } from 'react';
import Video from './Video';
import classes from './VideoList.module.css';


function VideoList(props) {

  function isResults(data) {
    if (data.length !== 0) {
      return (
          <div className={classes.video_container}>
            <div className="columns is-multiline is-desktop">
                {props.data.map((video) => (
                    <div className="column is-3-desktop is-12-tablet" key={video.videoid}>
                        <div className={classes.container}>
                            <Video
                                key={video.videoid}
                                id={video.videoid}
                                data={video}
                            />
                        </div>
                    </div>
                ))}
            </div>
          </div>
      )
    } else {
      return (
        <div style={{display: 'flex', height: '80vh', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{fontSize: '3rem', color: 'grey'}}>
            No Search Results
          </div>
        </div>
      )
    }
  };

  return (
    <Fragment>
      {isResults(props.data)}
    </Fragment>
  );
};


export default VideoList;
