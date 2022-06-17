import Image from 'next/image';
import { Fragment } from 'react';
import classes from './TestFavs.module.css';


export default function TestFavs(props) {

    const videoData = props.data;
    const imgSrc = `/video_thumbnail/${videoData.videoid}.png`;
    const imgTitle = videoData.chinese;

    return (
        <Fragment>
            <div className={classes.container1}>
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
            </div>
            <div className={classes.content}>
                <div className={classes.container2}>
                    <div className={classes.info}>
                        <h6 style={{marginBottom: '2px'}}>{videoData.chinese}</h6>
                        <div className={classes.videotype} data-content={`>> categories`}>
                            <p>{videoData.type}</p>
                        </div>
                    </div>
                </div>
            </div>  
        </Fragment>
    );
};

