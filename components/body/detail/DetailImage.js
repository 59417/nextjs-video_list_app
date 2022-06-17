import Image from 'next/image';
import { Fragment } from 'react';
// import classes from './DetailImage.module.css';


function DetailImage (props) {

    const videoData = props.data;
    const imgSrc = `/video_thumbnail/${videoData.videoid}.png`;
    const imgTitle = videoData.chinese;

    return (
        <Fragment>
            <div>
                <Image
                    unoptimized={true}
                    src={imgSrc}
                    alt={imgTitle}
                    width='612%'
                    height='360%'
                />
            </div>
        </Fragment>
    )
};

export default DetailImage;


