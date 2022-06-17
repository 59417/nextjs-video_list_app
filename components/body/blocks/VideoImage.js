import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import classes from './VideoImage.module.css';


function VideoImage (props) {

    const videoData = props.data;
    const imgSrc = `/video_thumbnail/${videoData.videoid}.png`;
    const imgTitle = videoData.chinese;

    return (
        <Fragment>
            <Link href={`/view-all/${videoData.videoid}`} className={classes.container}>
                <span className={classes.bottom}>
                    <Image
                        unoptimized={true}
                        src={imgSrc}
                        alt={imgTitle}
                        width={'300%'}
                        height={'177%'}
                        layout={"responsive"}
                    />
                </span>
            </Link>
        </Fragment>
    )
};

export default VideoImage;


