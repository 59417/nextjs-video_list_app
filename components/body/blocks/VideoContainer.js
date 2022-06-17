import classes from './VideoContainer.module.css';

function VideoContainer(props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default VideoContainer;
